import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import useProgressiveImg from "@hooks/useProgressiveImg";

import styles from "./NotFoundIllustration.module.scss";

const NotFoundIllustration = () => {
  const { root } = styles;

  const controls = useAnimation();
  const [src, _] = useProgressiveImg("/img/RishaSmall.png", "/img/Risha.png");
  
  useEffect(() => {
    controls.start("visible");
  }, [])

  return <motion.img 
      className={root}
      src={src} 
      style={{imageRendering: "pixelated"}}
      initial="hidden"
      variants={{
        hidden: {
          filter: "blur(10px)",
          opacity: 0,
        },
        visible: {
          filter: "blur(0)",
          opacity: 1,
        },
      }}
      animate={controls}
      transition={{ delay: 0.1, duration: 3, ease: [0, 0.71, 0.2, 1.01] }}
    />;
}

export default NotFoundIllustration;
