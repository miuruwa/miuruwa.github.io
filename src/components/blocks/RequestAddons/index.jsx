import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { useDispatch, useSelector } from 'react-redux';
import { setAddBackground, setSpecialRequest, setCommercialUseFee, setRushFee } from '@actions/Request';

import { useToolKit } from "@shared/toolkit";
import languages from "@shared/languages";
import { Button } from "@ui";

import styles from "./RequestAddons.module.scss";

const RequestAddons = () => {
  const { root, addonList } = styles;

  const toolkit = useToolKit();
  const dispatch = useDispatch();  
  const controls = useAnimation();
  const selector = useSelector(state => state);

  const pageData = languages[toolkit.settings.language].request;
  const toggleTheme = (id) => selector[id] ? "invert" : "white";

  const handleButton = (id) => {
    switch (id) {
      case "addBackground":
        dispatch(setAddBackground(!selector[id]))
        break;
        
      case "specialRequest":
        dispatch(setSpecialRequest(!selector[id]))
        break;
        
      case "commercialUseFee":
        dispatch(setCommercialUseFee(!selector[id]))
        break;

      default:
        dispatch(setRushFee(!selector[id]))
        break;
    }
  }  

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
    <div className={addonList}>
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
        transition={{ delay: 2.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
        {pageData.addons.title}:
      </motion.p>
      {Object.entries(pageData.addons.list).map((item, index) => <motion.div
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
        transition={{ delay: 2.6 + 0.1 * index, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
        <Button title={item[1].title} theme={toggleTheme(item[0])} onClick={() => handleButton(item[0])} />  
      </motion.div>)}    
    </div>
  </div>
}

export default RequestAddons;
