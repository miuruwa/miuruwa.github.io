import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import styles from "./Headline.module.scss";
import { classNames } from "@utils/classNames";

const HEAD = [-16,	4,	-8,	-6,	3,	-5,	-2,	3,	-4,	3,	-4,	-3,	4,	-2,	-4,	3,	-3,	2,	-2,	2,	-2,	1,	-2,	2,	4,	3,	-3,	2,	-2,	1,	-2,	-1];

const Headline: UI.Headline = ({title, type="big", textCase="upper", delay=0}) => {
  const { root, big, medium, small, upper, lower } = styles;
  const test = title.split("").map(item => item === " " ? "\u00A0\u00A0\u00A0" : item);

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible")
  })

  const containerClasses = classNames(root, {
    [big]: type === "big",
    [medium]: type === "medium",
    [small]: type === "small",
    [upper]: textCase === "upper",
    [lower]: textCase === "lower",
  })

  return <div className={containerClasses}>
    {test.map((char, index) => <motion.span
      className={type}
      key={index}
      initial="hidden"
      variants={{
        "hidden": {
          y: HEAD[index] * 10,
          opacity: 0,
          filter: `blur(${10 / Math.abs(HEAD[index])}px)`,
          scaleX: 0.8
        },
        "visible": {
          y: 0,
          opacity: 1,
          filter: "blur(0)",
          scaleX: 0.8
        }
      }}
      animate={controls}
      transition={{
        duration: index * 0.2 + 0.5, delay: 0.1 * index + delay, ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {char}
    </motion.span>)}
  </div>
}

export default Headline;