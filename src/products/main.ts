import { addProduct, calcStock, products } from './product.services';

addProduct({
  title: 'Product1',
  createdAt: new Date(2021, 1, 28),
  stock: 8,
  size: 'M'
})
addProduct({
  title: 'Product2',
  createdAt: new Date(2022, 4, 16),
  stock: 5,
})

console.log(products);
const total = calcStock();
console.log(total);

