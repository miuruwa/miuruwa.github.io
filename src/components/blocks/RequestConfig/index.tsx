import { Provider } from 'react-redux';

import RequestCharCount from '@blocks/RequestCharCount';
import RequestAddons from '@blocks/RequestAddons';
import RequestConfigPoint from "@blocks/RequestConfigPoint";
import RequestLinks from "@blocks/RequestLinks";
import RequestConfigTotal from '@blocks/RequestConfigTotal';
import Headline from "@ui/Headline";
import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { Request } from '@stores/Request';

import styles from "./RequestConfig.module.scss";

const RequestConfig = () => {
  const { root, configList } = styles;

  const { headline, config } = useTranslation<Pages.Request>(request.translations);

  // TODO: завести delay
	return <Provider store={Request}>
    <div className={root}>
      <Headline title={headline} />
      <div className={configList}>
        <RequestConfigPoint
          item={config.progress as Requests.Config}
          action="progress"
          delay={0.5} />
        <RequestConfigPoint
          item={config.color as Requests.Config}
          action="color"
          delay={1.0} />
        <RequestConfigPoint
          item={config.artwork as Requests.Config}
          action="artwork"
          delay={1.5} />
        <RequestCharCount />
        <RequestAddons />
      </div>
      <RequestConfigTotal />
      <RequestLinks />
    </div>
  </Provider>
}

export default RequestConfig;
