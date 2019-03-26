'use strict'

function Main(input){
  const tmpInput = input.toString().split("\n");
  const N = parseInt(tmpInput[0],10);
  let inputArr = tmpInput[1].split(" ");
  let answer = 0;
  
  function isAllEven(input){
    let output = 0;
    for(let i=0;i<N;i++){
      let tmpOutput = parseInt(input[i],10) % 2;
      output = output + tmpOutput; //配列の全要素について商余を合計＝全て偶数の場合はoutput=0
    }
    let isEven = (output===0)?1:0;//0の場合偶数と判定してreturn値返す
    return isEven
  }
  
  while(isAllEven(inputArr)){
    answer++;
    inputArr = inputArr.map(item=>item / 2);
    
//    console.log(inputArr)
//    console.log("CurrentAnswer:"+answer)
//    console.log("isAllEven:"+isAllEven())
  }
  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
