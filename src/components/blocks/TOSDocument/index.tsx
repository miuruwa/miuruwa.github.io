import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

import Headline from "@ui/Headline";
import TOSChapter from "@blocks/TOSChapter";
import TOSNavigate from "@blocks/TOSNavigate";
import TOSNote from "@blocks/TOSNote";
import { useTranslation } from "@hooks/useTranslation";
import { termsOfService } from "@shared/pages/termsOfService";

import styles from "./TOSDocument.module.scss";

const TOSDocument = () => {
  const { root, title, terms } = styles;

  const controls = useAnimation();
  const { headline, terms: termsList } = useTranslation<Pages.TOS>(termsOfService.translations);

  useEffect(() => {
    controls.start("visible");
  })

  return <div className={root}>
    <TOSNote />
    <div className={title}>
      <Headline title={headline} delay={1.5} />
    </div>
    <TOSNavigate />
    <motion.div
      className={terms}
      initial="hidden"
      variants={{
        hidden: {
          filter: "blur(10px)",
          scale: 1.2,
          opacity: 0,
        },
        visible: {
          filter: "blur(0)",
          scale: 1,
          opacity: 1,
        },
      }}
      animate={controls}
      transition={{ delay: 4, duration: 2, ease: [0, 0.71, 0.2, 1.01] }}>
      {termsList.map((item, index) => <TOSChapter key={index} item={item} />)}
    </motion.div>
  </div>
}

export default TOSDocument;