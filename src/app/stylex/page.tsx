"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  card: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  blue: {
    backgroundColor: "blue",
  },
  red: {
    backgroundColor: "red",
  },
});

export default function StyleX() {
  const [color, setColor] = useState(() => {
    console.time("render time: ");
    return "red";
  });
  useEffect(() => {
    console.timeEnd("render time: ");
  }, [color]);

  const changeColor = useCallback(() => {
    console.info("change color");
    console.time("render time: ");
    setColor(color == "red" ? "blue" : "red");
  }, [color]);

  return (
    <main {...stylex.props(styles.container)}>
      <button onClick={changeColor}>Change color</button>
      {new Array(10000).fill(null).map((_, index) => {
        return (
          <div
            key={index}
            {...stylex.props(
              styles.card,
              color == "red" ? styles.red : styles.blue
            )}
          />
        );
      })}
    </main>
  );
}
