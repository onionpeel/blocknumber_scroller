export const createBlockArray = blockNumber => {
  let array = [];
  for(let i = 0; i < 10; i++) {
    array[i] = blockNumber - i;
  };
  return array;
};
