"use client";

import { useEffect, useRef } from "react";
import { Portal } from "./Portal";

export default function ModalMore({
  isOpen,
  onClose,
  position,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number };
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal id="modal-root">
        <div className="w-screen h-screen z-999 inset-0 fixed">
            <div
        ref={ref}
        style={{
          position: "absolute",
          top: position.top - 250,
          left: position.left,
          zIndex: 1000,
        }}
        className="bg-black text-white rounded-xl shadow-lg w-79"
      >
        {children}
      </div>
        </div>
      
    </Portal>
  );
}

