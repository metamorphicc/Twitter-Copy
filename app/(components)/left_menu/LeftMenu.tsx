"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { menuIcons } from "../../shared/data/MenuButtons.data";
import DropoutMenu from "../toggleMenu";

export function LeftMenu(): any {
  const router = useRouter();
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
                    {icon.icon}
                    <span className="ml-3">More</span>
                  </button>
                </>
              ) : (
                <Link
                  href={`${icon.link}`}
                  className="py-2 rounded-[50px] w-2/3 px-2 transition hover:bg-zinc-800 flex items-center  font-semibold"
                >
                  {icon.icon}

                  <span className="ml-3">{icon.name}</span>
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
