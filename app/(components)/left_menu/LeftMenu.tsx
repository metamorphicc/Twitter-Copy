"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuIcons } from "../../shared/data/MenuButtons.data";
import DropoutMenu from "../toggleMenu";
import { useSession } from "next-auth/react";
import { response } from "express";

function toCapitalize(arg: string): string {
  return arg.split("")[0].toUpperCase() + arg.split("").slice(1).join("");
}

export function LeftMenu(): any {
  const router = useRouter();
  const path = usePathname();
  const [more, setMore] = useState(false);
  const [tag, setTag] = useState("");
  const toggleMenu = () => {
    setMore((prev) => !prev);
  };
  const session = useSession()
  const ids = session.data?.user?.id;
  useEffect(() => {
    if (!ids) return
    async function getInfo() {
      const res = await fetch("http://localhost:8089/api/profiles", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({id: ids})
      })
      const response = await res.json();
      setTag(response.result.tag)
    }
    getInfo()
  }, [ids])
  // обертка меню
return (
  <aside className="w-60">
    <div className="sticky top-0 h-screen flex flex-col justify-between">

      <ul className="space-y-3 p-4 pr-0 flex flex-col">
        <li>
          <Link href="/" onClick={() => router.replace("/")}>
            <Image
              src="/Xlogo.svg"
              alt="X"
              width={40}
              height={40}
              className="ml-2 mt-2"
            />
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
                      <div className="fixed inset-0 w-screen z-90" />
                      <DropoutMenu />
                    </>
                  )}

                  <div className="transition duration-100 group-hover:bg-zinc-800 flex p-3 rounded-[50px]">
                    <Image
                      src={icon.icon}
                      alt="home icon"
                      width={27}
                      height={27}
                    />

                    {path === `/${icon.name}` ||
                    (path === "/" && icon.name === "home") ? (
                      <span className="ml-3 font-semibold text-[19px] pl-2">
                        {toCapitalize(icon.name)}
                      </span>
                    ) : (
                      <span className="ml-3 text-[19px] pl-2">
                        {toCapitalize(icon.name)}
                      </span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <Link
                  href={icon.link}
                  className="group w-min-30 flex font-medium"
                >
                  <div className="transition duration-100 group-hover:bg-zinc-800 flex p-2 px-3 pr-4 rounded-[50px]">
                    <Image
                      src={icon.icon}
                      alt="home icon"
                      width={27}
                      height={27}
                    />

                    {path === `/${icon.name}` ||
                    (path === "/" && icon.name === "home") ? (
                      <span className="ml-3 font-semibold text-[19px] pl-2">
                        {toCapitalize(icon.name)}
                      </span>
                    ) : (
                      <span className="ml-3 text-[19px] pl-2">
                        {toCapitalize(icon.name)}
                      </span>
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
              className="w-[90%] cursor-pointer text-lg bg-white text-black rounded-[40px] py-2.5 font-semibold transition duration-200 hover:bg-zinc-300"
            >
              Post
            </button>
          </div>
        </li>
      </ul>

      <div className="mb-3">
        <button
          className="w-[96%] cursor-pointer text-lg bg-black text-black rounded-[50px] font-semibold transition duration-200 hover:bg-neutral-900"
        >
          <div className="px-3 py-1.5 flex items-center">
            <div className="flex items-center">
              <Image
                src={(session.data?.user?.image as string) ?? "/black.svg"}
                alt=""
                width={40}
                height={40}
                className="rounded-[40px]"
              />
            </div>
            <div className="flex-1 mx-2 flex flex-col items-start">
              <p className="text-white text-[15px]">
                {session.data?.user?.name ?? ""}
              </p>
              <span className="text-zinc-500 text-[15px]">@{tag}</span>
            </div>
            <div className="flex justify-end">
              <Image
                src="/threepoints.svg"
                alt="="
                width={13}
                height={13}
                className="rounded-[40px]"
              />
            </div>
          </div>
        </button>
      </div>

    </div>
  </aside>
);

}

export default LeftMenu;
