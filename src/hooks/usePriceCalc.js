import { useToolKit } from "@shared/toolkit";
import { addonsPrice, configPrice } from "@shared/request";

export const usePriceCalc = ({progress, color, artwork, characterCount, ...addons}) => {
  const toolkit = useToolKit()

  const progressPrice = configPrice["progress"][progress].usd;
  const colorPrice = configPrice["color"][color].usd;
  const artworkPrice = configPrice["artwork"][artwork].usd;

  const basePrice = progressPrice+colorPrice+artworkPrice;
  const characterPrice = basePrice / 2 * (characterCount - 1)
  const checkMarkedAddons = Object.keys(addonsPrice).filter((id) => addons[id])

  const addonsPriceResult = (() => {
    switch (checkMarkedAddons.length) {
      case 1:
        return addonsPrice[checkMarkedAddons[0]].usd
      case 0:
        return 0
      default:
        return checkMarkedAddons.map((item) => addonsPrice[item].usd).reduce((sum, item) => sum + item)
    }
  })()
  
  return basePrice + characterPrice + addonsPriceResult
};