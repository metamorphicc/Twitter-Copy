"use client";

import RightMenu from "../right_menu/RightMenu";
import LeftMenu from "../left_menu/LeftMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Explore() {
  const router = useRouter();
  const path = usePathname();
  return (
    <>
      <div className="w-full flex justify-center">
        <LeftMenu />
        <div className="flex flex-col justify-center items-center">
          <div className="min-w-70 w-145 border border-zinc-700 bg-black flex flex-col h-full">
            <div className="h-1/7 w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between p-3 items-center">
                <div
                  className="w-[90%] h-[45px] flex
                                         border border-zinc-700 rounded-[60px] mt-2"
                >
                  <Image
                    src={"/search.svg"}
                    alt="fsadfdsa"
                    width={17}
                    height={17}
                    className="ml-5"
                  ></Image>
                  <form action="" className="h-full flex w-full">
                    <input
                      type="text"
                      placeholder={"Search"}
                      name="search"
                      autoComplete="off"
                      className="w-full placeholder-white placeholder:font-light placeholder:text-sm h-full outline-none ml-2"
                    />
                  </form>
                </div>
                <Link
                  href={"/"}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                >
                  <Image
                    src={"/gear.svg"}
                    alt="asdf"
                    width={18}
                    height={18}
                  ></Image>
                </Link>
              </div>
              <div className="flex h-full border-b border-zinc-700">
                <div
                  className="flex items-center justify-center hover:bg-zinc-700 text-neutral-500 w-full px-5 text-[16px] cursor-pointer"
                  onClick={() => {
                    router.replace("/explore/for_you");
                  }}
                >
                  <Link href="#">
                    {path === "/explore" || path === "/explore/for_you" ? (
                      <p className="font-bold text-white">For you</p>
                    ) : (
                      "For you"
                    )}
                  </Link>
                </div>

                <div
                  className="flex items-center justify-center hover:bg-zinc-700 text-neutral-500 cursor-pointer w-full px-5 text-[16px]"
                  onClick={() => {
                    router.replace("/explore/trending");
                  }}
                >
                  <Link href="#">
                    {path === "/explore/trending" ? (
                      <p className="font-bold text-white">Trending</p>
                    ) : (
                      "Trending"
                    )}
                  </Link>
                </div>

                <div
                  className="flex items-center justify-center hover:bg-zinc-700 text-neutral-500 cursor-pointer w-full px-5 text-[16px]"
                  onClick={() => {
                    router.replace("/explore/news");
                  }}
                >
                  <Link href="#">
                    {path === "/explore/news" ? (
                      <p className="font-bold text-white">News</p>
                    ) : (
                      "News"
                    )}
                  </Link>
                </div>

                <div
                  className="flex items-center justify-center hover:bg-zinc-700 text-neutral-500 cursor-pointer w-full px-5 text-[16px]"
                  onClick={() => {
                    router.replace("/explore/sports");
                  }}
                >
                  <Link href="#">
                    {path === "/explore/sports" ? (
                      <p className="font-bold text-white">Sports</p>
                    ) : (
                      "Sports"
                    )}
                  </Link>
                </div>

                <div
                  className="flex items-center justify-center hover:bg-zinc-700 text-neutral-500 cursor-pointer w-full px-5 text-[16px]"
                  onClick={() => {
                    router.replace("/explore/entertaiment");
                  }}
                >
                  <Link href="#">
                    {path === "/explore/entertaiment" ? (
                      <p className="font-bold text-white">Entertaiment</p>
                    ) : (
                      "Entertaiment"
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <RightMenu />
      </div>
    </>
  );
}

export default Explore;
