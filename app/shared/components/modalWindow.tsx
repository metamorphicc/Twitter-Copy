"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";


export default function Modal({ isOpen, onClose, children }: any) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="bg-neutral-900/60 fixed items-center justify-center inset-0 z-40 flex"
      onClick={onClose}
    >
      <div ref={ref} onClick={(e) => e.stopPropagation()} className="z-50 h-[80%]">
        <div className="h-full w-140 bg-black/90 rounded-[50px]">
        <div className="px-7 pt-7">
          <div className="flex justify-around ">
              <div className="w-full">
                <button
                  onClick={onClose}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                >
                  <Image
                    src={"/close.svg"}
                    alt="asdf"
                    width={18}
                    height={18}
                  ></Image>
                </button>
              </div>

              <Image
                src={"Xlogo.svg"}
                alt="affda"
                width={45}
                height={45}
                className="-translate-y-2"
              ></Image>
              <div className="w-full"></div>
            </div>
        </div>
       
            
            

            {children}

        </div>
      </div>
    </div>
  );
}
