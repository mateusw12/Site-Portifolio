import { useEffect, useState } from "react";

export function useTypingEffect(text: string, speed: number, trigger: boolean) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!trigger) return;

    let i = 0;
    let frame: number;

    const type = () => {
      setTypedText(text.slice(0, i));
      i++;
      if (i <= text.length) {
        frame = window.setTimeout(type, speed);
      }
    };

    type();

    return () => clearTimeout(frame);
  }, [text, speed, trigger]);

  return typedText;
}
