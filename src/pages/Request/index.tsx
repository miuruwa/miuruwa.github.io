import RequestConfig from "@blocks/RequestConfig";
import Meta from "@layout/Meta";
import { useTranslation } from "@hooks/useTranslation";
import { request } from "@shared/pages/request";
import { useIsMobile } from "@hooks/useIsMobile";
import { classNames } from "@utils/classNames";

import styles from "./Request.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { fetchAvailable } from "@queries/availableQuery";

const Loader = () => {
  return <h3>
    Загрузка...
  </h3>
}

const ErrorMessage = ({message}: {message: string}) => {
  return <h3>
    Произошла ошибка: {message}
  </h3>
}

const Request = () => {
  const { root, mobileTemplate, desktopTemplate } = styles;
  const { headline } = useTranslation<Pages.Request>(request.translations);
  const isMobile = useIsMobile(768);

  const { isLoading, error } = useAppSelector(state => state.AvailableReducer);
  const dispatch = useAppDispatch();

  const containerClasses = classNames(
    root, {
      [mobileTemplate]: isMobile,
      [desktopTemplate]: !isMobile,
    }
  )

  useEffect(() => {
    dispatch(fetchAvailable())
  }, [])

  return <Meta title={headline}>
    <div className={containerClasses}>
      {
        isLoading ? (
          <Loader />
        ) : (
          error === "" ? <RequestConfig /> : <ErrorMessage message={error} />
        )
      }
    </div>
  </Meta>
};

export default Request;