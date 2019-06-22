'use strict'

function Main(input){
  const tmpInputs = input.toString().split(" ");
  const N = parseInt(tmpInputs[0]);
  const L = parseInt(tmpInputs[1]);

  let totalTaste = 0;
  let tasteArray = [];
  let tasteAbsArray =[];
  //総和で味を出す
  for (let i=1 ; i<=N ; i++ ){
    let taste = L + i - 1;
    totalTaste = totalTaste + taste;
    tasteAbsArray.push(Math.abs(taste));
    tasteArray.push(taste);
  }

  //絶対値最小の味のリンゴを引く
    console.log(totalTaste - tasteArray[tasteAbsArray.indexOf(Math.min(...tasteAbsArray))])

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));