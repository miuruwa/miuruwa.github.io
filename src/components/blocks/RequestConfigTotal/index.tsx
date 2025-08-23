import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { useSelector } from 'react-redux';

import { usePriceCalc } from "@hooks/usePriceCalc";

const RequestConfigTotal = () => {
  const selector = useSelector(state => state);
  // TODO: сделать что-то с селектором
  // @ts-ignore
  const priceCount = usePriceCalc(selector);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <motion.h3 
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
    transition={{ delay: 3.2, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
    style={{marginBlockStart: 0, marginBlockEnd: 0}}>
    ${priceCount}
  </motion.h3>
}

export default RequestConfigTotal;