(() => {
  let productPrice: number = 100;

  let customerAge: number = 21;
  customerAge = customerAge + 1;
  console.log('Customer Age:', customerAge);

  let productsInStock: number;
  console.log('Products In Stock:', productsInStock);
  if (productsInStock > 10){
    console.log('is greater');
  };

  let discount = parseInt('201');
  console.log('discount:', discount)

  if(discount <= 200) {
    console.log('apply');
  } else {
    console.log('dont apply');
  }

  let hex = 0xfff;
  console.log('hex:', hex);
  let bin = 0b10111001;
  console.log('bin:', bin);
})();
