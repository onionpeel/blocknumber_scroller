export const createBlockArray = blockNumber => {
  let array = [];
  for(let i = 0; i < 10; i++) {
    array[i] = blockNumber - i;
  };
  return array;
};

export const delay = ms => {
  return new Promise(res => {
    setTimeout(res, ms);
  });
};
