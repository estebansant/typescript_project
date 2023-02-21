(() => {
  type Syzes = 'S' | 'M' | 'L' | 'XL';

  // normal function
  function createProductToJSON (
    title: string,
    createdAt: Date,
    stock: number,
    size: Syzes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJSON('P1', new Date(), 12,  'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);
  console.log(product1.size);


  // arrow function
  const createProductToJSON_V2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Syzes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJSON_V2('P2', new Date(), 31);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.stock);
  console.log(product2.size);

})();
