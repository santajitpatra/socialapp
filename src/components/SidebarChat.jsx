import React from 'react'
import { Avatar } from "@mui/material";


const SidebarChat = () => {
  return (
    <div className='flex p-5 ml-4 cursor-pointer border-b hover:bg-slate-200'>
      <Avatar />
      <div className='ml-5'>
      <h2 className='mb-2'>Rama patra</h2>
      <p className='text-xs'>last message seen</p>
      </div>
    </div>
  )
}

export default SidebarChat
