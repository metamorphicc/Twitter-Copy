"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { menuIcons } from "../../shared/data/MenuButtons.data";
import DropoutMenu from "../toggleMenu";


function toCapitalize(arg: string): string {
  return arg.split("")[0].toUpperCase() + arg.split("").slice(1).join("")
}

export function LeftMenu(): any {
  const router = useRouter();
  const path = usePathname();
  const [more, setMore] = useState(false);
  const toggleMenu = () => {
    setMore((prev) => !prev);
  };

  return (
    <div className="h-screen sticky top-0">
      <div className="sticky w-60">
        <ul className="space-y-3 p-4 pr-0 flex flex-col justify-items-start">
          <li>
            <Link href={"/"} onClick={() => router.replace("/")}>
              <Image
                src={"/X_logo.png"}
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
                  <button
                    className="py-2 rounded-[50px] w-2/3 px-2 transition hover:bg-zinc-800 flex items-center relative font-semibold"
                    onClick={toggleMenu}
                  >
                    {more && (
                      <>
                        <div className="fixed w-screen inset-0 z-90"></div>

                        <DropoutMenu />
                        <button onClick={toggleMenu}></button>
                      </>
                    )}
                    {<Image
                      src={`${icon.icon}`}
                      alt="home icon"
                      width={27}
                      height={27}
                    />}
                    <span className="ml-3">More</span>
                  </button>
                </>
              ) : (
                <Link
                  href={`${icon.link}`}
                  className="py-2 rounded-[50px] w-2/3 px-2 transition hover:bg-zinc-800 flex items-center font-medium"
                >
                  <Image
                    src={`${icon.icon}`}
                    alt="home icon"
                    width={27}
                    height={27}
                  />
                  {path === `/${icon.name}` || path === "/" && `${icon.name}` === "home" ? <span className="ml-3 font-semibold text-[19px]">{`${toCapitalize(icon.name)}`}</span> : <span className="ml-3 text-[19px]">{`${toCapitalize(icon.name)}`}</span>}
                  
                </Link>
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
        </ul>
      </div>
    </div>
  );
}

export default LeftMenu;
