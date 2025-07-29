import { useDispatch, useSelector } from 'react-redux';
import { setProgress, setColor, setArtworkType } from '@actions/BasePrice';

import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Button } from "@ui";

import styles from "./BasePriceConfigPoint.module.scss";

const BasePriceConfigPoint = ({item, action, delay}) => {
  const { root, configList } = styles;
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  
  const controls = useAnimation();

  const toggleTheme = (id) => selector[action] === id ? "white" : "invert";

  const handleButton = (value) => {
	switch (action) {
		case "progress":
			dispatch(setProgress(value))
			break;

		case "color":
			dispatch(setColor(value))
			break;

		default:
			dispatch(setArtworkType(value))
			break;
	}
  }
	
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
			{Object.entries(item.list).map((data, index) => <motion.div
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
				<Button theme={toggleTheme(data[0])} title={data[1].title} onClick={() => handleButton(data[0])}/>
			</motion.div>)}
		</div>
	</motion.div>
}

export default BasePriceConfigPoint;