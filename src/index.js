module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  let res = [];
  let i = 0;
  for (i; i < matrix.length; i += 1) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }
    res = res.concat(matrix[i]);
  }
  return res;
};
