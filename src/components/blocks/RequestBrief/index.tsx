import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/pages/request";

import styles from "./RequestBrief.module.scss";

const RequestBrief = () => {
  const { root } = styles;

  const toolkit = useToolKit();
  const controls = useAnimation();

  // @ts-expect-error // TODO: useLanguage();
  const pageData = page[toolkit.settings.language];


  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
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
			transition={{ delay: 3, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      {pageData.briefTitle}:
    </motion.p>
    <motion.div
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
			transition={{ delay: 3.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
    </motion.div>
  </div>
}

export default RequestBrief;