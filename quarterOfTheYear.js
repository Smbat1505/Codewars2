// Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число. Например: 2-й месяц (февраль) является частью первого квартала; 6 месяц (июнь) входит во второй квартал; и месяц 11 (ноябрь) является частью четвертого квартала.

// const quarterOf = (month) => {
//   // Your code here
//   if (month < 4) return 1;
//   if (month < 7) return 2;
//   if (month < 10) return 3;
//   return 4;
// };

// alternative

const quarterOf = (m) => Math.ceil(m / 3);

console.log(quarterOf(5));

function areYouPlayingBanjo(name) {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    return `${name} plays banjo`;
  } else return `${name} does not play banjo`;
}
