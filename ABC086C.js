'use strict'

function Main(input){
  const tmpInput = input.toString().split("\n");
  const N = parseInt(tmpInput[0],10)
  const Pins = {};
  //jsonオブジェクトで表現
  //ex: { Pin1: { time: 3, x: 1, y: 2 }, Pin2: { time: 6, x: 1, y: 1 } }

  for(let arrayCount=1;arrayCount<=N;arrayCount++){
    Pins["Pin"+arrayCount] = {};
    Pins["Pin"+arrayCount].time = parseInt(tmpInput[arrayCount].split(" ")[0]);
    Pins["Pin"+arrayCount].x = parseInt(tmpInput[arrayCount].split(" ")[1]);
    Pins["Pin"+arrayCount].y = parseInt(tmpInput[arrayCount].split(" ")[2]);
  }
  // console.log(Pins)
  //timeの差分から、移動可能な総距離を算出して、xとyに割り当てることが可能かどうか調べる
  for(let arrayCount=1;arrayCount<=N;arrayCount++){

  }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
