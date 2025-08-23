import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import { useTranslation } from "@hooks/useTranslation";
import { about } from "@shared/pages/about";
import Headline from "@ui/Headline";

import styles from "./AboutMe.module.scss";


const AboutMe = () => {
  const { root } = styles;

  const controls = useAnimation();

  const { headline, description } = useTranslation<Pages.About>(about.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    <Headline title={headline} />
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
    >{description}</motion.p>
  </div>
}

export default AboutMe;
