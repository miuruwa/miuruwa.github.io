import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

import CharAddIcon from '@icons/CharAddIcon';
import CharSubstractIcon from '@icons/CharSubstractIcon';
import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { Button } from "@ui/Button";

import styles from "./RequestCharCount.module.scss";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { requestSlice } from "@reducers/Request";

const RequestCharCount = () => {
  const { root } = styles;

  const controls = useAnimation();
  const dispatch = useAppDispatch();
  const { characterCount } = useAppSelector(state => state.RequestReducer);
	const { SetCharacterCount } = requestSlice.actions;
  const { characterCount: counter } = useTranslation<Pages.Request>(request.translations);

  const Add = () => dispatch(SetCharacterCount(characterCount + 1));
  const Substract = () => characterCount > 1 && dispatch(SetCharacterCount(characterCount - 1));

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
      <Button icon={<CharAddIcon />} theme="invert" onClick={()=>Add()}/>
    </motion.div>
  </div>
}

export default RequestCharCount;