import { useSelector } from 'react-redux';

import { usePriceCalc } from "@hooks/usePriceCalc";

const BasePriceConfigTotal = () => {
  const selector = useSelector(state => state);
  const { progress, color, artwork } = selector;

  const priceId = `${progress}-${color}-${artwork}`;
  const priceCount = usePriceCalc(selector);

  return <h3>
    price: ${priceCount}
  </h3>
}

export default BasePriceConfigTotal;