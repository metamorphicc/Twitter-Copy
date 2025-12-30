"use client";
import ReactMarkdown from "react-markdown";
import Posts from "../../Posts";
import "tailwindcss";
import tweets from "../../../shared/data/tweets.data";
import name from "../../../server/fetchInput";
import { LeftMenu } from "../../left_menu/LeftMenu";
import RightMenu from "../../right_menu/RightMenu";
import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Home() {
  const path = usePathname();
  const router = useRouter();
  const session = useSession();
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const id = session.data?.user?.id;
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState("");
const [createdAt, setcreatedAt] = useState("");
const [row, setRow]: any = useState<[]>();
const [loading, setLoading] = useState(true);
const [stat, setStat] = useState([]);

  useEffect(() => {
    async function getInfo() {
      try {
        const res = await fetch("http://localhost:8089/api/profiles", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ id: id }),
        });
        const response = await res.json();
        setTag(response.result.tag);
        console.log(tag)
        setcreatedAt(response.result.createdAt);
                const statt: any = [
          response.result.followers,
          response.result.following,
        ];
        setStat(statt);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    getInfo();
    async function getAllPosts() {
      const row = await fetch("http://localhost:8089/api/posts");
      const rowJson = await row.json();
      setPosts(rowJson.row);
    }
    getAllPosts();
  }, [id]);
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
  console.log(tag)
  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className=" flex flex-col justify-center items-center">
          <div className=" border-zinc-700 min-w-70 w-145 h-full flex flex-col items-center h-screen">
            <div className="w-full">
              <div className=" flex flex-col justify-center items-center">
                <div className="flex border border-zinc-700 w-full h-11">
                  <div className="w-full h-full justify-center items-center flex transition duration-100 hover:bg-zinc-700">
                    <Link
                      href={"#"}
                      className="w-full h-full flex justify-center items-center"
                    >
                      {path === "/notification" ? (
                        <p className="text-white font-bold">For you</p>
                      ) : (
                        <p> For you </p>
                      )}
                    </Link>
                  </div>

                  <div className="w-full h-full justify-center items-center flex transition duration-100 hover:bg-zinc-700">
                    <Link
                      href={"#"}
                      className="w-full h-full flex justify-center items-center"
                    >
                      {path === "/notification/verified" ? (
                        <p className="text-white font-bold">Following</p>
                      ) : (
                        <p>Following</p>
                      )}
                    </Link>
                  </div>
                </div>
                <div className="w-full px-4 py-3 border border-zinc-700 flex gap-4 ">
                  <div className="flex-shrink-0">
                    <Image
                      src={session.data?.user?.image ?? "/black.jpg"}
                      alt="profile"
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <form onSubmit={handleAction}>
                      <textarea
                        ref={ref}
                        onInput={handleInput}
                        className="w-full overflow-hidden resize-none bg-black text-white p-2 pr-4 outline-none whitespace-pre-wrap break-words text-[16px]"
                        placeholder="What’s happening?"
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />

                      <div className="flex justify-between items-center mt-3">
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
          bg-sky-500 text-white font-semibold
          rounded-full px-4 py-1.5 text-[15px]
          hover:bg-sky-600 transition cursor-pointer
        "
                        >
                          Post
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* POSTS */}
            <div className="w-full">
              {posts
                ?.slice()
                .sort((a: any, b: any) => {
                  return (
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                  );
                })
                .map((post: any) => {
                  const time = new Date(post.created_at);
                  const timeConverted = time.toLocaleString("en-GB", {
                    timeZone: "UTC",
                  });

                  return (
                    <div
                      className="border-x border-b border-zinc-700 break-words flex w-full"
                      key={post.id}
                    >
                      <div className="px-5 py-4 w-full flex">
                        <Image
                          src={
                            (session.data?.user?.image as string) ??
                            "/black.svg"
                          }
                          alt="User"
                          height={25}
                          width={45}
                          className="rounded-full border-black w-[45px] h-[45px] flex-none"
                        ></Image>
                        <div className="w-full">
                          <div className="pl-3 w-full text-wrap">
                            <div className="flex gap-2 items-center justify-between">
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-[16px]">
                                  {session.data?.user?.name}{" "}
                                  <span className="text-zinc-700 pl-1">
                                    @{tag}
                                  </span>
                                </p>{" "}
                                <i className="text-[10px] text-zinc-700">•</i>{" "}
                                <span className="text-[14px] text-zinc-400">
                                  {timeConverted}
                                </span>
                              </div>

                              <div className="flex gap-3">
                                <Image
                                  src={"/grok.svg"}
                                  alt="user"
                                  width={20}
                                  height={20}
                                ></Image>
                                <Image
                                  src={"/threepoints.svg"}
                                  alt="user"
                                  width={20}
                                  height={20}
                                ></Image>
                              </div>
                            </div>

                            {/* CONTENT */}
                            <div className="">
                              <div className=" pr-4 prose prose-invert max-w-none whitespace-pre-wrap">
                              <ReactMarkdown>{post.content}</ReactMarkdown>
                              </div>
                            </div>
                            {/* CONTENT */}
                          </div>
                          <div className="flex w-full pl-1 mt-2">
                            <div className="w-full flex">
                              <button
                                className="gap-1 group  
                               cursor-pointer flex justify-center items-center relative"
                              >
                                <div className="group-hover:bg-sky-900/30 transition duration-200 w-7 h-7 rounded-[50px] flex justify-center items-center">
                                  <Image
                                    src="comment.svg"
                                    alt="likes"
                                    width={16}
                                    height={16}
                                    className="object-cover w-[16px] h-[16px] flex-none"
                                  ></Image>
                                </div>

                                <p className="text-[14px] text-zinc-400 absolute left-8"> 0 </p>
                              </button>
                            </div>
                            <div className="w-full">
                            <button
                                className="gap-1 group  
                               cursor-pointer flex justify-center items-center relative"
                              >
                                <div className="group-hover:bg-green-500/20 transition duration-200 w-7 h-7 rounded-[50px] flex justify-center items-center">
                                  <Image
                                    src="repost.svg"
                                    alt="likes"
                                    width={16}
                                    height={16}
                                    className="object-cover w-[16px] h-[16px] flex-none"
                                  ></Image>
                                </div>

                                <p className="text-[14px] text-zinc-400 absolute left-8"> 0 </p>
                              </button>
                            </div>
                            <div className="w-full">
                            <button
                                className="gap-1 group  
                               cursor-pointer flex justify-center items-center relative"
                              >
                                <div className="group-hover:bg-red-900/40 transition duration-200 w-7 h-7 rounded-[50px] flex justify-center items-center">
                                  <Image
                                    src="like.svg"
                                    alt="likes"
                                    width={16}
                                    height={16}
                                    className="object-cover w-[16px] h-[16px] flex-none"
                                  ></Image>
                                </div>

                                <p className="text-[14px] text-zinc-400 absolute left-8"> 0 </p>
                              </button>
                            </div>
                            <div className="w-full">
                            <button
                                className="gap-1 group  
                               cursor-pointer flex justify-center items-center relative"
                              >
                                <div className="group-hover:bg-sky-900/20 transition duration-200 w-7 h-7 rounded-[50px] flex justify-center items-center">
                                  <Image
                                    src="bar-chart.svg"
                                    alt="likes"
                                    width={16}
                                    height={16}
                                    className="object-cover w-[16px] h-[16px] flex-none"
                                  ></Image>
                                </div>

                                <p className="text-[14px] text-zinc-400 absolute left-8"> 0 </p>
                              </button>
                            </div>
                          </div>
                          <div className="w-full flex"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
