'use strict'

function Main(input){
  const tmpInputs = input.toString().split(" ");
  const N = tmpInputs[0];
  const A = parseInt(tmpInputs[1]);
  const B = parseInt(tmpInputs[2]);

  let answer = 0;

  for(let currentNumber=1; currentNumber<=N; currentNumber++){
    let sum = 0;
    let currentNumber_length = currentNumber.toString().length;
      for(let j=0; j<currentNumber_length; j++){
        sum += parseInt(currentNumber.toString().charAt(j));
      }
    (sum>=A && sum<=B) ? answer += currentNumber : "";
  }
  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
