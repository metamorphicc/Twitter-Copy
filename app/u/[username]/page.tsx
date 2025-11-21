"use client"

import "../../page";
import Image from "next/image";
import { profilesInfo } from "../../shared/data/tweets.data";
import { profile } from "console";
import { profiles } from "../../shared/data/tweets.data";
import { usePathname } from "next/navigation";
import { use } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export function ProfileDate(props: any) {
    const [date, setDate] = useState("");
  
    useEffect(() => {
      setDate(new Date(props).toLocaleDateString());
    }, []);
  
    return <span>{date}</span>;
  }

export default function Profile() {
  useEffect(() => {
    document.title = "Profile"
  })
  const router = useRouter();
  const urls: string = usePathname(); 
  let result = urls.split("/").pop() as keyof typeof profiles
  const decode = decodeURIComponent(result) as keyof typeof profiles;
  console.log(result)
  return (
    <div className="flex h-screen justify-center">
      <div className="border w-180 h-full flex-col gap-2">
        <div className="w-full border h-2/3 flex-col">
          {/* ДИВ ДЛЯ ШАПКИ */}
          <div className="w-full h-1/2 bg-gray-700/50 flex justify-center items-center text-xl">
            <button onClick={() => {router.replace("/")}} className="border p-10 cursor-pointer shadow rounded-[18px] h-10 flex items-center">
            BACK TO HOME
            </button>
          </div>
          {/* ДИВ ДЛЯ ШАПКИ */}

          <div className="w-full h-1/2 ">
            <div className="break-words m-10 flex-col">
              <div className="flex justify-between mb-5">
               
                  <div className="flex-col">
                  <p>{profiles[decode].name}</p>
                  <p>{profiles[decode].tag}</p>
                  </div>
                
                <button className="cursor-pointer shadow border rounded-[18px] p-3 text-sm h-10 flex items-center hover:">Edit profile</button>
              </div>
              <div className="min-h-20 mt-1.5">
                <p>{profiles[decode].description}</p>
              </div>
              <p className="flex gap-2 text-sm"><Image src="/calendar.svg" alt="calendar" width={22} height={22}></Image>Joined: {ProfileDate(profilesInfo[2].created_at)}</p>
            </div>
          </div>
        </div>
        <div className="border w-full"></div>
      </div>
    </div>
  );
}
