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
import { useFindOptionsByType } from '@hooks/useFindOptionsByType';
import { useEffect } from 'react';

const RequestConfig = () => {
  const { root, configList } = styles;
  const { progress, color, artwork } = useAppSelector(state => state.RequestReducer);
  const { SetProgress, SetColor, SetArtwork } = requestSlice.actions;

  const { headline, progress: progressData, color: colorData, artwork: artworkData, addons: addonsData } = useTranslation<Pages.Request>(request.translations);

  const { isLoading } = useAppSelector(state => state.AvailableReducer);
  const progressList = useFindOptionsByType("progress");
  const colorList = useFindOptionsByType("color");
  const artworkList = useFindOptionsByType("artwork");
  const addonsList = useFindOptionsByType("addons");

  useEffect(() => {
    if (!isLoading) {
      if (progressList.length !== 0) SetProgress(progressList[0].value as Requests.Progress)
      if (colorList.length !== 0) SetColor(colorList[0].value  as Requests.Color)
      if (artworkList.length !== 0) SetArtwork(artworkList[0].value  as Requests.Artwork)
    }
  }, [SetArtwork, SetColor, SetProgress, artworkList, colorList, isLoading, progressList]);

	return <div className={root}>
      <Headline title={headline} />
      <div className={configList}>
        <RequestConfigPoint item={progressList} data={progressData} state={progress} DoAction={SetProgress} delay={0.5} />
        <RequestConfigPoint item={colorList} data={colorData} state={color} DoAction={SetColor} delay={1.0} />
        <RequestConfigPoint item={artworkList} data={artworkData} state={artwork} DoAction={SetArtwork} delay={1.5} />
        <RequestCharCount />
        <RequestAddons item={addonsList} data={addonsData}/>
      </div>
      <RequestConfigTotal />
      <RequestLinks />
    </div>
}

export default RequestConfig;
