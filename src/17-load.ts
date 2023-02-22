import _ from 'lodash';

const data = [
  {
    username: 'estebansant',
    role: 'admin'
  },
  {
    username: 'valen',
    role: 'seller'
  },
  {
    username: 'carol',
    role: 'seller'
  },
  {
    username: 'josh',
    role: 'customer'
  }
];

const answer = _.groupBy(data, (item) => item.role);
console.log(answer);
