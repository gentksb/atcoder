'use strict'

function Main(input){
  const tmpInputs = input.toString().split(" ");
  const N = parseInt(tmpInputs[0],10);
  const Y = parseInt(tmpInputs[1],10);
  const NoAnswer = "-1 -1 -1";

//可能な限り多く1万円札で作って、細かい部分が作れるか1枚づつ変更して確認していく

  for(let YukichiCount=N; YukichiCount >= 0; YukichiCount--){
    let extraYen_Y = Y - 10000*YukichiCount;
    let extraBill_Y = N - YukichiCount
    if(extraYen_Y<0){continue}

      for(let IchiyoCount=extraBill_Y;IchiyoCount>=0;IchiyoCount--){
        let extraYen_I = extraYen_Y - 5000*IchiyoCount
        let extraBill_I = extraBill_Y - IchiyoCount
        if(extraYen_I<0){continue}
          
          //1000円札は1パターンのみでOK
          let HideyoCount = extraBill_I;
          let extraYen = extraYen_I - 1000*HideyoCount;
          if(extraYen!==0){continue}
            console.log(YukichiCount+" "+IchiyoCount+" "+HideyoCount)
            return ""
      }
  }
  console.log(NoAnswer)
  return ""
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
