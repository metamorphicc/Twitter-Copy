"use client";
import Image from "next/image";
import GoogleButton from "./googleButton";
import Modal from "@/app/shared/components/modalWindow";
import { Portal } from "../../shared/components/Portal";
import React, { useState } from "react";
import { redirect, usePathname } from "next/navigation";
import { checkSes } from "../../(components)/(withMenu)/home/checkSession";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import generateTag from "@/app/shared/randomTag";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [tagNext, setTagNext] = useState("");
  const [usernameForm, setUsernameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const path = usePathname();
  const router = useRouter();
  const session = useSession();

  const handleNextStep = () => {
    const form = document.getElementById(
      "signup-form"
    ) as HTMLFormElement | null;
    if (!form) return;

    const formData = new FormData(form);
    const username = formData.get("username")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    setEmailForm(email as string);
    setUsernameForm(username as string);
    if (!username || !email) {
      return;
    }

    setIsNext(true);
  };

  async function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("SUBMIT");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const tag = formData.get("tag-next");
    const month = formData.get("month");
    const day = formData.get("day");
    const year = formData.get("year");
    console.log("after submit");
    console.log(emailForm, usernameForm);
    const res = await signIn("credentials", {
      redirect: false,
      usernameForm,
      emailForm,
      tag,
    });
    console.log(res);
    if (res?.ok) redirect("/home");
    console.log(session);
  }

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
                <form
                  id="signup-form"
                  onSubmit={handleForm}
                  key={path}
                  className="h-[80%] flex items-center flex-col rounded-[50px] justify-between"
                >
                  {!isNext ? (
                    <>
                      <div className="w-[70%] justify-center flex-col">
                        <div className="h-20 flex items-center">
                          <h1 className="font-bold text-[30px]">
                            Create an Account
                          </h1>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full">
                          <div className="w-full space-y-6">
                            <input
                              type="text"
                              required
                              maxLength={60}
                              name="username"
                              className="border border-zinc-700 p-3 w-full"
                              placeholder="Name"
                            />
                            <input
                              type="email"
                              required
                              maxLength={60}
                              name="email"
                              className="border p-3 w-full border-zinc-700"
                              placeholder="Email"
                            />
                          </div>
                        </div>

                        <div className="w-full space-y-2 my-6 flex flex-col">
                          <h1 className="font-bold text-lg">Date of birth</h1>
                          <p className="text-sm text-zinc-400 mb-6">
                            This will not be displayed publicly. Verify your own
                            age, even if this account is intended for a
                            business, a pet, or someone else.
                          </p>
                          <div className="flex justify-around space-x-3">
                            <div className="border border-zinc-700 w-full pr-2">
                              <select
                                name="month"
                                id="selector"
                                className="p-2 w-full text-white bg-black outline-none"
                              >
                                <option value="" disabled></option>
                                <option value="value1">June</option>
                                <option value="value2">July</option>
                                <option value="value3">August</option>
                              </select>
                            </div>
                            <div className="border border-zinc-700 w-full  pr-2">
                              <select
                                name="day"
                                id="selector"
                                className="p-2 w-full text-white bg-black outline-none"
                              >
                                <option value="" disabled></option>
                                <option value="value1">1</option>
                                <option value="value2">2</option>
                                <option value="value3">3</option>
                              </select>
                            </div>
                            <div className="border border-zinc-700 w-full  pr-2">
                              <select
                                name="year"
                                id="selector"
                                className="p-2 w-full text-white bg-black outline-none"
                              >
                                <option value="" disabled></option>
                                <option value="value1">2007</option>
                                <option value="value2">2008</option>
                                <option value="value3">2009</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[70%] mt-10">
                        <button
                          type="button"
                          onClick={() => handleNextStep()}
                          className="border border-zinc-700 rounded-xl hover:bg-zinc-700 transition cursor-pointer w-full h-full mb-5"
                        >
                          <p className="font-black text-border-zinc-700">
                            Next
                          </p>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[70%] flex flex-col">
                        <div className="h-20 flex items-start flex-col ">
                          <h1 className="font-bold text-[30px]">
                            What should we call you?
                          </h1>
                          <span className="text-zinc-500">
                            Your username is unique. You can change it at any
                            time.
                          </span>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full pt-5">
                          <div className="w-full space-y-6">
                            <input
                              type="text"
                              maxLength={60}
                              id="tag-next"
                              name="tag-next"
                              className="border p-3 w-full border-zinc-700"
                              placeholder="Your tag is?"
                              value={tagNext}
                              onChange={(e) => setTagNext(e.target.value)}
                            />
                          </div>
                        </div>

                        <i className="pt-3">Suggestion: </i>
                      </div>

                      <div className="w-[70%] mt-10 flex gap-2">
                        {tagNext && tagNext.length > 3 ? (
                          <>
                            <button
                              type="submit"
                              className="border border-zinc-700 rounded-xl hover:bg-zinc-700 transition cursor-pointer w-full h-full mb-5"
                            >
                              <p className="font-black text-border-zinc-700">
                                <p>Log in</p>
                              </p>
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="submit"
                              className="border border-zinc-700 rounded-xl group hover:bg-zinc-700 transition cursor-pointer w-full h-full mb-5 "
                            >
                 
                                <p className="text-zinc-400 group-hover:text-white">
                                  Skip for now
                                </p>
                             
                            </button>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </form>
              </Modal>
            </Portal>
          )}
        </div>
      </div>
    </div>
  );
}
