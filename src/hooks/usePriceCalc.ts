import { request } from "@shared/pages/request";
import { useAppSelector } from "./redux";
import { usePrice } from "./usePrice";

export const usePriceCalc = () => {
  const {progress, color, artwork, characterCount, addBackground, specialRequest, commercialUseFee, rushFee } = useAppSelector(state => state.RequestReducer);

  const basePrice = usePrice<Requests.Progress>(request.configPrice.progress, progress) +
    usePrice<Requests.Color>(request.configPrice.color, color) +
    usePrice<Requests.Artwork>(request.configPrice.artwork, artwork);

  const characterPrice = basePrice / 2 * (characterCount - 1)

  const addBackgroundPrice = usePrice<Requests.Addons>(request.addonsPrice, "addBackground");
  const specialRequestPrice = usePrice<Requests.Addons>(request.addonsPrice, "specialRequest");
  const commercialUseFeePrice = usePrice<Requests.Addons>(request.addonsPrice, "commercialUseFee");
  const rushFeePrice = usePrice<Requests.Addons>(request.addonsPrice, "rushFee");

  const addonsPriceResult = (addBackground ? addBackgroundPrice : 0)
    + (specialRequest ? specialRequestPrice : 0)
    + (commercialUseFee ? commercialUseFeePrice : 0)
    + (rushFee ? rushFeePrice : 0)

  return basePrice + characterPrice + addonsPriceResult
};