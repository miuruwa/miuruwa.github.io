import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui";

import styles from "./BasePriceLinks.module.scss";

const BasePriceLinks = ({delay}) => {
  const { root } = styles;
  
  const controls = useAnimation();
  const navigate = useNavigate();
  const toolkit = useToolKit();

  const pageData = languageData[toolkit.settings.language].basePrice;

  useEffect(() => {
    controls.start("visible");
  }, [])
  
  return <div className={root}>
    {pageData.links.map((item, index) => <motion.div
      key={index}
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
      transition={{ delay: delay + index * 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      <Button title={item.title} theme="invert" onClick={() => navigate(item.path)} />
    </motion.div>)}
  </div>
}

export default BasePriceLinks;
