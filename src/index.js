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

  var mnoj = [[],[],[],[]];
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

  for (var i = 2; i <= number; i++) {
    for (var x = 0; x < mnoj[0].length; x++) {
      if ((i % mnoj[0][x]) == 0) {
        j = i;
        while ((j % mnoj[0][x]) == 0) {
          j = j / mnoj[0][x];
          mnoj[2][x]++;
        }
      }
    }
  }

  for (var i = 0; i < mnoj[0].length; i++) {
    mnoj[3][i] = mnoj[2][i] / mnoj[1][i];
  }

  zero = mnoj[3][0];
  for (var i = 1; i < mnoj[0].length; i++) {
    if (mnoj[3][i] < zero) {
      zero = mnoj[3][i];
    }
  }




  return Math.floor(zero);
}
