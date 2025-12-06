import { useRef } from "react";

export default function AutoResizeTextarea() {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";       // сбрасываем высоту
    el.style.height = el.scrollHeight + "px"; // ставим нужную
  };

  return (
    <textarea
      ref={ref}
      onInput={handleInput}
      className="w-full overflow-hidden resize-none bg-black text-white p-2 pr-4 outline-none"
      placeholder="What’s happening?"
    />
  );
}