import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import languagesData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

import styles from "./TOSNote.module.scss";

const TOSNote = () => {
  const { note, mark } = styles;

  const controls = useAnimation();
  const toolkit = useToolKit();

  const pageData = languagesData[toolkit.settings.language].tos;

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <motion.div
      className={note}
      initial="hidden"
      variants={{
        hidden: {
          filter: "blur(10px)",
          scale: 1.2,
          opacity: 0,
        },
        visible: {
          filter: "blur(0)",
          scale: 1,
          opacity: 1,
        },
      }}
      animate={controls}
      transition={{ delay: 1, duration: 2, ease: [0, 0.71, 0.2, 1.01] }}>
      <span className={mark}> {pageData.noteMark}</span>
      <p>
        {pageData.note}
      </p>
    </motion.div>
}

export default TOSNote;