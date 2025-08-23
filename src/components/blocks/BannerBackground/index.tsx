import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import useProgressiveImg from "@hooks/useProgressiveImg";
import styles from "./BannerBackground.module.scss";

const BannerBackground = () => {
  const { root } = styles;

  const controls = useAnimation();
  const { src, isLoading } = useProgressiveImg("/img/SlightlyThoughts/loading.jpg", "/img/SlightlyThoughts/380px.gif");

  useEffect(() => {
    controls.start("visible");
  })

  return <motion.img
    className={ root }
    src={src}
    style={{
      filter: isLoading ? "blur(20px)" : "none",
      transition: isLoading ? "none" : "filter 0.3s ease-out"
    }}
    initial="hidden"
    variants={{
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    }}
    animate={controls}
    transition={{ delay: 1, duration: 9, ease: [0, 0.71, 0.2, 1.01] }}
  />;
}

export default BannerBackground;
