import { Calendar, FileStack, Flame } from "lucide-react";
import React from "react";

export default function Rightsidebar() {
  return (
    <>
      <aside className="w-16 fixed right-0 hidden lg:flex flex-col items-center py-4 space-y-6 pr-10">
        <div className="flex flex-col items-end gap-2">
          <div className="bg-white shadow rounded-full flex items-center justify-center text-xs p-1 font-bold gap-2">
            <span className="bg-yellow-400 w-fit h-fit text-[10px] rounded-full p-1">
              ZU
            </span>
            <span className="text-sm pr-1">120</span>
          </div>
          <div className="bg-white shadow rounded-full flex items-center justify-center text-xs mt-2 p-1 gap-1">
            <Flame size={20} className="text-orange-600" fill="#F59E0B" />
            <span className="font-bold pr-1">20</span>
          </div>
          <div className="bg-gray-100 shadow rounded-full flex items-center justify-center text-xs mt-2 p-1 gap-1">
            <button className="p-2 text-zinc-900 hover:bg-gray-100 rounded-full bg-gray-200">
              <Calendar size={20} />
            </button>
          </div>
          <div className="bg-gray-100 shadow rounded-full flex items-center justify-center text-xs mt-2 p-1 gap-1">
            <button className="p-2 text-zinc-900 hover:bg-gray-100 rounded-full bg-gray-200">
              <FileStack size={20} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
