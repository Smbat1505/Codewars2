// Учитывая массив целых чисел. Перейдите массив, где первый элемент является подсчетом положительных чисел, а второй элемент - это сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
// Если вход является пустым массивом или является нулевым, верните пустой массив.

function countPositivesSumNegatives(input) {
  // your code here
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? positiveNums++ : (negativeNums += num)));
  }
  return [positiveNums, negativeNums];
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 30, 0, -23, -34, -65, -55]);
