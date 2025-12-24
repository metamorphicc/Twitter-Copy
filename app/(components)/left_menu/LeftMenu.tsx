"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { menuIcons } from "../../shared/data/MenuButtons.data";
import DropoutMenu from "../toggleMenu";
import { useSession } from "next-auth/react";

function toCapitalize(arg: string): string {
  return arg.split("")[0].toUpperCase() + arg.split("").slice(1).join("");
}

export function LeftMenu(): any {
  const router = useRouter();
  const path = usePathname();
  const [more, setMore] = useState(false);
  const toggleMenu = () => {
    setMore((prev) => !prev);
  };
  const session = useSession()
  return (
    <div className="h-screen sticky top-0 flex flex-col">
      <div className="sticky w-60 h-full flex flex-col justify-between">
        <ul className="space-y-3 p-4 pr-0 flex flex-col justify-items-start">
          <li>
            <Link href={"/"} onClick={() => router.replace("/")}>
              <Image
                src={"/Xlogo.svg"}
                alt="asdf"
                width={40}
                height={40}
                className="ml-2 mt-2"
              ></Image>
            </Link>
          </li>
          {menuIcons.map((icon) => (
            <li className="gap-6" key={icon.id}>
              {icon.name === "More" ? (
                <>
                  <div
                    className="group w-min-30 flex font-medium relative cursor-pointer"
                    onClick={toggleMenu}
                  >
                    {more && (
                      <>
                        <div className="fixed w-screen inset-0 z-90"></div>

                        <DropoutMenu />
                      </>
                    )}

                    <div className="transition duration-100 group-hover:bg-zinc-800 flex p-3 rounded-[50px]">
                      <Image
                        src={`${icon.icon}`}
                        alt="home icon"
                        width={27}
                        height={27}
                      />

                      {path === `/${icon.name}` ||
                      (path === "/" && `${icon.name}` === "home") ? (
                        <span className="ml-3 font-semibold text-[19px] pl-2">
                          {`${toCapitalize(icon.name)}`}
                        </span>
                      ) : (
                        <span className="ml-3 text-[19px] pl-2">{`${toCapitalize(
                          icon.name
                        )}`}</span>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <Link
                    href={`${icon.link}`}
                    className="group w-min-30 flex font-medium"
                  >
                    <div className="transition duration-100 group-hover:bg-zinc-800 flex p-2 rounded-[50px]">
                      <Image
                        src={`${icon.icon}`}
                        alt="home icon"
                        width={27}
                        height={27}
                        className=""
                      />

                      {path === `/${icon.name}` ||
                      (path === "/" && `${icon.name}` === "home") ? (
                        <span className="ml-3 font-semibold text-[19px] pl-2">
                          {`${toCapitalize(icon.name)}`}
                        </span>
                      ) : (
                        <span className="ml-3 text-[19px] pl-2">{`${toCapitalize(
                          icon.name
                        )}`}</span>
                      )}
                    </div>
                  </Link>
                </div>
              )}
            </li>
          ))}

          <li>
            <div className="mt-5">
              <button
                className="
            w-[90%] cursor-pointer text-lg bg-white text-black rounded-[40px] py-2.5 font-semibold transition duration-200 hover:bg-zinc-300"
              >
                Post
              </button>
            </div>
          </li>
          <li className="mt-5">
            
          </li>
          
        </ul>
        <div className="mb-3">
              <button
                className="
            w-[96%] bottom-0 cursor-pointer text-lg bg-black text-black rounded-[50px]  font-semibold transition duration-200 hover:bg-neutral-900"
              >
                <div className="px-3 py-1.5 flex items-center">
                  <div className="flex items-center">
                  <Image src={session.data?.user?.image as string ?? "/black.svg"} alt="" width={40} height={40} className="rounded-[40px]">
                    
                  </Image>
                </div>
                <div className="flex-1 items-start mx-2 flex  flex-col">
                    <p className="text-white text-[15px]">{session.data?.user?.name ?? "null"}</p> {/*СМЕНИТЬ NULL НА ""*/}
                    <span className="text-zinc-500 text-[15px]">@morph_lowbanker</span>
                </div>
                <div className=" flex justify-end">
                <Image src="/threepoints.svg" alt="=" width={13} height={13} className="rounded-[40px]">
                    
                    </Image>
                </div>
                </div>
                
              </button>
            </div>
      </div>
    </div>
  );
}

export default LeftMenu;
