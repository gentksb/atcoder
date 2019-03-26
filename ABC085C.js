'use strict'

function Main(input){
  const tmpInputs = input.toString().split(" ");
  const N = tmpInputs[0];
  const Y = tmpInputs[1];
  const NoAnswer = "-1 -1 -1";
//10000x+5000y+1000z=Y,x+y+z=N の連立方程式
// {"10000":x,"5000":y,"1000":z}
  let x = 0;
  let y = 0;
  let z = 0;
//  const Otoshidama = {"10000円":x,"5000円":y,"1000円":z};
  let answer = "";

//組み合わせを一つ上げればいいので、最初の解を抽出したい
//お札1枚づつ動かして条件ヒットしたらbreak
//計算量がマッハ
  for(let i=0;i<=N;i++){
    x = N-i;
    if (x+y+z==N && 10000*x+5000*y+1000*z == Y){
      answer = x+" "+y+" "+z;
      break
    }
    else{
      for(let j=0;j<=N-x;j++){
        y = N-j;
        if (x+y+z==N && 10000*x+5000*y+1000*z == Y){
          answer = x+" "+y+" "+z;
          break
        }
        else{
          for(let k=0;k<=N-(x+y);k++){
            z = N-k;
            if (x+y+z==N && 10000*x+5000*y+1000*z == Y){
              answer = x+" "+y+" "+z;
              break
            }
          }
        }
      }
    }
  }
  answer!=""?console.log(answer):console.log(NoAnswer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
