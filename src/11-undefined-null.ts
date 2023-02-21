(() => {
  // let myNumber: number;
  // let myString: string;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 24;

  let myString: string | undefined = undefined;
  myString = 'Hello there';

  function hi(name: string | null){
    let hello = 'Hey ';
    if(name){
      hello += name;
    } else{
      hello += 'nobody';
    };
    console.log(hello);
  }

  hi('Antonio');
  hi(null);

  function hiV2(name: string | null){
    let hello = 'Hey ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Romina');
  hiV2(null);
})();
