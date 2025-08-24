import { useLocalStorage } from "./useStorage";

export const useCurrency = () => {
  const [currentCurrency, setCurrency] = useLocalStorage<Shared.Currencies>("currency", "usd");

  return [currentCurrency, setCurrency]
}