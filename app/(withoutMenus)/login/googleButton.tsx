"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
export default function googleButton() {
  return (
    <button className="px-4 w-[50%] bg-white flex justify-center py-2 border cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
    onClick={() => {signIn("google", {
      callbackUrl:"/home"
    })}}
    >
      <Image
        className="w-6 h-6"
        src="/google.svg"
        loading="lazy"
        alt="google logo"
        width={30}
        height={30}
      ></Image>
      <span>Sign up with Google</span>
    </button>
  );
}
