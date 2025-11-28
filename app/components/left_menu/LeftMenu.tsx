"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { menuIcons } from "../../shared/data/MenuButtons.data";

export function LeftMenu(): any {
  const router = useRouter();

  return (
    <div className="h-screen sticky top-0">
      <div className="sticky w-60">
        <ul className="space-y-3 p-4 pr-0 flex flex-col justify-items-start">
          <li>
            <Link href={"/"} onClick={() => router.push("/")}>
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
              <Link
                href={`${icon.link}`}
                className="py-2 rounded-[50px] w-2/3 px-2 transition hover:bg-zinc-800 flex items-center  font-semibold"
              >
                <Image
                  src={`${icon.icon}`}
                  alt="home icon"
                  width={30}
                  height={30}
                />

                <span className="ml-3">{icon.name}</span>
              </Link>
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
