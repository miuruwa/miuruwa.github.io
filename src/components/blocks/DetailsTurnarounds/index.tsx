import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import { page } from "@shared/pages/details";
import { useToolKit } from "@shared/toolkit";

const DetailsTurnarounds = () => {
  const controls = useAnimation();
  const toolkit = useToolKit();

  // TODO: useLanguage();
  const { turnarounds } = page[toolkit.settings.language];

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div>
    <Headline title={turnarounds.headline} delay={6.5} type="small" />
    <motion.p
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
      transition={{ delay: 7, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      {turnarounds.description}
    </motion.p>
  </div>
}

export default DetailsTurnarounds;
