"use client";
import RightMenu from "../../right_menu/RightMenu";
import LeftMenu from "../../left_menu/LeftMenu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function List() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-center h-screen">
        <div className=" flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex flex-col items-center">
            <div className=" w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between p-3 items-center">
                <div className="flex items-center">
                  <div>
                    <Link
                      href={"/"}
                      className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center mr-3"
                    >
                      <Image
                        src={"/left.svg"}
                        alt="asdf"
                        width={15}
                        height={15}
                      ></Image>
                    </Link>
                  </div>
                  <div className="flex justify-center w-110 items-center">
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
                          placeholder={"Search lists"}
                          name="search"
                          autoComplete="off"
                          className="w-full placeholder-white placeholder:font-light placeholder:text-sm h-full outline-none ml-2"
                        />
                      </form>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 justify-between">
                  <div className="flex justify-around">
                    <Link
                      href={"/"}
                      className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                    >
                      <Image
                        src={"/addlist.svg"}
                        alt="asdf"
                        width={20}
                        height={20}
                      ></Image>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/"}
                      className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                    >
                      <Image
                        src={"/threepoints.svg"}
                        alt="asdf"
                        width={15}
                        height={15}
                      ></Image>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-50 p-5 text-[20px] font-bold">
                <h1>Discover new Lists</h1>
              </div>
            </div>
            <div className="flex border-zinc-700 h-full w-full bg-zinc-950 p-5 text-[20px] font-bold border-t">
              Your lists
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
