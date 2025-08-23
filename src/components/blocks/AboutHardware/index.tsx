import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import { useTranslation } from "@hooks/useTranslation";
import { about } from "@shared/pages/about";

import styles from "./AboutHardware.module.scss";

const AboutHardware = () => {
  const { root } = styles;

  const controls = useAnimation();

  const { hardware, software } = useTranslation<Pages.About>(about.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
      <div>
          <Headline title={hardware.headline} type="small" delay={1}/>
          <ol>
            {hardware.list.map((item: string, index: number) => <motion.li
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
          <Headline title={software.headline} type="small" delay={2}/>
          <ol>
            {software.list.map((item: string, index: number) => <motion.li
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