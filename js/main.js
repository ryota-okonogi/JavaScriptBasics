// return

// 3会のテストの合計点を計算する処理

'use strict';

// function sum(a, b, c) {
//   return a + b + c;
// }

const sum = function(a, b, c) {
  return a + b + c;
}; // 代入をしているのでセミコロンを付ける

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
console.log(total);

