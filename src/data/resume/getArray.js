const R = require('ramda');

const getArray = (list) => {
  return R.keys(list).map(key => {
    const item = list[key];
    return {
      key,
      name: key,
      ...item
    };
  });
};

module.exports = {
  getArray
};
