import data from './newYork-data.json';

data.forEach((obj, i) => {
  obj.id = i
});


export default data;