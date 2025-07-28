import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@blocks/Headline";
import { useToolKit } from "@shared/toolkit";
import languageData from "@shared/languages";
import { Button } from "@ui";

import styles from "./AboutLinks.module.scss";

const AboutLinks = () => {
  const { root, buttons } = styles;
  
  const controls = useAnimation();
  const toolkit = useToolKit()
  const pageData = languageData[toolkit.settings.language].links;

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
    <Headline title={pageData.title} delay={0.5} />
    <div className={buttons}>
      {pageData.links.map(
        (item, index) => <motion.span
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
          transition={{ delay: 1 + 0.1 * index, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <Button 
            key={index} 
            icon={item.icon} 
            theme="invert"
            onClick={() => window.location.href = item.location} 
          />
        </motion.span>)}
    </div>
  </div>
};

export default AboutLinks;
