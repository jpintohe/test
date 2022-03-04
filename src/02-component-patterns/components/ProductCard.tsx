import { createContext, CSSProperties, ReactElement } from 'react';

import useProduct from '../hooks/useProduct';
import {
  Product,
  ProductContextProps
} from '../interfaces/Product.interface';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext(
  {} as ProductContextProps
);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  children,
  product,
  className,
  style
}: Props) => {
  const { counter, counterHandler } = useProduct();
  return (
    <Provider value={{ product, counter, counterHandler }}>
      <div
        style={style}
        className={`${styles.productCard} ${className}`}
      >
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
