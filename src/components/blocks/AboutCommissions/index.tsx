import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import { useNavigate } from "@hooks/useNavigate";
import { page } from "@shared/pages/about";
import { useToolKit } from "@shared/toolkit";
import { Button } from "@ui/Button";

import styles from "./AboutCommissions.module.scss";

const AboutCommissions = () => {
  const { root, buttonList } = styles;

  const controls = useAnimation();
  const toolkit = useToolKit()
  const { navigate } =useNavigate()

  // @ts-expect-error // TODO: useLanguage();
  const pageData = page[toolkit.settings.language].commissions;

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    <Headline title={pageData.title} delay={3} type="small" />
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
      transition={{ delay: 3.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
    >{pageData.note}</motion.p>
    <div className={buttonList}>
      {pageData.links.map((item: {title: string, path: string}, index: number) => <motion.span
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
          transition={{ delay: 4 + 0.1 * index, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
          <Button theme="invert" title={item.title} onClick={() => navigate(item.path)} />
        </motion.span>)}
    </div>
  </div>
}

export default AboutCommissions;
