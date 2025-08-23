import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import useProgressiveImg from "@hooks/useProgressiveImg";

import styles from "./HomeIllustration.module.scss";

const HomeIllustration = () => {
  const { root } = styles;

  const controls = useAnimation();
  const [src, ] = useProgressiveImg("/img/Risha&Nastya/loading.png", "/img/Risha&Nastya/2000px.png");

  useEffect(() => {
    controls.start("visible");
  })

  return <motion.img
      className={root}
      // @ts-expect-error // TODO: useProgressive
      src={src}
      style={{imageRendering: "pixelated"}}
      initial="hidden"
      variants={{
        hidden: {
          filter: "blur(10px)",
          x: 256,
          opacity: 0,
        },
        visible: {
          filter: "blur(0)",
          x: 0,
          opacity: 1,
        },
      }}
      animate={controls}
      transition={{ delay: 0.1, duration: 3, ease: [0, 0.71, 0.2, 1.01] }}
    />;
}

export default HomeIllustration;
