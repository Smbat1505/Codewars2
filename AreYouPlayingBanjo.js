// function areYouPlayingBanjo(name) {
//   if (name.charAt(0) === "R" || name.charAt(0) === "r") {
//     return `${name} plays banjo`;
//   } else return `${name} does not play banjo`;
// }

//  or
function areYouPlayingBanjo(name) {
  // Implement me
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

console.log(areYouPlayingBanjo("SEM"));
console.log(areYouPlayingBanjo("Rima"));
console.log(areYouPlayingBanjo("Inga"));
console.log(areYouPlayingBanjo("robert"));
