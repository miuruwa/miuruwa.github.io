import { useToolKit } from "@shared/toolkit";
import languageData from "@shared/languages";

export const usePriceCalc = ({progress, color, artwork}) => {
    const toolkit = useToolKit()
    const configData = languageData[toolkit.settings.language].basePrice.config;

    const progressPrice = configData["progress"].list[progress].price;
    const colorPrice = configData["color"].list[color].price;
    const artworkPrice = configData["artwork"].list[artwork].price;

    return progressPrice+colorPrice+artworkPrice;
};