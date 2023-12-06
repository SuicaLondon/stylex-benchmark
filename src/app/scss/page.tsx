"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

export default function SCSS() {
  const [color, setColor] = useState(() => {
    console.time("render time: ");
    return styles.red;
  });
  useEffect(() => {
    console.timeEnd("render time: ");
  }, [color]);

  const changeColor = useCallback(() => {
    console.info("change color");
    console.time("render time: ");
    setColor(color == styles.red ? styles.blue : styles.red);
  }, [color]);

  return (
    <main className={styles.container}>
      <button onClick={changeColor}>Change color</button>
      {new Array(10000).fill(null).map((_, index) => {
        return <div key={index} className={`${styles.card} ${color}`} />;
      })}
    </main>
  );
}
