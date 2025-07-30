import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import BannerBackground from "@blocks/BannerBackground";
import useProgressiveImg from "@hooks/useProgressiveImg";

import styles from "./RequestIllustration.module.scss";

const RequestIllustration = () => {
  const { root, miuRuwa } = styles;

  const controls = useAnimation();
  const [src, _] = useProgressiveImg("/img/Risha&NastyaSmall.png", "/img/Risha&Nastya.png");
  
  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
    <BannerBackground />
    <motion.img 
      className={miuRuwa}
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
  </div>
}

export default RequestIllustration;
