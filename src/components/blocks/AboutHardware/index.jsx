import Headline from "@blocks/Headline";
import languageData from "@shared/languages";
import { useToolKit } from "@shared/toolkit";

import styles from "./AboutHardware.module.scss";

const AboutHardware = () => {
  const { root } = styles;
  const toolkit = useToolKit();
  const pageData = languageData[toolkit.settings.language].about;

  return <div className={root}>
      <div>
          <Headline title={pageData.hardware.headline} type="small" delay={1}/>
          <ol>
            {pageData.hardware.list.map((item, index) => <li key={index}>{item}</li>)}
          </ol>
      </div>
      <div>
          <Headline title={pageData.software.headline} type="small" delay={2}/>
          <ol>
            {pageData.software.list.map((item, index) => <li key={index}>{item}</li>)}
          </ol>
      </div>
  </div>
}

export default AboutHardware;