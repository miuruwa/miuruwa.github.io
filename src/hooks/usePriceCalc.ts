import { useToolKit } from "@shared/toolkit";
import { addonsPrice, configPrice } from "@shared/pages/request";

// TODO: не видит source.d.ts
// @ts-ignore
export const usePriceCalc = ({progress, color, artwork, characterCount, ...addons}) => {
  const toolkit = useToolKit()

  // @ts-ignore
  const progressPrice = configPrice["progress"][progress].usd;
  // @ts-ignore
  const colorPrice = configPrice["color"][color].usd;
  // @ts-ignore
  const artworkPrice = configPrice["artwork"][artwork].usd;

  const basePrice = progressPrice+colorPrice+artworkPrice;
  const characterPrice = basePrice / 2 * (characterCount - 1)
  const checkMarkedAddons = Object.keys(addonsPrice).filter((id) => addons[id])

  const addonsPriceResult = (() => {
    switch (checkMarkedAddons.length) {
      case 1:
        // @ts-ignore
        return addonsPrice[checkMarkedAddons[0]].usd
      case 0:
        return 0
      default:
        // @ts-ignore
        return checkMarkedAddons.map((item) => addonsPrice[item].usd).reduce((sum, item) => sum + item)
    }
  })()
  
  return basePrice + characterPrice + addonsPriceResult
};