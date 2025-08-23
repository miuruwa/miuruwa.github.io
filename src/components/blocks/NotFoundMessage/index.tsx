import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "@hooks/useNavigate";

import Headline from "@ui/Headline";
import { useTranslation } from "@hooks/useTranslation";
import { notFound } from "@shared/pages/notFound";
import { Button } from "@ui/Button";

import styles from "./NotFoundMessage.module.scss";

const NotFoundMessage = () => {
  const { root } = styles;

  const controls = useAnimation();
  const { navigate } =useNavigate();

  const { headline, description, button } = useTranslation<Pages.NotFound>(notFound.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    <Headline title={headline} />
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
      {description}
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
        title={button.title}
        theme="invert"
        onClick={() => navigate(button.path ?? "")} />
    </motion.div>
  </div>
}

export default NotFoundMessage;
