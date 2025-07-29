import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Button } from "@ui";

import styles from "./BasePriceConfigPoint.module.scss";

const BasePriceConfigPoint = ({item, delay}) => {
  const { root, configList } = styles;
  
  const controls = useAnimation();
	
  useEffect(() => {
    controls.start("visible");
  }, [])

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
			{item.title}
		</motion.p>
		<div className={configList}>
			{item.list.map((value, index) => <motion.div
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
				<Button theme="invert" title={value.title} />
			</motion.div>)}
		</div>
	</motion.div>
}

export default BasePriceConfigPoint;