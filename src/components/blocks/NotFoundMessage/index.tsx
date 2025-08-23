import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "@hooks/useNavigate";

import Headline from "@ui/Headline";
import { useToolKit } from "@shared/toolkit";
import { page } from "@shared/pages/notFound";
import { routes } from "@shared/routes";
import { Button } from "@ui/Button";

import styles from "./NotFoundMessage.module.scss";

const NotFoundMessage = () => {
  const { root } = styles;
  
  const controls = useAnimation();
  const toolkit = useToolKit();
  const { navigate } =useNavigate();

  // TODO: useLanguage();
  const pageData = page[toolkit.settings.language];

  useEffect(() => {
    controls.start("visible");
  }, [])

  return <div className={root}>
    <Headline title={pageData.title} />
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
      transition={{ delay: 0.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      {pageData.road}
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
      transition={{ delay: 1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}>
      <Button 
        title={pageData.button}
        theme="invert"
        onClick={() => navigate(routes.home)} />
    </motion.div>
  </div>
}

export default NotFoundMessage;
