"use client";
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

  return  (<div className="bg-neutral-900/60 fixed items-center justify-center inset-0 z-40  "
  onClick={onClose}>
    <div ref={ref}
    onClick={(e) => e.stopPropagation()}
    className="z-50"
    >
      {children}
    </div>
  </div>)


}
