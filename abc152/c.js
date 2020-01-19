'use strict'

function Main(input) {
  const inputArr = input.split("\n");
  const N = Number(inputArr[0]);
  const P = inputArr[1];
  const P_arr = P.split(" ")

  let count = 0;

  for (let i = 0; i < P_arr.length; i++) {
    let checkDigit = 1;

    for (let j = i; j >= 0; j--) {
      if (P_arr[i] <= P_arr[j]) {
        checkDigit = checkDigit * 1
      } else {
        checkDigit = checkDigit * 0
      }
      // console.log(`Ni(i=${i})=${P_arr[i]},Nj(j=${j - 1})=${P_arr[j]}なので${P_arr[i] <= P_arr[j]}、判定${checkDigit}`)
    }


    if (checkDigit) {
      // console.log(checkDigit)
      count = count + 1;
    }
  }

  console.log(count)

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));