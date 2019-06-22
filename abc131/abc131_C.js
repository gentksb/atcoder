'use strict'

function Main(input){
  const tmpInputs = input.toString().split(" ");
  const A = parseInt(tmpInputs[0]);
  const B = parseInt(tmpInputs[1]);
  const C = parseInt(tmpInputs[2]);
  const D = parseInt(tmpInputs[3]);

  let counter = 0;

  for(let i = A; i <=B; i++){
    i % C != 0 && i % D != 0 ? counter++ : counter+0
  }

  console.log(counter)

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

//処理時間切れ！！！！！！