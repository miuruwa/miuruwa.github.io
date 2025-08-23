import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "@hooks/useNavigate";

import { page } from "@shared/pages/termsOfService";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui/Button";

import styles from "./TOSNavigate.module.scss";

const TOSNavigate = () => {
  const { root } = styles;
  const controls = useAnimation();
  const { navigate } =useNavigate();
  const toolkit = useToolKit();

  // TODO: useLanguage();
  // @ts-ignore
  const pageData = page[toolkit.settings.language];

  useEffect(() => {
    controls.start("visible");
  }, [])

  // TODO: занести типизацию в d.ts
  return <div className={root}>
    {pageData.navigate.map(
        (item: {
          title: string,
          path: string
        }, index: number) => <motion.span
          initial="hidden"
          key={index}
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
          transition={{ delay: 3 + 0.1 * index, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <Button 
            key={index} 
            title={item.title} 
            theme="invert"
            onClick={() => navigate(item.path)} 
          />
        </motion.span>)}
  </div>
}

export default TOSNavigate;