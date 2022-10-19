// return

// 3会のテストの合計点を計算する処理

'use strict';

function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
  console.log(a + b + c);
}

// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18


// console.log(total);

// 数値を合算したい場合
// 関数では「結果」を表示しているだけなので、書き換える必要がある
//「処理結果を(値)として」返したい -> console.log => return
