import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "@hooks/useNavigate";

import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { Button } from "@ui/Button";

import styles from "./RequestLinks.module.scss";

const RequestLinks = () => {
  const { root } = styles;

  const controls = useAnimation();
  const { navigate } =useNavigate();
  const { links } = useTranslation<Pages.Request>(request.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    {links.map((item, index) => <motion.div
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
      transition={{ delay: 3.3 + index * 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      <Button title={item.title} theme="invert" onClick={() => navigate(item.path ?? "")} />
    </motion.div>)}
  </div>
}

export default RequestLinks;
