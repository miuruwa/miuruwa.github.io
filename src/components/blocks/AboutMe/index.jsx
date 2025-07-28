import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@blocks/Headline";
import Navigation from "@blocks/Navigation";
import { useToolKit } from "@shared/toolkit";
import languageData from "@shared/languages";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  const { root } = styles;
  const controls = useAnimation();
  const toolkit = useToolKit();

  const pageData = languageData[toolkit.settings.language].about;

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
    <Navigation />
    <Headline title={pageData.title} />
    <motion.p
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
      transition={{ delay: 0.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
    >{pageData.description}</motion.p>
  </div>
}

export default AboutMe;
