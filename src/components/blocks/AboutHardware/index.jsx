import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@blocks/Headline";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

import styles from "./AboutHardware.module.scss";

const AboutHardware = () => {
  const { root } = styles;
  
  const controls = useAnimation();
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].about;
  
  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
      <div>
          <Headline title={pageData.hardware.headline} type="small" delay={1}/>
          <ol>
            {pageData.hardware.list.map((item, index) => <motion.li
              key={index}
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
              transition={{ delay: 1.5 + 0.1 * index, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
              {item}
            </motion.li>)}
          </ol>
      </div>
      <div>
          <Headline title={pageData.software.headline} type="small" delay={2}/>
          <ol>
            {pageData.software.list.map((item, index) => <motion.li
              key={index}
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
              transition={{ delay: 2.5 + 0.1 * index, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
              {item}
            </motion.li>)}
          </ol>
      </div>
  </div>
}

export default AboutHardware;