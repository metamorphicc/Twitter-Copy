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
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          zIndex: 1000,
        }}
        className="bg-zinc-900 text-white rounded-xl shadow-lg p-3 w-40"
      >
        {children}
      </div>
    </Portal>
  );
}

