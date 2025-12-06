"use client";

import LeftMenu from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Notification(props: any) {
  const router = useRouter();
  const path = usePathname();

  return (
    <>
      <div className="w-full flex justify-center">
        <LeftMenu />
        <div className="flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex flex-col bg-black items-center">
            <div className="h-1/7 w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between p-3 items-center">
                <h1 className="font-bold tracking-wide text-[22px] pl-2">
                  Notifications
                </h1>
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
              <div className="flex h-full justify-around items-center border-b-1 border-zinc-700">
                <div className="w-1/3 h-full justify-center items-center flex">
                  <Link
                    href={"#"}
                    onClick={(e) => {
                      e.preventDefault();
                      router.replace("/notifications");
                    }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {path === "/notifications" ? 
                    <p className="text-white font-bold">
                      All
                    </p> : 
                    <p> All </p>
                    }
                    
                  </Link>
                </div>

                <div className="w-1/3 h-full justify-center items-center flex">
                  <Link
                    href={"#"}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/notifications/verified");
                    }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {path === "/notifications/verified" ? 
                    <p className="text-white font-bold">
                      Verified
                    </p> : 
                    <p>Verified</p>
                    }
                  </Link>
                </div>

                <div className="w-1/3 h-full justify-center items-center flex">
                  <Link
                    href={"#"}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/notifications/mentions");
                    }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {path === "/notifications/mentions" ? 
                    <p className="text-white font-bold">
                      Mentions
                    </p> : 
                    <p>Mentions</p>
                    }
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex">
                    <div className="w-full flex flex-col items-center">
                      <div className="p-5 items-center flex flex-col m-8">
                      <h4 className="font-extrabold text-[30px] text-wrap">Nothing to see here - yet</h4>
                      <span>When someone mentions you, you’ll find it here.</span>
                      </div>
                      
                    </div>
          </div>
          </div>
          
        </div>
        <RightMenu />
      </div>
    </>
  );
}

export default Notification;
