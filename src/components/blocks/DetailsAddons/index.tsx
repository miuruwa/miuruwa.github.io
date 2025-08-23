import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import { page } from "@shared/pages/details";
import { useToolKit } from "@shared/toolkit";

const DetailsAddons = () => {
  const controls = useAnimation();
  const toolkit = useToolKit();

  // @ts-expect-error // TODO: useLanguage();
  const pageData = page[toolkit.settings.language].addons;

  useEffect(() => {
    controls.start("visible");
  })

  return <div>
    <Headline title={pageData.headline} delay={4} type="small" />
    <ol>
      {/* @ts-expect-error // TODO: useLanguage(); */}
      {pageData.list.map((item, index: number) => <motion.li key={index}
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
          transition={{ delay: 5 + index * 0.25, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
             ✦ {item}
          </motion.li>)}
    </ol>
  </div>
}

export default DetailsAddons;
