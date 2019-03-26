'use strict'

function Main(input){
  const tmpInputs = input.toString().split("\n");
  const coins500 = parseInt(tmpInputs[0]);
  const coins100 = parseInt(tmpInputs[1]);
  const coins50 = parseInt(tmpInputs[2]);
  const targetPrice = parseInt(tmpInputs[3]);

  //与えられたコインの組み合わせによって生まれる価格を全て列挙し、一致数をカウントする
  const coinsCombinationPriceArray = [];
  for (let i=0; i <= coins500 ; i++){
    for (let j=0; j <= coins100 ; j++){
      for (let k=0; k <= coins50 ; k++){
        coinsCombinationPriceArray.push(i*500+j*100+k*50);
      }
    }
  }

//  console.log(coinsCombinationPriceArray);

  let answer = 0;
  coinsCombinationPriceArray.forEach((item)=>{
    (item === targetPrice) ? answer++ : "";
  })
  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
