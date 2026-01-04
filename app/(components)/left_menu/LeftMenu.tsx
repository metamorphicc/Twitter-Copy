"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuIcons } from "../../shared/data/MenuButtons.data";
// import DropoutMenu from "../toggleMenu";
import { useSession } from "next-auth/react";
import { response } from "express";
import { Portal } from "@/app/shared/components/Portal";
import Modal from "@/app/shared/components/modalWindow";
import ModalForPosts from "@/app/shared/components/modalForPosts";
import ModalMore from "@/app/shared/components/modalMore";
import { useRef, useLayoutEffect } from "react";

function toCapitalize(arg: string): string {
  return arg.split("")[0].toUpperCase() + arg.split("").slice(1).join("");
}

export function LeftMenu(): any {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const sessionS = useSession();
  const [rect, setRect] = useState<DOMRect | null>(null);

  const id = sessionS.data?.user?.id;
  const handleAction = (e: React.FormEvent) => {
    const trimmed = text.trim();
    if (!trimmed) {
      e.preventDefault();

      return;
    }
    fetch("http://localhost:8089/api/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ text, id }),
    });
    setText("");
    if (ref.current) {
      ref.current.style.height = "auto";
    }
  };
  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };
  const [postOpened, setPostOpened] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const [more, setMore] = useState(false);
  const [tag, setTag] = useState("");
  const toggleMenu = () => {
    setMore((prev) => !prev);
  };
  const session = useSession();
  const ids = session.data?.user?.id;
  useEffect(() => {
    if (!ids) return;
    async function getInfo() {
      const res = await fetch("http://localhost:8089/api/profiles", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: ids }),
      });
      const response = await res.json();
      setTag(response.result.tag);
    }
    getInfo();
  }, [ids]);
  useLayoutEffect(() => {
    if (!open) return;
    if (!ref.current) return;

    setRect(ref.current.getBoundingClientRect());
  }, [open]);

  function toggleMenuMore() {

    setOpen(!open);
    if (!buttonRef.current) return;
  
    const rect = buttonRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY + 6,
      left: rect.left + window.scrollX,
    });
  
    
  }

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
              {icon.name === ("More" as any) ? (
                <>
                  <div
                    className="group w-min-30 flex font-medium relative cursor-pointer"
                    ref={buttonRef}
                    onClick={toggleMenuMore}
                  >
                    {open && (
                      <>
                        <ModalMore
                          isOpen={!postOpened as any}
                          onClose={() => setOpen(false)}
                          position={position}
                        >
                          <div className="w-full shadow-[0_0_15px_rgba(0,0,0,0.25)] shadow-white/30 rounded-xl">
                            <ul className="space-y-2 rounded-[10px]">
                              <li className="hover:bg-zinc-800 h-13 transition p-3  rounded cursor-pointer flex gap-6 items-center rounded-t-[10px]">
                                <div>
                                  <Image src={"/flask.svg"} width={20} height={20} alt="asd">

                                  </Image>
                                </div>
                                <p className="font-bold text-[20px]">
                                Creator studio

                                </p>
                              </li>
                              <li className="hover:bg-zinc-800 h-13 transition p-3 cursor-pointer flex gap-6 items-center">
                              <div>
                                  <Image src={"/linkTo.svg"} width={20} height={20} alt="asd">

                                  </Image>
                                </div>
                                 <p className="font-bold text-[20px]">Ads</p>
                              </li>
                              <li className="hover:bg-zinc-800 h-13 transition p-3 cursor-pointer flex gap-6 items-center">
                              <div className="flex">
                                  <Image src={"/microphone.svg"} width={20} height={20} alt="asd">

                                  </Image>
                                </div>
                                <p className="font-bold text-[20px]">
                                Create your space

                                </p>
                              </li>
                              <li className="hover:bg-zinc-800 h-13 transition p-3 cursor-pointer flex items-center gap-6 rounded-b-xl">
                              <div>
                                  <Image src={"/gear.svg"} width={20} height={20} alt="asd">

                                  </Image>
                                </div>
                                <p className="font-bold text-[20px]">
                                   Settings and privacy

                                </p>
                              </li>
                            </ul>
                          </div>
                        </ModalMore>
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
                className="w-[90%] cursor-pointer text-lg bg-white text-black rounded-[40px]
              py-2.5 font-semibold transition duration-200 hover:bg-zinc-300"
                onClick={() => setPostOpened(!postOpened)}
              >
                Post
              </button>
              {postOpened && (
                <Portal id="modal-root">
                  <ModalForPosts
                    isOpen={postOpened}
                    onClose={() => {
                      setPostOpened(false);
                    }}
                  >
                    <>
                      <div className="h-full w-full">
                        <div className="px-2 flex flex-col h-full w-full h-30">
                          <div className="flex flex-grow">
                            <div className="pl-2 pt-3">
                              <Image
                                src={
                                  (session.data?.user?.image as string) ??
                                  "/black.svg"
                                }
                                alt="user"
                                height={33}
                                width={33}
                                className="rounded-full flex-none"
                              />
                            </div>

                            <div className="flex flex-col flex-grow pt-2">
                              <button
                                type="button"
                                className="ml-2 inline-flex items-center px-3 py-1 rounded-full border border-sky-700/70
                 text-[13px] text-sky-500 font-semibold
                 hover:bg-sky-500/10 transition-colors w-[20%]"
                              >
                                Everyone
                                <span className="ml-1 text-[11px]">▼</span>
                              </button>

                              <form
                                onSubmit={handleAction}
                                className="w-full pb-2 "
                                id="form-sub"
                              >
                                <textarea
                                  ref={ref}
                                  onInput={handleInput}
                                  className="mt-1 w-full resize-none text-white
                   p-2 pr-4 outline-none whitespace-pre-wrap overflow-y-auto break-words text-[16px] "
                                  placeholder="What’s happening?"
                                  value={text}
                                  onChange={(e) => setText(e.target.value)}
                                />
                              </form>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <hr className="w-[97%] border-zinc-700" />
                          </div>
                          <div className="flex justify-between items-center mt-3 px-2 pb-2">
                            <ul className="flex gap-2 text-sky-500">
                              <li>
                                <Link
                                  href={"/"}
                                  className="hover:bg-sky-900/30 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                                >
                                  <Image
                                    src={"/picture.svg"}
                                    alt="asdf"
                                    width={18}
                                    height={18}
                                  ></Image>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="hover:bg-sky-900/30 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                                >
                                  <Image
                                    src={"/gif.svg"}
                                    alt="asdf"
                                    width={18}
                                    height={18}
                                  ></Image>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="hover:bg-sky-900/30 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                                >
                                  <Image
                                    src={"/poll.svg"}
                                    alt="asdf"
                                    width={18}
                                    height={18}
                                  ></Image>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="hover:bg-sky-900/30 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                                >
                                  <Image
                                    src={"/smile.svg"}
                                    alt="asdf"
                                    width={18}
                                    height={18}
                                  ></Image>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="hover:bg-sky-900/30 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                                >
                                  <Image
                                    src={"/calendar-deadline.svg"}
                                    alt="asdf"
                                    width={18}
                                    height={18}
                                  ></Image>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={"/"}
                                  className="hover:bg-sky-900/30 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                                >
                                  <Image
                                    src={"/mapslocation.svg"}
                                    alt="asdf"
                                    width={18}
                                    height={18}
                                  ></Image>
                                </Link>
                              </li>
                            </ul>

                            <button
                              className="
          bg-white text-black font-semibold
          rounded-full px-4 py-1.5 text-[15px]
          hover:bg-sky-600 transition cursor-pointer
        "
                              type="submit"
                              form="form-sub"
                            >
                              Post
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  </ModalForPosts>
                </Portal>
              )}
            </div>
          </li>
        </ul>

        <div className="mb-3">
          <button className="w-[96%] cursor-pointer text-lg bg-black text-black rounded-[50px] font-semibold transition duration-200 hover:bg-neutral-900">
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
