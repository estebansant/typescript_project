(() => {
  let dynamicVar: any;
  dynamicVar = 100;
  dynamicVar = 'string';
  dynamicVar = null;
  dynamicVar = {};

  dynamicVar = 'Hello';
  const answer = (dynamicVar as string).toLowerCase();
  console.log(answer);
})();
