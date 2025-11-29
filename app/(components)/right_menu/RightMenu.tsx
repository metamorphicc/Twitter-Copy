"use client";
import Image from "next/image";
import SubSec from "./subSec";
import { usePathname } from "next/navigation";
import { WhatsHappenin } from "./WhatsHappenin";
import WhoToFollow from "./WhoToFollow";

export function RightMenu() {
  const path = usePathname();
  return (
    <div className=" h-screen sticky top-0 w-90 justify-center items-center">
      <div className="flex justify-center flex-col items-center">
        <div className="flex justify-center w-full">
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
                className="w-full placeholder-white placeholder:font-light placeholder:text-sm h-full outline-none ml-2"
              />
            </form>
          </div>
        </div>
        <br />
        <SubSec />
        <hr className="border-zinc-700 my-3 w-[90%]" />

        <WhatsHappenin />
        <WhoToFollow/>
        <hr className="border-zinc-700 my-3" />
      </div>
    </div>
  );
}

export default RightMenu;
