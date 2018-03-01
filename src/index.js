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

  var mnoj = [[],[],[]];
  mnoj[0][0] = mn[0];
  mnoj[1][0] = 0;
  mnoj[2][0] = 0;
  j=0;
  for (var i = 0; i < mn.length; i++) {
    if (mn[i] == mnoj[0][j]) {
      mnoj[1][j]++;
    } else {
      j++;
      mnoj[0][j] = mn[i];
      mnoj[1][j] = 1;
      mnoj[2][j] = 0;
    }
  }

  var del = mnoj[0][mnoj[0].length-1];
  for (var i = 2; i <= number; i++) {
    if ((i % del) == 0) {
      j = i;
      while ((j % del) == 0) {
        j = j / del;
        mnoj[2][mnoj[0].length-1]++;
      }
    }
  }

  zero = mnoj[2][mnoj[0].length-1] / mnoj[1][mnoj[0].length-1];

  return Math.floor(zero);
}
