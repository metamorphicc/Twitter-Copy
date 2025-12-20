"use client";
import { useEffect, useRef } from "react";
import { useClickOutside } from "@react-hooks-hub/use-click-outside";
import { Portal } from "./Portal";

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

  return   <Portal id="modal-root"><div className="flex w-full h-screen bg-red-700"></div></Portal>
  
}
