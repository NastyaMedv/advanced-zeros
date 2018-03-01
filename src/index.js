module.exports = function getZerosCount(number, base) {
  // your implementation

  var zero = 0;
  var b = 5;
  if (base % 2 == 0) { b = base / 2; }
    else { b = (base-1) / 2;}

  if (base == 2) { return 0;}
  if (base == 3) { return 0;}

  var i = b, j = b;
  while (i <= number) {
    j = i;
    while ((j % b) == 0) {
      j = j / b;
      zero++;
    }
    i = i + b;
  }

  for (var z=0; z<zero; z++) {

  }

  return zero;
}
