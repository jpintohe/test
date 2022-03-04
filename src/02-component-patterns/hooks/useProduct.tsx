import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const counterHandler = (value: number): void => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    counterHandler
  };
};

export default useProduct;
