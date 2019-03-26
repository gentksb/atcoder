'use strict'

function Main(input){
  const tmpInputs = input.toString().split("\n");
  const N = parseInt(tmpInputs[0]);
  const aArray = tmpInputs[1].toString().split(" ").map(Ai => parseInt(Ai));
  const sortedArray = aArray.sort((a,b)=> b-a);

  let AliceScore = 0;
  let BobScore = 0;

    for(let currentTurnCount=1; currentTurnCount <= N; currentTurnCount++){
      currentTurnCount % 2 ? AliceScore += sortedArray[currentTurnCount-1] : BobScore += sortedArray[currentTurnCount-1];
    }

  console.log(AliceScore-BobScore);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
