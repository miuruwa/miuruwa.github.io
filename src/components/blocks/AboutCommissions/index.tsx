import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import { useNavigate } from "@hooks/useNavigate";
import { useTranslation } from "@hooks/useTranslation";
import { about } from "@shared/pages/about";
import { Button } from "@ui/Button";

import styles from "./AboutCommissions.module.scss";

const AboutCommissions = () => {
  const { root, buttonList } = styles;

  const controls = useAnimation();
  const { navigate } =useNavigate()

  const { commissions } = useTranslation<Pages.About>(about.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    <Headline title={commissions.title} delay={3} type="small" />
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
    >{commissions.note}</motion.p>
    <div className={buttonList}>
      {commissions.links.map((item, index) => <motion.span
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
          <Button theme="invert" title={item.title} onClick={() => navigate(item.path ?? "")} />
        </motion.span>)}
    </div>
  </div>
}

export default AboutCommissions;
