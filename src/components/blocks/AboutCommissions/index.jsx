import { motion, useAnimation } from "motion/react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useToolKit } from "@shared/toolkit"
import { Button, CardBlock } from "@ui"
import languageData from "@shared/languages"

import styles from "./AboutCommissions.module.scss"
import Headline from "../Headline"

const AboutCommissions = () => {
  const { root, buttonList } = styles;
  
  const controls = useAnimation();
  const toolkit = useToolKit()
  const navigate = useNavigate()

  const pageData = languageData[toolkit.settings.language].commissions

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
    <Headline title={pageData.title} delay={1} />
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
      transition={{ delay: 1.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
    >{pageData.note}</motion.p>
    <div className={buttonList}>
      {pageData.links.map((item, index) => <motion.span
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
          transition={{ delay: 2 + 0.1 * index, duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
          <Button key={index} theme="invert" title={item.title} onClick={() => navigate(item.path)} />
        </motion.span>)}
    </div>
  </div>
}

export default AboutCommissions;
