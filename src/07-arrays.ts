(() => {
  let prices = [1,2,3,4,10,20,30,45];
  prices.push(352);

  let products = ['hello', true];
  products.push(false);

  let mixed: (string | boolean | number | Object)[] = [1, "hey!"];
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 3, 4, 5];
  let multiply = numbers.map(item => item * 2);
  console.log(multiply);
})();
