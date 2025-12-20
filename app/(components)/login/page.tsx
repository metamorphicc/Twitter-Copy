"use client";
import Image from "next/image";
import GoogleButton from "./googleButton";
import Modal from "@/app/shared/components/modalWindow";
import { Portal } from "../../shared/components/Portal";
import { useState } from "react";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen w-screen fixed flex">
      <div className="w-full flex justify-center items-center">
        <Image src={"/Xlogo.svg"} alt="fdsafs" width={700} height={100}></Image>
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
            <GoogleButton />

            <button className="px-4 py-2 w-[50%] border flex justify-center cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <Image
                className="w-6 h-6"
                src="/github.svg"
                loading="lazy"
                alt="google logo"
                width={30}
                height={30}
              ></Image>
              <span className="">Sign up with Github</span>
            </button>
            <button className="bg-sky-600 w-[50%] flex justify-center px-4 py-2 border cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
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
            <hr className="w-full" /> <p className="px-3">OR</p>{" "}
            <hr className="w-full" />
          </div>
          <button
            className="bg-white text-black px-4 py-2 border flex items-center w-[50%]
          cursor-pointer flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:shadow transition duration-150"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span>Create account</span>
          </button>
          {isOpen && (
            <Portal id="modal-root">
              <Modal
                isOpen={isOpen}
                onClose={() => {
                  setIsOpen(false);
                }}
              >
                <div className=" w-[70%] justify-center  flex-col">
                  <div className="h-20 flex items-center">
                    <h1 className="font-bold text-[30px]">Create an Account</h1>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full">
                    <form action="" className="w-full space-y-6" id="my-form">
                      <input
                        type="text"
                        required
                        maxLength={60}
                        id="text"
                        name="text"
                        className="border border-zinc-700  p-3 w-full "
                        placeholder="Name"
                      />
                      <input
                        type="email"
                        required
                        maxLength={60}
                        id="text"
                        name="text"
                        className="border p-3 w-full border-zinc-700 "
                        placeholder="Email"
                      />
                    </form>
                  </div>
                  <div className="w-full space-y-2 my-6">
                    <h1 className="font-bold text-lg">Date of birth</h1>
                    <p className="text-sm text-zinc-400">
                      This will not be displayed publicly. Verify your own age,
                      even if this account is intended for a business, a pet, or
                      someone else.
                    </p>
                  </div>
                </div>
                  
                <div className="w-[70%]">
                  <button
                    type="submit"
                    form="my-form"
                    className="border border-zinc-700  cursor-pointer w-full h-full mb-5"
                  >
                    <p className="font-black text-border-zinc-700">Next</p>
                  </button>
                </div>
              </Modal>
            </Portal>
          )}
        </div>
      </div>
    </div>
  );
}
