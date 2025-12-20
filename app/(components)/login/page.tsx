"use client"
import Image from "next/image";
import GoogleButton from "./googleButton";
import Modal from "@/app/shared/components/modalWindow";
import { Portal } from "../../shared/components/Portal"
import { useState } from "react";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen fixed flex">
      <div className="w-full flex justify-center items-center">
        <Image
          src={"/X_logo.png"}
          alt="fdsafs"
          width={700}
          height={100}
        ></Image>
      </div>
      <div className="w-full flex items-center pl-20">
        <div className="flex flex-col h-full w-[70%] justify-center">
            <p className="font-extrabold text-[55px]">Right now</p>
            <div className="flex items-center justify-center w-full">
                <span className="font-extrabold text-[30px] mb-10 mt-4 w-full block">
                    Register today
                </span>
            </div>
          
          
          <div className="flex flex-col gap-5">
            
              <GoogleButton/>
      
              <button className="px-4 py-2 w-[50%] border cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <Image
                  className="w-6 h-6"
                  src="/github.svg"
                  loading="lazy"
                  alt="google logo"
                  width={30}
                  height={30}
                ></Image>
                <span>Sign up with Github</span>
              </button>
              <button className="bg-sky-600 w-[50%] px-4 py-2 border cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <Image
                  className="w-6 h-6"
                  src="/telegram.svg"
                  loading="lazy"
                  alt="google logo"
                  width={30}
                  height={30}
                ></Image>
                <span>Sign up with Telegram</span>
              </button>
          </div>
          <div className="flex items-center w-[50%]">
            <hr className="w-full"/> <p className="px-3">OR</p> <hr className="w-full"/>
          </div>
          <button className="bg-white text-black px-4 py-2 border flex items-center w-[50%]
          cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:shadow transition duration-150"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          >
            
                <span>Create account</span>
              </button>
          {isOpen && <Portal id="modal-root">
              <Modal isOpen={isOpen}>
              </Modal>
            </Portal>}
        </div>
      </div>
    </div>
  );
}
