import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

import Button from './UI/Button';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, counterHandler } = useContext(ProductContext);
  return (
    <div
      style={style}
      className={`${styles.buttonsContainer} ${className}`}
    >
      <Button
        className={styles.buttonMinus}
        onClick={() => counterHandler(-1)}
      >
        -
      </Button>
      <div className={styles.countLabel}>{counter}</div>
      <Button
        className={styles.buttonAdd}
        onClick={() => counterHandler(1)}
      >
        +
      </Button>
    </div>
  );
};
