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
import { useSession } from "next-auth/react";

function ProfileDate(props: any) {
  const [date, setDate] = useState("");
  

  return <span>{date}</span>;
}

export default function Profile() {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [tag, setTag] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const session = useSession()
  const date = new Date(createdAt).toLocaleDateString()
  const ids = session.data?.user?.id;
  useEffect(() => {
    if (!ids) return
    async function getInfo() {
      const res = await fetch("http://localhost:8089/api/profiles", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({id: ids})
      })
      const response = await res.json();
      setTag(response.result.tag)
      setcreatedAt(response.result.createdAt)
    }
    getInfo()
  }, [ids])

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverPreview(URL.createObjectURL(file));
  }
  const [row, setRow] = useState();
  useEffect(() => {
    document.title = "Profile";
    async function getAllPosts() {
      try {
        const rows = await fetch("http://localhost:8089/api/getPosts",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ids})
        }
        );
        const data = await rows.json();
        console.log(data)
        setRow(data);
      } catch (e) {
        console.log(e);
      }
    }
    getAllPosts()
  }, []);
  const router = useRouter();
  const urls: string = usePathname();
  let result = urls.split("/").pop() as keyof typeof profiles;
  const decode = decodeURIComponent(result) as keyof typeof profiles;
  return (
    <div className="flex h-screen justify-center">
      <LeftMenu />
      <div className="w-145 h-full flex-col gap-2">
        <div className="w-full border border-zinc-700 flex-col">
          {/* ДИВ ДЛЯ ШАПКИ */}
          <header className="bg-black h-12 flex items-center">
            <div className="flex items-center justify-center w-full px-3">
              <div className="h-12 w-20">
                <div className="h-full items-center flex">
                  <Link
                    href="/#"
                    onClick={() => {
                      router.back();
                    }}
                    className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                  >
                    <Image
                      src="/left.svg"
                      alt="asd"
                      height={15}
                      width={15}
                      className="shrink-0"
                    ></Image>
                  </Link>
                </div>
                <div className="flex-1 justify-center"></div>
              </div>
              <div className="w-full h-12 flex flex-col justify-start">
                <h1 className="font-bold text-[19px] pt-1">
                  {session.data?.user?.name}
                </h1>
                <span className="text-zinc-700 text-[12px]">14.3k posts</span>
              </div>
              <div className="w-20 h-12 flex items-center justify-around gap-3">
                <Link
                  href="/#"
                  onClick={() => {
                    router.back();
                  }}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex w-full justify-center items-center"
                >
                  <Image
                    src="/grok.svg"
                    alt="asd"
                    height={18}
                    width={18}
                    className="shrink-0"
                  ></Image>
                </Link>
                <Link
                  href="/#"
                  onClick={() => {
                    router.back();
                  }}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex w-full justify-center items-center"
                >
                  <Image
                    src="/search.svg"
                    alt="asd"
                    height={17}
                    width={17}
                    className="shrink-0"
                  ></Image>
                </Link>
              </div>
            </div>
          </header>
          <div className="w-full h-50 flex flex-col justify-center items-center text-xl">
            <div
              className="relative h-48 w-full group"
              style={
                coverPreview
                  ? {
                      backgroundImage: `url(${coverPreview})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : { backgroundColor: "#0f75bd" }
              }
            >
              {/* полупрозрачный оверлей и текст только при hover */}
              <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition">
                <span className="text-sm text-white">Change cover</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCoverChange}
                />
              </label>
            </div>
          </div>

          {/* ДИВ ДЛЯ ШАПКИ */}

          <div className="w-full flex flex-col justify-between ">
            <div>
              <div className="break-words m-4 flex-col flex">
                <div className="flex justify-between relative">
                  <div className="w-30 h-17 relative top-[-80px]   rounded-full">
                    <Image
                      src={"/morph.svg"}
                      alt="asd"
                      width={130}
                      height={130}
                      className="rounded-full object-cover bottom-[-20px] border border-black"
                    ></Image>
                  </div>

                  <button className="cursor-pointer shadow border rounded-[18px] p-3 text-sm h-10 flex items-center transition delay-150 duration-300 hover:rotate-45">
                    Edit profile
                  </button>
                </div>
                <div className="mb-3 h-full">
                  <h1 className="font-bold text-[20px]">
                    {session.data?.user?.name}
                  </h1>
                  <span className="text-zinc-700 text-[15px]">
                      @{tag}
                  </span>
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
                Joined: {date}
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
                <div
                  className="w-full h-10"
                  onClick={() => {
                    console.log("sods");
                  }}
                >
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full"
                  >
                    Posts
                  </Link>
                </div>
                <div className="w-full h-10">
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full"
                  >
                    Replies
                  </Link>
                </div>
                <div className="w-full h-10">
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full"
                  >
                    Highlights
                  </Link>
                </div>
                <div className="w-full h-10">
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full"
                  >
                    Articles
                  </Link>
                </div>
                <div className="w-full h-10">
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full"
                  >
                    Media
                  </Link>
                </div>
                <div className="w-full h-10" onClick={() => signIn("google")}>
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center hover:bg-zinc-700 transition duration-200 h-full"
                  >
                    Likes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto">
          
        </div>
      </div>
      <RightMenu />
    </div>
  );
}
