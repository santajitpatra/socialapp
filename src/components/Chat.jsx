import React from "react";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
const Chat = () => {
  return (
    <div className="flex flex-col flex-[.65]">
      <div className="p-5 flex items-center border-b border-white">
        <Avatar />
        <div className="flex-[1] pl-5">
          <h3 className="mb-1 font-medium">room name</h3>
          <p className="text-gray-400">Last seen at ...</p>
        </div>
        <div>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="p-8 flex-[1] bg-green-100 overflow-y-scroll">
        <p className="relative text-base p-3 w-fit rounded-lg bg-white m-8">
          <span className="absolute -top-5 font-extrabold text-xs">Samrat</span>
          This is a message <span className="ml-3 text-xs">{new Date().toUTCString()}</span>
        </p>
        <p className="relative text-base p-3 w-fit rounded-lg bg-blue-500 m-8 ml-auto">
          <span className="absolute -top-5 font-extrabold text-xs">Samrat</span>
          This is a message <span className="ml-3 text-xs">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="flex justify-between items-center h-16 border-t border-white">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <form className="flex flex-[1]" action="">
          <input className="flex-[1] rounded-3xl p-3 border-none"
          type="text" placeholder="type message here" 
          />
          <button className="hidden" type="submit">Send</button>
        </form>
        <IconButton>
        <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
