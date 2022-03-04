import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components';

import { Product } from '../interfaces/Product.interface';

import styles from '../styles/styles.module.css';
import '../styles/custom-styles.css';

import Image from '../assets/coffee-mug2.png';

// const product = {
//   id: '1',
//   title: 'Coffee Mug - Card',
//   img: './coffee-mug.png'
// };
// const productWithoutImage = {
//   id: '2',
//   title: 'Coffee Mug - Card'
// }

const products: Product[] = [
  {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
  },
  {
    id: '2',
    title: 'Coffee Mug - Card',
    img: './coffee-mug2.png'
  }
];

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

const product2 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug2.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div className={styles.container}>
        {/* <ProductCard product={productWithoutImage}>
          <ProductImage img="./coffee-mug2.png" />
          <ProductTitle title="New Coffee Title" />
          <ProductButtons />
        </ProductCard> */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}

        {/* <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
            }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard> */}
      </div>
      <div className="shopping-cart">
        <ProductCard
          product={product1}
          className="bg-dark"
          style={{
            width: '100px'
          }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product2}
          className="bg-dark"
          style={{
            width: '100px'
          }}
        >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
