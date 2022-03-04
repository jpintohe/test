import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({
  img = '',
  className,
  style
}: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow = '';

  if (img) imgToShow = img;
  if (product.img) imgToShow = product.img;
  if (!imgToShow) imgToShow = noImage;

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt=""
    />
  );
};
