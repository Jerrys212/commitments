"use client";

import { useEffect, useState } from "react";
import catGif from "@/assets/Cat Kitty GIF.gif";

const CAT_COUNT = 60;
const RAIN_DURATION_MS = 6000;

type FallingCat = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
};

function createCats(): FallingCat[] {
  return Array.from({ length: CAT_COUNT }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 30 + Math.random() * 60,
    duration: 2.5 + Math.random() * 2.5,
    delay: Math.random() * 1.5,
    rotation: Math.random() * 360,
  }));
}

export function CatRain() {
  const [cats, setCats] = useState<FallingCat[] | null>(null);

  useEffect(() => {
    setCats(createCats());
    const timeout = setTimeout(() => setCats(null), RAIN_DURATION_MS);
    return () => clearTimeout(timeout);
  }, []);

  if (!cats) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden">
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={catGif.src}
          alt=""
          style={{
            position: "absolute",
            top: "-10%",
            left: `${cat.left}%`,
            width: `${cat.size}px`,
            height: `${cat.size}px`,
            animation: `cat-fall ${cat.duration}s linear ${cat.delay}s 1 forwards`,
            transform: `rotate(${cat.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
