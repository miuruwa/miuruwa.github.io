import { useMemo } from "react";
import { useAppSelector } from "./redux";

export const useFindOptionsByType = (type: string): Requests.Option[] => {
  const { requests, isLoading } = useAppSelector(state => state.AvailableReducer);

  return useMemo(() => {
    if (!isLoading) {
      const firstIndex = requests.findIndex((option: Requests.Option) => option.type === type);
      const lastIndex = requests.findLastIndex((option: Requests.Option) => option.type === type);
      return requests.slice(firstIndex, lastIndex + 1);
    }

    return []
  }, [isLoading, requests, type])
}