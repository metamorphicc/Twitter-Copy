"use client";

import "../page";
import Image from "next/image";
import { profilesInfo } from "../shared/data/tweets.data";
import { profiles } from "../shared/data/tweets.data";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import LeftMenu from "@/app/(components)/left_menu/LeftMenu";
import RightMenu from "@/app/(components)/right_menu/RightMenu";
import { ThemeProvider } from "@/app/context/ThemeContext";
import ThemeButton from "@/app/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
export function ProfileDate(props: any) {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date(props).toLocaleDateString());
  }, []);

  return <span>{date}</span>;
}

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });
  const router = useRouter();
  const urls: string = usePathname();
  let result = urls.split("/").pop() as keyof typeof profiles;
  const decode = decodeURIComponent(result) as keyof typeof profiles;
  console.log(result);
  return (
    <div className="flex h-screen justify-center">
      <LeftMenu />
      <div className="w-145 h-full flex-col gap-2">
        <div className="w-full border border-zinc-700 h-2/3 flex-col">
          {/* ДИВ ДЛЯ ШАПКИ */}
          <div className="w-full h-1/2 bg-gray-700/50 flex justify-center items-center text-xl">
            
          </div>

          {/* ДИВ ДЛЯ ШАПКИ */}

          <div className="w-full flex flex-col justify-between h-1/2">
            <div>
              <div className="break-words m-6 flex-col">
              <div className="flex justify-between mb-5">
                <div className="flex-col">
                  <p>{profiles[decode].name}</p>
                  <p>{profiles[decode].tag}</p>
                </div>

                <button className="cursor-pointer shadow border rounded-[18px] p-3 text-sm h-10 flex items-center transition delay-150 duration-300 hover:rotate-45">
                  Edit profile
                </button>
              </div>
              <div className="min-h-5 mt-1.5 mb-3">
                <p>{profiles[decode].description}</p>
              </div>
              
            </div>
            </div>
            
        <div className="flex items-start flex-col">
          <p className="flex gap-2 text-sm ml-6">
                <Image
                  src="/calendar.svg"
                  alt="calendar"
                  width={22}
                  height={22}
                ></Image>
                Joined: {ProfileDate(profilesInfo[2].created_at)}
              </p>
          <div className="flex gap-5 ml-6 text-[15px]">
            <div>
              50000 <span className="text-zinc-500">подписан</span>
            </div>
            <div>
              50000 <span className="text-zinc-500">подпищики</span>  
            </div>
          </div>
          <div className="w-full flex items-center justify-center text-[16px] text-zinc-500 mt-5">
            <div className="w-full h-10"
            onClick={() => {console.log("sods")}}>
              <Link href="#" className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full">
                Posts
              </Link>
            </div>
            <div className="w-full h-10">
            <Link href="#" className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full">
                Replies
              </Link>
            </div>
            <div className="w-full h-10">
            <Link href="#" className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full">
                Highlights
              </Link>
            </div>
            <div className="w-full h-10">
            <Link href="#" className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full">
                Articles
              </Link>
            </div>
            <div className="w-full h-10"> 
            <Link href="#" className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full">
                Media
              </Link>
            </div>
            <div className="w-full h-10"
            onClick={() => signIn("google")}> 
            <Link href="#" className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full">
                Likes
              </Link>
            </div>
          </div>
        </div>
          </div>
        </div>
        
      </div>
      <RightMenu />
    </div>
  );
}
