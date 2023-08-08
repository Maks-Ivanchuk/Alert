

function fibonachi() {
  let a = 1;
  let b = 1;
  let c = 0;

  while (c <= 1000) {
    if (c === 0) {
      c = a + b;
      console.log(a);
      console.log(b);
      console.log(c);
      b = c;
    } else {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
}

fibonachi();