'use strict'

function Main(input){
  const tmpInputs = input.toString().split("\n");
  const N = tmpInputs[0];
  const diArray = [];
  for(let i=1;i<=N;i++){
    diArray.push(parseInt(tmpInputs[i]));
  }

  const groupedArray = [];
  diArray.forEach(item=>{
    groupedArray.indexOf(item)==-1 ? groupedArray.push(item):""; 
    //Array.includes使えたらキレイなのにv5では使えなかった
  })
  console.log(groupedArray.length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
