import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { motion, useAnimation } from "motion/react";
import { setCharacterCount } from '@actions/Request';

import CharAddIcon from '@icons/CharAddIcon';
import CharSubstractIcon from '@icons/CharSubstractIcon';
import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { Button } from "@ui/Button";

import styles from "./RequestCharCount.module.scss";

const RequestCharCount = () => {
  const { root } = styles;

  const dispatch = useDispatch();
  const controls = useAnimation();
	// @ts-expect-error Property 'characterCount' does not exist on type 'unknown'.ts(2339)
  const { characterCount } = useSelector(state => state);

  const { characterCount: counter } = useTranslation<Pages.Request>(request.translations);

  const Add = () => dispatch(setCharacterCount(characterCount + 1));
  const Substract = () => characterCount > 1 && dispatch(setCharacterCount(characterCount - 1));

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
			transition={{ delay: 2, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      {counter}:
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
			transition={{ delay: 2.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
			{/* @ts-expect-error // TODO: button icon or svg import */}
      <Button icon={<CharSubstractIcon />} theme="invert" onClick={()=>Substract()}/>
    </motion.div>
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
			transition={{ delay: 2.2, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>{characterCount}</motion.p>
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
			transition={{ delay: 2.3, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
			{/* @ts-expect-error // TODO: button icon or svg import */}
      <Button icon={<CharAddIcon />} theme="invert" onClick={()=>Add()}/>
    </motion.div>
  </div>
}

export default RequestCharCount;