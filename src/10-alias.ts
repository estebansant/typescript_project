(() => {
  type UserID = string | number | boolean;
  let userId: UserID

  // Literal types
  type Syzes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Syzes;
  shirtSize = 'S';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'M';
  // shirtSize = 'big';

  function greetings(userId: UserID, shirtSize: Syzes){
    if(typeof userId === 'string'){
      console.log(`string: ${userId.toLowerCase()}`);
    }
  }

  greetings(11832, 'L');
  greetings('user3', 'L');

})();
