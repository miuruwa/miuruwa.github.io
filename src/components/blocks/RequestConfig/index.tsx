import RequestCharCount from '@blocks/RequestCharCount';
import RequestAddons from '@blocks/RequestAddons';
import RequestConfigPoint from "@blocks/RequestConfigPoint";
import RequestLinks from "@blocks/RequestLinks";
import RequestConfigTotal from '@blocks/RequestConfigTotal';
import Headline from "@ui/Headline";
import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { requestSlice } from '@reducers/Request';
import { useAppSelector } from '@hooks/redux';

import styles from "./RequestConfig.module.scss";

const RequestConfig = () => {
  const { root, configList } = styles;
  const { progress, color, artwork } = useAppSelector(state => state.RequestReducer);
    const { SetProgress, SetColor, SetArtwork } = requestSlice.actions;

  const { headline, config } = useTranslation<Pages.Request>(request.translations);

	return <div className={root}>
      <Headline title={headline} />
      <div className={configList}>
        <RequestConfigPoint item={config.progress} state={progress} DoAction={SetProgress} delay={0.5} />
        <RequestConfigPoint item={config.color} state={color} DoAction={SetColor} delay={1.0} />
        <RequestConfigPoint item={config.artwork} state={artwork} DoAction={SetArtwork} delay={1.5} />
        <RequestCharCount />
        <RequestAddons />
      </div>
      <RequestConfigTotal />
      <RequestLinks />
    </div>
}

export default RequestConfig;
