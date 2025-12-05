"use client"

import LeftMenu from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Bookmark() {
  const router = useRouter()
  return (
    <div className="w-full flex justify-center">
      <LeftMenu />
      <div className=" flex flex-col justify-center items-center">
        <div className="border border-zinc-700 min-w-70 w-145 flex flex-col gap-2 h-full">
          <div className="p-4 w-full flex flex-col items-center">
            <div className="flex w-full gap-6"
              onClick={() => {router.back()}}>
              <Link
                href={"/"}
                className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
              >
                <Image
                  src={"/left.svg"}
                  alt="asdf"
                  width={17}
                  height={17}
                ></Image>
              </Link>
              <h1 className="text-[20px] font-bold">Bookmarks</h1>
            </div>
            <div className="flex w-full border h-10 my-5 mx-2 rounded-[50px] items-center border-zinc-700">
              <Image
                src={"/search.svg"}
                alt="fsadfdsa"
                width={15}
                height={15}
                className="ml-5"
              ></Image>
              <form action="" className="h-full flex w-full">
                <input
                  type="text"
                  placeholder={"Search Bookmarks"}
                  name="search"
                  autoComplete="off"
                  className="w-full placeholder-zinc-500 placeholder:font-light placeholder:text-sm h-full outline-none ml-2"
                />
              </form>
            </div>
          </div>
          <div className=" justify-center items-center flex">
            <div className="flex items-center flex-col w-[60%]">
              <div className="">
                <h2 className="text-[35px] font-extrabold ">Save posts for later</h2>
              <span className="text-zinc-500">
                Bookmark posts to easily find them again in the future.
              </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <RightMenu />
    </div>
  );
}

export default Bookmark;
