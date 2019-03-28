'use strict'

function Main(input){
  let baseStr = input.toString();
  const str1 = "dreamer"
  const str2 = "dream"
  const str3 = "eraser"
  const str4 = "erase"

//endWith使って後方一致検索し、ヒットした単語を除去。その後全件一致チェックしてヒットしなかったらループ終わり、文字が残っていたらNG

//終了チェック
  const checkEndingWithStrs = (chkStr) =>{
    if(chkStr.endsWith(str1)||chkStr.endsWith(str2)||chkStr.endsWith(str3)||chkStr.endsWith(str4)){
      return 1;
    }else{
      return 0
    }
  }

  while(checkEndingWithStrs(baseStr)){
    baseStr.endsWith(str1) ? baseStr = baseStr.slice(0,baseStr.lastIndexOf(str1)):"";
    baseStr.endsWith(str2) ? baseStr = baseStr.slice(0,baseStr.lastIndexOf(str2)):"";
    baseStr.endsWith(str3) ? baseStr = baseStr.slice(0,baseStr.lastIndexOf(str3)):"";
    baseStr.endsWith(str4) ? baseStr = baseStr.slice(0,baseStr.lastIndexOf(str4)):"";
    // console.log(baseStr+"="+checkEndingWithStrs(baseStr))
  }

  baseStr.length === 0 ? console.log("YES") : console.log("NO");

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
