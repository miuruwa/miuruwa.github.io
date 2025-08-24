import { useAppDispatch } from '@hooks/redux';
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Button } from "@ui/Button";

import styles from "./RequestConfigPoint.module.scss";

const RequestConfigPoint = ({item, data, state, DoAction, delay}: Blocks.RequestConfigPoint) => {
  const { root, configList } = styles;

  const dispatch = useAppDispatch();
  const controls = useAnimation();

  const toggleTheme = (id?: string) => {
		return state === id? "invert" : "white"
	}

  const handleButton = (value?: string) => {
		if (DoAction) dispatch(DoAction(value ?? ""))
	}

  useEffect(() => {
    controls.start("visible");
  })

	return <motion.div className={root}>
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
			transition={{ delay: delay, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
			{data.headline}
		</motion.p>
		<div className={configList}>
			{item.map((parameter, index) => <motion.div
				key={index}
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
				transition={{ delay: delay ?? 0 + index * 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
				<Button theme={toggleTheme(parameter.value)} title={parameter.text} onClick={() => handleButton(parameter.value)}/>
			</motion.div>)}
		</div>
	</motion.div>
}

export default RequestConfigPoint;