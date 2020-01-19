'use strict'

function Main(input) {
  const inputArr = input.split(" ");
  const a = Number(inputArr[0]);
  const b = Number(inputArr[1]);

  let a_b = a;
  let b_a = b;

  for (let i = 1; i < b; i++) {
    a_b = a_b + a * Math.pow(10, i)
  }
  for (let j = 1; j < a; j++) {
    b_a = b_a + b * Math.pow(10, j)
  }

  // console.log(a_b, b_a)
  // console.log(Number(a_b.toString().charAt(0)), Number(b_a.toString().charAt(0)));
  console.log(Number(a_b.toString().charAt(0)) >= Number(b_a.toString().charAt(0)) ? b_a : a_b)

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));