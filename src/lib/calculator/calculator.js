export function sum(num1, num2) {
  const int1 = parseInt(num1, 10);
  const int2 = +num2;

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Please check yout input');
  }

  return int1 + int2;
}

/*
    Para transformar a string em número é possível utilizar o parseInt com radix
    ou o + antes da variável, que transforma em número

    o parseInt transforma string vazia em NaN, já o +'' transforma em 0
*/
