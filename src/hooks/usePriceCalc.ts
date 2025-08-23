import { request } from "@shared/pages/request";

// @ts-expect-error // TODO: selector type();
export const usePriceCalc = ({progress, color, artwork, characterCount, ...addons}) => {
  // @ts-expect-error Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ sk: { usd: number; }; ln: { usd: number; }; }'.ts(7053)
  const progressPrice = request.configPrice["progress"][progress].usd;
  // @ts-expect-error Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ nn: { usd: number; }; bw: { usd: number; }; sm: { usd: number; }; rn: { usd: number; }; }'.
  const colorPrice = request.configPrice["color"][color].usd;
  // @ts-expect-error Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ bu: { usd: number; }; hb: { usd: number; }; fb: { usd: number; }; ch: { usd: number; }; rs: { usd: number; }; eb: { usd: number; }; }'.ts(7053)
  const artworkPrice = request.configPrice["artwork"][artwork].usd;

  const basePrice = progressPrice+colorPrice+artworkPrice;
  const characterPrice = basePrice / 2 * (characterCount - 1)
  const checkMarkedAddons = Object.keys(request.addonsPrice).filter((id) => addons[id])

  const addonsPriceResult = (() => {
    switch (checkMarkedAddons.length) {
      case 1:
        // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ addBackground: { usd: number; }; specialRequest: { usd: number; }; commercialUseFee: { usd: number; }; rushFee: { usd: number; }; }'.
        // No index signature with a parameter of type 'string' was found on type '{ addBackground: { usd: number; }; specialRequest: { usd: number; }; commercialUseFee: { usd: number; }; rushFee: { usd: number; }; }'.ts(7053)
        return request.addonsPrice[checkMarkedAddons[0]].usd
      case 0:
        return 0
      default:
        // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ addBackground: { usd: number; }; specialRequest: { usd: number; }; commercialUseFee: { usd: number; }; rushFee: { usd: number; }; }'.
        // No index signature with a parameter of type 'string' was found on type '{ addBackground: { usd: number; }; specialRequest: { usd: number; }; commercialUseFee: { usd: number; }; rushFee: { usd: number; }; }'.ts(7053)
        return checkMarkedAddons.map((item) => request.addonsPrice[item].usd).reduce((sum, item) => sum + item)
    }
  })()

  return basePrice + characterPrice + addonsPriceResult
};