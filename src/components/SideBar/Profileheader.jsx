import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Profileheader = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300 ">
    <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full item center ">
   <img
    src='/public/hhhggggg.png'
    alt='avatar'
    className="size-8 rounded-[30%]  shrink-8 bg-blue-50  shadow"
   />
   <div className="text-start">
   <span className="text-sm font-semibold block">
     Mbah Atangana D.
   </span>
   <span className="text-xs  block text-stone-500">
      mbah1234@gmail.com
   </span>

   </div>
   <FiChevronDown className="absolute right-3 top-1/2 translate-y-[calc(-50%+4px)] text-xs"/>
   <FiChevronUp className="absolute right-3 top-1/2 translate-y-[calc(-50%-4px)] text-xs"/>

    </button>
    </div>
  )
}

export default Profileheader