import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "@hooks/useNavigate";

import { page } from "@shared/pages/request";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui/Button";

import styles from "./RequestLinks.module.scss";

const RequestLinks = () => {
  const { root } = styles;
  
  const controls = useAnimation();
  const { navigate } =useNavigate();
  const toolkit = useToolKit();

  // TODO: useLanguage();
  // @ts-ignore
  const { links } = page[toolkit.settings.language];

  useEffect(() => {
    controls.start("visible");
  }, [])
  
  return <div className={root}>
    {links.map((item: {title:string, path: string}, index: number) => <motion.div
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
      transition={{ delay: 3.3 + index * 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      <Button title={item.title} theme="invert" onClick={() => navigate(item.path)} />
    </motion.div>)}
  </div>
}

export default RequestLinks;
