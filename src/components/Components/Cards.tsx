"use client"
import React, { useState } from 'react'

type CardProps = {
  title: string;
};

function Cards({ title }: CardProps) {
 const[expand,SetExpand] =useState(true);

  const handleClick = () => {
    SetExpand(!expand);
  }
  return (
    <div>
   <div onClick={handleClick} className={` ${expand ? 'w-[100vw] z-50 h-[100vh]' : 'w-[100vw] z-50 h-[100vh]'} duration-400 overflow-hidden h-30 w-30 md:h-55 md:w-55 rounded-lg bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 shadow-lg shadow-neutral-900/20`}> 
      {title}
       </div>
    </div>
  )
}

export default Cards