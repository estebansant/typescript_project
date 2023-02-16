(() => {
  let userId: string | number;
  userId = 1239;
  userId = 'Pablo';

  function greetings(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string: ${myText.toLowerCase()}`);
    } else{
      console.log(`number: ${myText.toFixed(1)}`);

    }
  }
  greetings('Hello there');
  greetings(45.918203971028);
})();
