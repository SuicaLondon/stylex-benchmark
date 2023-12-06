"use client";
import { useCallback, useEffect, useState } from "react";

export default function Tailwind() {
  const [color, setColor] = useState(() => {
    console.time("render time: ");
    return "bg-red-500";
  });
  useEffect(() => {
    console.timeEnd("render time: ");
  }, [color]);

  const changeColor = useCallback(() => {
    console.info("change color");
    console.time("render time: ");
    setColor(color == "bg-red-500" ? "bg-blue-500" : "bg-red-500");
  }, [color]);

  return (
    <main className="w-full h-full flex flex-row flex-wrap gap-[20px]">
      <button onClick={changeColor}>Change color</button>
      {new Array(10000).fill(null).map((_, index) => {
        return (
          <div
            key={index}
            className={`w-[50px] h-[50px] rounded-full ${color}`}
          />
        );
      })}
    </main>
  );
}
