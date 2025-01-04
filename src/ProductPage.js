import React from 'react';
import ProductDetailsCard from './ProductDetailsCard';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Mama Earth facewash',
      description: 'A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne',
      price: 'Rs 306',
      imageUrl: 'https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg',
      rating: 4.2,
      reviews: ['Awesome!', 'Love it.', 'Worth every penny.'],
    },
    {
      id: 2,
      name: 'Naykka ewash',
      description: 'A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne',
      price: 'Rs 203',
      imageUrl: 'https://images-static.nykaa.com/media/catalog/product/1/0/10243738904245712808_9h.jpg?tr=w-500,pr-true',
      rating: 4.2,
      reviews: ['Awesome!', 'Love it.', 'Worth every penny.'],
    },
    {
        id: 3,
        name: 'Coffe m',
        price: 'Rs 125',
        description: 'A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne',
        imageUrl: 'https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718',
        rating: 4.5,
        reviews: ['Great product!', 'Highly recommended.', 'Good value for money.'],
      },
      {
        id: 4,
        name: 'Alo Vera',
        price: 'Rs 345',
        description: 'A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne',
        imageUrl: 'https://files.stbotanica.com/site-images/1200x1200/7bad6480-1fb7-11ec-9956-f11381c8bb2c.jpg',
        rating: 4.2,
        reviews: ['Awesome!', 'Love it.', 'Worth every penny.'],
      },
      {
        id: 5,
        name: 'Biotique',
        price: 'Rs 234',
        description: 'A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0652/3787/6974/products/1-min_8.jpg?v=1664358676',        
        rating: 4.2,
        reviews: ['Awesome!', 'Love it.', 'Worth every penny.'],
      },
      {
        id: 6,
        name: 'Sunny',
        price: 'Rs 205',
        description: 'A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne',
        imageUrl: 'https://m.media-amazon.com/images/I/71XbiJC3zQL.jpg',
        rating: 4.2,
        reviews: ['Awesome!', 'Love it.', 'Worth every penny.'],
      },

    // Add more product objects as needed
  ];

  return (
    <div className="product-page">
      <h1>Flipkart</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductDetailsCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
