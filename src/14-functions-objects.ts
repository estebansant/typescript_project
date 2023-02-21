(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password)
  }

  login({
    email: 'fulanito@gmail.com',
    password: '3213And'
  })

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(2021, 1, 28),
    stock: 45,
    size: 'M'
  })

  console.log(products)
})();
