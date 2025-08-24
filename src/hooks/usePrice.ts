import { useCurrency } from "./useCurrency";

export const usePrice = <PriceType, >(list: Shared.CurrencyList<PriceType>[], value: PriceType): number => {
  const [currentCurrency] = useCurrency();
  const currencyList = list.find(config => config.name === value)?.currency;

  return currencyList?.find(currency => currency.name == currentCurrency)?.value ?? 0;
}