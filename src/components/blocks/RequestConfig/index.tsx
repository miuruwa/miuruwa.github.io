import { Provider } from 'react-redux';

import RequestCharCount from '@blocks/RequestCharCount';
import RequestAddons from '@blocks/RequestAddons';
import RequestBrief from '@blocks/RequestBrief';
import RequestConfigPoint from "@blocks/RequestConfigPoint";
import RequestLinks from "@blocks/RequestLinks";
import RequestConfigTotal from '@blocks/RequestConfigTotal';
import Headline from "@ui/Headline";
import { page } from "@shared/pages/request";
import { useToolKit } from "@shared/toolkit";
import Request from '@stores/Request';

import styles from "./RequestConfig.module.scss";

const RequestConfig = () => {
  const { root, configList } = styles;

	const toolkit = useToolKit()

  // TODO: useLanguage();
  // @ts-ignore
  const pageData = page[toolkit.settings.language];

  // TODO: завести delay
	return <Provider store={Request}>
    <div className={root}>
      <Headline title={pageData.title} />
      <div className={configList}>
        {/* @ts-ignore */}
        {Object.entries(pageData.config).map((data, index: number) => <RequestConfigPoint key={index} item={data[1]} action={data[0]} delay={(index+1) / 2} />)}
        <RequestCharCount />
        <RequestAddons />
        <RequestBrief />
      </div>
      <RequestConfigTotal />
      {/* <RequestLinks delay={(pageData.config.length + 1) / 2} /> */}
      <RequestLinks />
    </div>
  </Provider>
}

export default RequestConfig;
