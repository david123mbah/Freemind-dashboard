import React, { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

const DEFAULT_AVATAR = "/undraw_young-man-avatar_wgbd.png";

// Utility to get chatRoomId (sorted user ids, joined by _)
function getChatRoomId(userId1, userId2) {
  return [userId1, userId2].sort().join('_');
}

const Chats = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [activeRoomId, setActiveRoomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null); // Error state

  // Get current user
  useEffect(() => {
    try {
      const auth = getAuth(app);
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      }, (err) => setError(err.message));
      return () => unsubscribe();
    } catch (err) {
      setError(err.message);
    }
  }, []);

  // Fetch chat rooms for the current user (where user is a participant)
  useEffect(() => {
    if (!currentUser) return;
    let unsub;
    try {
      const db = getFirestore(app);
      const q = query(
        collection(db, "chatRooms"),
        where("participants", "array-contains", currentUser.uid)
      );
      unsub = onSnapshot(q, (snapshot) => {
        const rooms = [];
        snapshot.forEach(doc => {
          rooms.push({ id: doc.id, ...doc.data() });
        });
        setChatRooms(rooms);
        if (rooms.length && !activeRoomId) setActiveRoomId(rooms[0].id);
      }, (err) => setError(err.message));
    } catch (err) {
      setError(err.message);
    }
    return () => unsub && unsub();
    // eslint-disable-next-line
  }, [currentUser]);

  // Fetch messages for the active chat room (real-time, always show all messages in the room)
  useEffect(() => {
    if (!activeRoomId) return;
    let unsub;
    try {
      const db = getFirestore(app);
      const messagesRef = collection(db, "chatRooms", activeRoomId, "messages");
      const q = query(messagesRef, orderBy("timestamp", "asc"));
      unsub = onSnapshot(q, (snapshot) => {
        const msgs = [];
        snapshot.forEach(doc => {
          msgs.push({ id: doc.id, ...doc.data() });
        });
        setMessages(msgs);
      }, (err) => setError(err.message));
    } catch (err) {
      setError(err.message);
    }
    return () => unsub && unsub();
  }, [activeRoomId]);

  // Find active chat room details
  const activeRoom = chatRooms.find(room => room.id === activeRoomId);

  // Send message to Firebase
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !currentUser || !activeRoomId) return;
    try {
      const db = getFirestore(app);
      const messagesRef = collection(db, "chatRooms", activeRoomId, "messages");
      await addDoc(messagesRef, {
        senderId: currentUser.uid,
        receiverId: activeRoom.participants.find(uid => uid !== currentUser.uid),
        text: message,
        timestamp: serverTimestamp(),
        isRead: false,
      });
      // Optionally update chatRoom lastMessage
      await setDoc(
        doc(db, "chatRooms", activeRoomId),
        {
          lastMessage: message,
          lastMessageTime: serverTimestamp(),
          lastMessageSenderId: currentUser.uid,
        },
        { merge: true }
      );
      setMessage('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fafbfa] font-sans">
      <div className="flex-1 ml-[230px]">
        <div className="h-screen flex">
          {/* Chat List */}
          <div className="w-[340px] bg-white border-r border-[#ededed] rounded-l-[32px] flex flex-col">
            <div className="p-6 border-b border-[#ededed]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-[#ededed] rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7E924] focus:border-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                />
                <span className="absolute left-3 top-2.5 text-[#bdbdbd]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </div>
              {error && (
                <div className="mt-2 text-red-500 text-sm">
                  {error}
                </div>
              )}
            </div>
            <div className="overflow-y-auto flex-1">
              {chatRooms.map((room) => (
                <button
                  key={room.id}
                  className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-[#fafbfa] transition ${
                    activeRoomId === room.id ? 'bg-[#F7E924]/20' : ''
                  }`}
                  onClick={() => setActiveRoomId(room.id)}
                >
                  <div className="relative">
                    <img
                      src={room.avatarUrl || DEFAULT_AVATAR}
                      alt={room.name || "Chat"}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#F7E924]"
                      onError={e => { e.target.onerror = null; e.target.src = DEFAULT_AVATAR; }}
                    />
                    <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      room.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                    }`}></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-bold text-[#232323] truncate">{room.name || "Chat"}</h3>
                    </div>
                    <p className="text-sm text-[#bdbdbd] truncate">{room.lastMessage || ""}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-[#fafbfa] rounded-r-[32px]">
            {activeRoom ? (
              <>
                {/* Chat Header */}
                <div className="p-6 border-b border-[#ededed] bg-white flex items-center justify-between rounded-tr-[32px]">
                  <div className="flex items-center gap-4">
                    <img
                      src={activeRoom.avatarUrl || DEFAULT_AVATAR}
                      alt={activeRoom.name || "Chat"}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#F7E924]"
                      onError={e => { e.target.onerror = null; e.target.src = DEFAULT_AVATAR; }}
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#232323]">{activeRoom.name || "Chat"}</h3>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-8 bg-[#fafbfa]">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.senderId === currentUser?.uid ? 'justify-end' : 'justify-start'} mb-4`}
                    >
                      <div className={`max-w-[70%] ${msg.senderId === currentUser?.uid ? 'order-2' : ''}`}>
                        <div className={`rounded-2xl px-6 py-4 ${
                          msg.senderId === currentUser?.uid
                            ? 'bg-[#232323] text-[#F7E924]'
                            : 'bg-white text-[#232323] border border-[#ededed]'
                        }`}>
                          <p className="text-base">{msg.text || msg.content}</p>
                        </div>
                        <p className={`text-xs mt-1 ${msg.senderId === currentUser?.uid ? 'text-right' : ''} text-[#bdbdbd]`}>
                          {msg.timestamp && msg.timestamp.toDate
                            ? msg.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-6 bg-white border-t border-[#ededed] rounded-b-[32px]">
                  <form onSubmit={sendMessage} className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 py-3 px-6 border border-[#ededed] rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7E924] focus:border-[#F7E924] text-base bg-[#fafbfa] placeholder:text-[#bdbdbd]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="p-3 text-[#232323] bg-[#F7E924] rounded-full hover:bg-[#e6e04d] transition"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-[#fafbfa] rounded-r-[32px]">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-[#bdbdbd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="mt-2 text-base font-bold text-[#232323]">No chat selected</h3>
                  <p className="mt-1 text-sm text-[#bdbdbd]">Select a conversation to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;