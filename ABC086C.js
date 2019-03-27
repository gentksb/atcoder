'use strict'

function Main(input){
  const tmpInput = input.toString().split("\n");
  const N = parseInt(tmpInput[0],10)
  const Arrays = {};
  //N個の座標配列を作成
  for(let arrayCount=1;arrayCount<=N;arrayCount++){
    Arrays["Array"+arrayCount] = tmpInput[arrayCount].split(" ");
  }
  console.log(Arrays)

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
