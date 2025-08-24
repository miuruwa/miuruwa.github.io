import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

import { useAppDispatch, useAppSelector} from "@hooks/redux";
import { Button } from "@ui/Button";

import styles from "./RequestAddons.module.scss";
import { requestSlice } from "@reducers/Request";

const RequestAddons = ({item, data}: Blocks.RequestConfigPoint) => {
  const { root, addonList } = styles;

  const dispatch = useAppDispatch();
  const controls = useAnimation();
  const { ToggleAddBackground, ToggleSpecialRequest, ToggleCommercialUseFee, ToggleRushFee } = requestSlice.actions;
  const selector = useAppSelector(state => state.RequestReducer);

  const toggleTheme = (id: Requests.Addons) => selector[id] ? "invert" : "white";

  const handleButton = (id: Requests.Addons) => {
    switch (id) {
      case "addBackground":
        dispatch(ToggleAddBackground())
        break;

      case "specialRequest":
        dispatch(ToggleSpecialRequest())
        break;

      case "commercialUseFee":
        dispatch(ToggleCommercialUseFee())
        break;

      default:
        dispatch(ToggleRushFee())
        break;
    }
  }

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    <div className={addonList}>
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
        transition={{ delay: 2.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
        {data.headline}:
      </motion.p>
      {item.map((parameter: Requests.Option, index: number) => <motion.div
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
        transition={{ delay: 2.6 + 0.1 * index, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
        <Button title={parameter.text} theme={toggleTheme(parameter.value as Requests.Addons)} onClick={() => handleButton(parameter.value as Requests.Addons)} />
      </motion.div>)}
    </div>
  </div>
}

export default RequestAddons;
