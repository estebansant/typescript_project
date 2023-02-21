(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(2021, 1, 28),
    stock: 45,
    size: 'M'
  })
  addProduct({
    title: 'Product2',
    createdAt: new Date(2022, 4, 16),
    stock: 15,
  })

  products.push({
    title: 'Product3',
    createdAt: new Date(2023,0,10),
    stock: 30,
    size: 'S'
  })

  console.log(products)
})();
