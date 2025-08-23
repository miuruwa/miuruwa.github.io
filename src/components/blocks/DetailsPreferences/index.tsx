import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import { useTranslation } from "@hooks/useTranslation";
import Headline from "@ui/Headline";
import { details } from "@shared/pages/details";

import styles from "./DetailsPreferences.module.scss";

const DetailsPreferences = () => {
  const { root } = styles;

  const controls = useAnimation();
  const { preferences } = useTranslation<Pages.Details>(details.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    {preferences.map((item, olIndex) => <div key={olIndex}>
      <Headline title={item.headline} delay={0.5 + olIndex * 2} type="small" />
      <ol>
        {item.list.map((item, liIndex) => <motion.li
          key={liIndex}
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
          transition={{ delay: 1 + olIndex * 2 + liIndex * 0.25, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
          {item}
        </motion.li>)}
      </ol>
    </div>)}
  </div>
}

export default DetailsPreferences;
