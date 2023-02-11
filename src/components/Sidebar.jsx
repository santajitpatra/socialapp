import React from "react";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";

import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-[.35]">
      <div className=" flex justify-between p-5 bg-blue-500">
        <Avatar
          alt="Avatar"
          src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
        />
        <div className="flex items-center justify-between min-w-[10vw]">
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center bg-slate-100 h-10 p-3">
        <div className="flex items-center bg-white w-full h-9 rounded-3xl">
          <SearchIcon />
          <input className="border-none outline-0 ml-3" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="flex-[1] bg-white overflow-y-scroll">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
