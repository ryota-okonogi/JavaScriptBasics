'use strict';

/*
const sum = function(a, b, c) {
  return a + b + c;
}; // 代入をしているのでセミコロンを付ける
*/

const sum = (a, b, c) => a + b + c;
// functionを消す
// 矢印( => )を書く
// returnを消す

// const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
// console.log(total);

// 引数が１つの場合 => [ {}, (), return ]が省略できる
// const double = function(a) {
//   return a * 2;
// };

const double = (a) => a * 2;
console.log(double(12));
