import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import { details } from "@shared/pages/details";
import { useTranslation } from "@hooks/useTranslation";

const DetailsAddons = () => {
  const controls = useAnimation();

  const { addons } = useTranslation<Pages.Details>(details.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div>
    <Headline title={addons.headline} delay={4} type="small" />
    <ol>
      {addons.list.map((item, index: number) => <motion.li key={index}
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
