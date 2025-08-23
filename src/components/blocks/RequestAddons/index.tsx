import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimation } from "motion/react";

import { setAddBackground, setSpecialRequest, setCommercialUseFee, setRushFee } from '@actions/Request';
import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/pages/request";
import { Button } from "@ui/Button";

import styles from "./RequestAddons.module.scss";

const RequestAddons = () => {
  const { root, addonList } = styles;

  const toolkit = useToolKit();
  const dispatch = useDispatch();
  const controls = useAnimation();
  const selector = useSelector(state => state);

  // @ts-expect-error // TODO: useLanguage();
  const { addons } = page[toolkit.settings.language];
  // @ts-expect-error // TODO: selector type();
  const toggleTheme = (id: string) => selector[id] ? "invert" : "white";

  const handleButton = (id: string) => {
    switch (id) {
      case "addBackground":
        // @ts-expect-error // TODO: selector type();
        dispatch(setAddBackground(!selector[id]))
        break;

      case "specialRequest":
        // @ts-expect-error // TODO: selector type();
        dispatch(setSpecialRequest(!selector[id]))
        break;

      case "commercialUseFee":
        // @ts-expect-error // TODO: selector type();
        dispatch(setCommercialUseFee(!selector[id]))
        break;

      default:
        // @ts-expect-error // TODO: selector type();
        dispatch(setRushFee(!selector[id]))
        break;
    }
  }

  useEffect(() => {
    controls.start("visible");
  })

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
        {addons.title}:
      </motion.p>
      {Object.entries(addons.list).map((item, index) => <motion.div
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
        <Button title={item[1]} theme={toggleTheme(item[0])} onClick={() => handleButton(item[0])} />  
      </motion.div>)}    
    </div>
  </div>
}

export default RequestAddons;
