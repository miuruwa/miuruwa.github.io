import { useAppDispatch } from '@hooks/redux';
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Button } from "@ui/Button";

import styles from "./RequestConfigPoint.module.scss";

const RequestConfigPoint = <RequestType, >({item, state, DoAction, delay}: Blocks.RequestConfigPoint<RequestType>) => {
  const { root, configList } = styles;

  const dispatch = useAppDispatch();
  const controls = useAnimation();

  const toggleTheme = (id: RequestType) => {
		return state === id? "invert" : "white"
	}

  const handleButton = (value: RequestType) => {
		dispatch(DoAction(value))
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
			{item.headline}
		</motion.p>
		<div className={configList}>
			{item.list.map((parameter, index) => <motion.div
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
				transition={{ delay: delay + index * 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
				<Button theme={toggleTheme(parameter.name)} title={parameter.value} onClick={() => handleButton(parameter.name)}/>
			</motion.div>)}
		</div>
	</motion.div>
}

export default RequestConfigPoint;