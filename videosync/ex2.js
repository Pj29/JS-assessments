/** 
console.log(1);

setTimeout(() => {
  console.log(2);
}, 100);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);
*/

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);