"use client";
import Posts from "../Posts";
import "tailwindcss";
import tweets from "../../shared/data/tweets.data";
import name from "../../server/fetchInput";
import { LeftMenu } from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AutoResizeTextarea from "@/app/AutoResizeTextArea";

export default function Home() {
  const path = usePathname();
  const router = useRouter();
  return (
    <div className="w-full flex justify-center">
      <LeftMenu />
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
              src="/morph.jpg"
              alt="profile"
              width={45}
              height={45}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <AutoResizeTextarea />

            
            <div className="flex justify-between items-center mt-3">
              <ul className="flex gap-4 text-sky-500">
                <li>
                  <Image src="/picture.svg" alt="" width={21} height={21} />
                </li>
                <li>
                  <Image src="/gif.svg" alt="" width={21} height={21} />
                </li>
                <li>
                  <Image src="/poll.svg" alt="" width={21} height={21} />
                </li>
                <li>
                  <Image src="/smile.svg" alt="" width={21} height={21} />
                </li>
                <li>
                  <Image src="/calendar.svg" alt="" width={21} height={21} />
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
          </div>
        </div>

        <div className="border border-zinc-700 bg-black min-w-70 w-145 flex justify-center flex-col gap-6">
          {tweets.map((tweet) => (
            <Posts
              key={tweet.id}
              message={tweet.text}
              user={tweet.user}
            ></Posts>
          ))}
        </div>
      </div>
      <RightMenu />
    </div>
  );
}
