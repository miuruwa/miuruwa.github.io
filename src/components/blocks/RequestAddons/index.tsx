import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

import { useTranslation } from "@hooks/useTranslation";
import { useAppDispatch, useAppSelector} from "@hooks/redux";
import { request } from "@shared/pages/request";
import { Button } from "@ui/Button";

import styles from "./RequestAddons.module.scss";
import { requestSlice } from "@reducers/Request";

const RequestAddons = () => {
  const { root, addonList } = styles;

  const dispatch = useAppDispatch();
  const controls = useAnimation();
  const { ToggleAddBackground, ToggleSpecialRequest, ToggleCommercialUseFee, ToggleRushFee } = requestSlice.actions;
  const selector = useAppSelector(state => state.RequestReducer);
  const { addons } = useTranslation<Pages.Request>(request.translations);

  const toggleTheme = (id: Requests.Addons) => selector[id] ? "invert" : "white";

  const handleButton = (id: string) => {
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
        {addons.headline}:
      </motion.p>
      {addons.list.map((item, index) => <motion.div
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
        <Button title={item.value} theme={toggleTheme(item.name)} onClick={() => handleButton(item.name)} />
      </motion.div>)}
    </div>
  </div>
}

export default RequestAddons;
