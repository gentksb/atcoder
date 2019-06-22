'use strict'

function Main(input){
  let baseStr = input.toString();
  const isGood = (a,b) =>{
    return a != b ? true : false
  }

  isGood(baseStr.slice(0,1),baseStr.slice(1,2)) && isGood(baseStr.slice(1,2),baseStr.slice(2,3)) && isGood(baseStr.slice(2,3),baseStr.slice(3,4)) ? console.log("Good") : console.log("Bad");

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));