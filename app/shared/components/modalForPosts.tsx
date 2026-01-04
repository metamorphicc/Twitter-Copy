"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ModalForPosts({ isOpen, onClose, children }: any) {
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
      className="bg-neutral-900/60 fixed inset-0 z-40 flex justify-center"
      onClick={onClose}
    >
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className="z-50 h-[30%] mt-14" 
      >
        <div className="h-auto w-130 bg-black/90 rounded-[10px] ">
          {/* Делаем колонку */}
          <div className="flex flex-col h-full ">
            
            <div className="px-3 pt-3">
              <div className="flex justify-between items-center">
                <div className="w-full">
                  <button className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center">
                    <Image src="/left.svg" alt="asdf" width={18} height={18} />
                  </button>
                </div>

                <div>
                  <button className="hover:bg-sky-700/20 text-[15px] text-sky-500 transition duration-200 rounded-[50px] w-15 h-7 cursor-pointer flex justify-center items-center">
                    Draft
                  </button>
                </div>
              </div>
            </div>

    
            <div className="flex-1 ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
