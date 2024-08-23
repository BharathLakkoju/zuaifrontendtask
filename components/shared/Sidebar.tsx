"use client";
import { BookText, Files, FileQuestion, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";
import account from "@/public/account.png";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex lg:w-[5rem] w-dvw h-[5rem] lg:h-screen bg-transparent fixed z-50">
      <aside className="bg-white shadow flex flex-row lg:flex-col items-center lg:space-y-6 lg:m-2 rounded-md w-full px-2 lg:p-0">
        <div className="w-full h-full flex flex-row lg:flex-col items-center lg:py-4 lg:space-y-6">
          <Link className="text-xl text-purple-600 font-bold" href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <Link
            className="p-2 bg-purple-100 rounded-lg hidden lg:block"
            href="/evaluation"
          >
            <div className="grid grid-cols-2 gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-600 rounded-[2px]"
                ></div>
              ))}
            </div>
          </Link>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden lg:block">
            <BookText size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden lg:block">
            <Files size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden lg:block">
            <FileQuestion size={20} />
          </button>
        </div>
        <div className="flex items-center">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg hidden lg:block">
            <Image src={account} alt="account" />
          </button>
          <Link
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
            href={"/evaluation"}
          >
            <Menu size={32} />
          </Link>
        </div>
      </aside>
    </div>
  );
}
