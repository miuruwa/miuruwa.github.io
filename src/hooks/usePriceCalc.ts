import { useAppSelector } from "./redux";
import { useFindOptionsByType } from "./useFindOptionsByType";

export const usePriceCalc = () => {
  const {progress, color, artwork, characterCount, addBackground, specialRequest, commercialUseFee, rushFee } = useAppSelector(state => state.RequestReducer);

  const progressList = useFindOptionsByType("progress");
  const colorList = useFindOptionsByType("color");
  const artworkList = useFindOptionsByType("artwork");
  const addonsList = useFindOptionsByType("addons");

  const basePrice = (progressList.find(option => option.value === progress)?.price ?? 0) +
    (colorList.find(option => option.value === color)?.price ?? 0) +
    (artworkList.find(option => option.value === artwork)?.price ?? 0);

  const characterPrice = basePrice / 2 * (characterCount - 1)

  const addBackgroundPrice = addonsList.find(addon => addon.value === 'addBackground')?.price ?? 0;
  const specialRequestPrice = addonsList.find(addon => addon.value === 'specialRequest')?.price ?? 0;
  const commercialUseFeePrice = addonsList.find(addon => addon.value === 'commercialUseFee')?.price ?? 0;
  const rushFeePrice = addonsList.find(addon => addon.value === 'rushFee')?.price ?? 0;

  const addonsPriceResult = (addBackground ? addBackgroundPrice : 0)
    + (specialRequest ? specialRequestPrice : 0)
    + (commercialUseFee ? commercialUseFeePrice : 0)
    + (rushFee ? rushFeePrice : 0)

  return basePrice + characterPrice + addonsPriceResult
};