"use client";

import LeftMenu from "../../left_menu/LeftMenu";
import RightMenu from "../../right_menu/RightMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Communities() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex flex-col bg-black items-center">
            <div className="h-1/8 w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between items-center h-full">
                <div className="flex w-[50%] gap-8">
                  <div
                    onClick={() => {
                      router.back();
                    }}
                  >
                    <Link
                      href={"/"}
                      className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center ml-3"
                    >
                      <Image
                        src={"/left.svg"}
                        alt="asdf"
                        width={17}
                        height={17}
                      ></Image>
                    </Link>
                  </div>

                  <h2 className="font-bold tracking-wide text-[22px]">
                    {" "}
                    Communities{" "}
                  </h2>
                </div>
                <div>
                  <div className="flex">
                    <Link
                      href={"/"}
                      className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center mr-3"
                    >
                      <Image
                        src={"/search.svg"}
                        alt="asdf"
                        width={17}
                        height={17}
                      ></Image>
                    </Link>
                    <Link
                      href={"/"}
                      className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center mr-3"
                    >
                      <Image
                        src={"/user.svg"}
                        alt="asdf"
                        width={20}
                        height={20}
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex h-[80%] border-b border-zinc-700">
                <Link
                  href={""}
                  className="w-full flex justify-center items-center hover:bg-zinc-700 transition duration-200"
                >
                  Home
                </Link>
                <Link
                  href={""}
                  className="w-full flex justify-center items-center hover:bg-zinc-700 transition duration-200"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Communities;
