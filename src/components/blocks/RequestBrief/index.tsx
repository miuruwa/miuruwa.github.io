import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { motion, useAnimation } from "motion/react";
import { setBrief } from '@actions/Request';

import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/pages/request";
import { TextField } from "@ui/";

import styles from "./RequestBrief.module.scss";

const RequestBrief = () => {
  const { root, field } = styles;

  const toolkit = useToolKit();
  const dispatch = useDispatch();
  const controls = useAnimation();
	// @ts-expect-error // TODO: SELECTOR TYPE;
  const { brief } = useSelector(state => state);

  // @ts-expect-error // TODO: useLanguage();
  const pageData = page[toolkit.settings.language];

  const handleInput = (value: string) => dispatch(setBrief(value))

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
      <TextField className={field} placeholder={pageData.briefPlaceholder} field={brief} setFielf={handleInput}/>
    </motion.div>
  </div>
}

export default RequestBrief;