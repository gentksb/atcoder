'use strict'

function Main(input){
  const tmpInput = input.toString().split("\n");
  const N = parseInt(tmpInput[0],10)
  const Pins = {};
  //分かりやすくするためjsonオブジェクトの配列で表現
  //ex: [{ time: 3, x: 1, y: 2 }, { time: 6, x: 1, y: 1 }]

  for(let arrayCount=1;arrayCount<=N;arrayCount++){
    Pins["Pin"+arrayCount] = [];
    Pins[arrayCount-1].time = parseInt(tmpInput[arrayCount].split(" ")[0]);
    Pins[arrayCount-1].x = parseInt(tmpInput[arrayCount].split(" ")[1]);
    Pins[arrayCount-1].y = parseInt(tmpInput[arrayCount].split(" ")[2]);
  }
  console.log(Pins)
  //timeの差分から、移動可能な総距離を算出して、xとyに割り当てることが可能かどうか調べる
  //まず最低限の移動量（単純に引いた場合）を判定
  //進んで戻った場合は、+1,-1で1セットと考えて、余った移動量が2で割り切れれば移動可能と判定
  let validator = 0;
  for(let pinindex=0;pinindex<=N;pinindex++){
    let ableToMove = Math.abs(Pins[pinindex].time - (pinindex-1==0)?0:Pins[pinindex-1].time);//初回移動だったら原点の0を引く、いきなりマイナス進行ということを考えて絶対値で計測
    console.log(pinindex+":"+ableToMove)
    let moved = (Pins[pinindex].x - (pinindex-1==0)?0:Pins[pinindex-1].x)+(Pins[pinindex].y - (pinindex-1==0)?0:Pins[pinindex-1].y);
    (moved<=ableToMove && (ableToMove-moved)%2==0) ? "" : validator++; //判定NGの時はvalidatorに入力
    }
    //1回もNG出なかった場合にクリア
    validator==0 ? console.log("Yes"):console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
