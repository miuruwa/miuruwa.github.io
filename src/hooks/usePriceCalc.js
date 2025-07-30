import { useToolKit } from "@shared/toolkit";
import languageData from "@shared/languages";

export const usePriceCalc = ({progress, color, artwork, characterCount, ...addons}) => {
  const toolkit = useToolKit()
  const configData = languageData[toolkit.settings.language].request.config;
  const addonData = languageData[toolkit.settings.language].request.addons;

  const progressPrice = configData["progress"].list[progress].price;
  const colorPrice = configData["color"].list[color].price;
  const artworkPrice = configData["artwork"].list[artwork].price;

  const basePrice = progressPrice+colorPrice+artworkPrice;
  const characterPrice = basePrice / 2 * (characterCount - 1)
  const checkMarkedAddons = Object.keys(addonData.list).filter((id) => addons[id])

  const addonsPrice = (() => {
    switch (checkMarkedAddons.length) {
      case 1:
        return addonData.list[checkMarkedAddons[0]].price
      case 0:
        return 0
      default:
        return checkMarkedAddons.map((item) => addonData.list[item].price).reduce((sum, item) => sum + item)
    }
  })()
  
  return basePrice + characterPrice + addonsPrice
};