(() => {
  let productTitle = "Amazing stuff";
  productTitle = 'My second name';
  console.log('productTitle:', productTitle);

  let productName = "My name's Robert";
  let productDescription = 'Stuff that I do.'
  const summmary = `
    he
    llo
    there.
    I am a variable ${productTitle}
  `

  let isNew: boolean = false;
  let productPrice: number = 100;

  const article = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    Is this a new product?: ${isNew}
  `
  console.log(article);

  const myString: string = "I am a string!"
})();
