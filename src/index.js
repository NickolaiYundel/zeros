module.exports = function zeros(expression) {
  let array = expression.split("*");
  let fac = [], doubleFac = [];
  let limit;
  let zeross = 0;
  let multiplication = valueFact = factor = BigInt(1);
  for (let i = 0; i < array.length;) {
    if (array[i].endsWith('!!')) {
      doubleFac.push(array[i].slice(0, -2));
    } else {
      fac.push(array[i].slice(0, -1));
    }
    i++
  }
  for (let i = 0; i < fac.length;) {
    limit = Number(fac[i]);
    for (let i = 0; i < limit;) {
      valueFact *= BigInt(factor);
      i++;
      factor = BigInt(factor) + BigInt(1);
    };
    i++
    multiplication *= valueFact;
    factor = valueFact = BigInt(1);
  }

  for (let i = 0; i < doubleFac.length;) {
    limit = Number(doubleFac[i]);
    if ((limit % 2) === 1) {
      for (let i = 0; i < limit;) {
        valueFact *= BigInt(factor);
        i = i + 2;
        factor = BigInt(factor) + BigInt(2);
      };
      i++
      multiplication *= valueFact;
      factor = valueFact = BigInt(1);
    }

    else {
      factor = BigInt(2);
      for (let i = 0; i < limit;) {
        valueFact *= BigInt(factor);
        i = i + 2;
        factor = BigInt(factor) + BigInt(2);
      };
      i++
      multiplication *= valueFact;
      factor = valueFact = BigInt(1);
    }
  }

  while (multiplication % BigInt(10) == 0) {
    multiplication = multiplication / BigInt(10);
    zeross++;

  }
  return (zeross);
}
