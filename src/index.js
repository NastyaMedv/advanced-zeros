module.exports = function getZerosCount(number, base) {
  // your implementation
  var zero = 0, N = base, mn = [], k = 2, j = 0;

  while ((N > 1) && (k <= N)) {
    if (N % k == 0) {
      mn[j] = k;
      j++;
      N = N / k;
    } else {
      if (k == 2) {
        k++;
      } else {
        k += 2;
      }
    }
  }

  var mnoj = mn[mn.length-1];

  /*var st = 1;
  j = number;
  while ((j % mnoj) == 0) {
    j = j / mnoj;
    st++;
  }*/

  var i = mnoj;
  while (i <= number) {
    j = i;
    while ((j % mnoj) == 0) {
      j = j / mnoj;
      zero++;
    }
    i = i + mnoj;
  }

  return Math.floor(zero);
}
