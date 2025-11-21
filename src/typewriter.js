import { useEffect, useState } from "react";

export function useTypewriter(words = [], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const typeTimer = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(typeTimer);
  }, []);

  useEffect(() => {
    if (index >= words.length) return;
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, words, speed, reverse, pause]);

  return { text: words[index].slice(0, subIndex), blink };
}