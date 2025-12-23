"use client";
import Posts from "../Posts";
import "tailwindcss";
import tweets from "../../shared/data/tweets.data";
import name from "../../server/fetchInput";
import { LeftMenu } from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AutoResizeTextarea from "@/app/AutoResizeTextArea";
import { getServerSession } from "next-auth";
import { handler } from "../../api/auth/[...nextauth]/route";
import { checkSes } from "./checkSession";
import { useSession } from "next-auth/react";

export default function Home() {
  const path = usePathname();
  const router = useRouter();
  const session = useSession();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  console.log(session.data)
  // if (session.status == "unauthenticated") redirect("/login");
  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8089/api/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    if (ref.current) {
      ref.current.style.height = "auto";
    }
  };
  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <LeftMenu />
        <div className=" flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex flex-col items-center">
            <div className="w-full">
              <div className=" flex flex-col justify-center items-center">
                <div className="flex border border-zinc-700 w-full h-11">
                  <div className="w-full h-full justify-center items-center flex transition duration-100 hover:bg-zinc-700">
                    <Link
                      href={"#"}
                      className="w-full h-full flex justify-center items-center"
                    >
                      {path === "/notification" ? (
                        <p className="text-white font-bold">For you</p>
                      ) : (
                        <p> For you </p>
                      )}
                    </Link>
                  </div>

                  <div className="w-full h-full justify-center items-center flex transition duration-100 hover:bg-zinc-700">
                    <Link
                      href={"#"}
                      className="w-full h-full flex justify-center items-center"
                    >
                      {path === "/notification/verified" ? (
                        <p className="text-white font-bold">Following</p>
                      ) : (
                        <p>Following</p>
                      )}
                    </Link>
                  </div>
                </div>
                <div className="w-full px-4 py-3 border-x border-zinc-700 flex gap-4 ">
                  <div className="flex-shrink-0">
                    <Image
                      src={session.data?.user?.image ?? "/morph.jpg"}
                      alt="profile"
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <form onSubmit={handleAction}>
                      <textarea
                        ref={ref}
                        onInput={handleInput}
                        className="w-full overflow-hidden resize-none bg-black text-white p-2 pr-4 outline-none"
                        placeholder="What’s happening?"
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />

                      <div className="flex justify-between items-center mt-3">
                        <ul className="flex gap-4 text-sky-500">
                          <li>
                            <Image
                              src="/picture.svg"
                              alt=""
                              width={21}
                              height={21}
                            />
                          </li>
                          <li>
                            <Image
                              src="/gif.svg"
                              alt=""
                              width={21}
                              height={21}
                            />
                          </li>
                          <li>
                            <Image
                              src="/poll.svg"
                              alt=""
                              width={21}
                              height={21}
                            />
                          </li>
                          <li>
                            <Image
                              src="/smile.svg"
                              alt=""
                              width={21}
                              height={21}
                            />
                          </li>
                          <li>
                            <Image
                              src="/calendar.svg"
                              alt=""
                              width={21}
                              height={21}
                            />
                          </li>
                          <li>
                            <Image
                              src="/mapslocation.svg"
                              alt=""
                              width={21}
                              height={21}
                            />
                          </li>
                        </ul>

                        <button
                          className="
          bg-sky-500 text-white font-semibold
          rounded-full px-4 py-1.5 text-[15px]
          hover:bg-sky-600 transition
        "
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* POSTS */}
            <div>
            {tweets.map((tweet) => (
            <Posts
              key={tweet.id}
              message={tweet.text}
              user={tweet.user}
            ></Posts>
          ))}
            </div>
          </div>
        </div>
        <RightMenu />
      </div>
    </>
  );
}
