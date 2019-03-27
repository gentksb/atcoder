'use strict'

function Main(input){
  let baseStr = input.toString();
  const str1 = "dreamer"//dreamerdream,dreamereraser,dreamerdream
  const str2 = "dream"//dreamdreamer,dreameraser,dreamerase
  const str3 = "eraser"//eraserdreamer,eraserdream,erasererase
  const str4 = "erase"//erasedreamer,erasedream,eraseeraser


  baseStr = baseStr.replace(str2+str3,"");//dream+eraserがdreamer判定されるのを防ぐ
  baseStr = baseStr.replace(str2+str4,"");//dream+eraseがdreamer判定されるのを防ぐ
  baseStr = baseStr.replace(str1,"");
  baseStr = baseStr.replace(str2,"");
  baseStr = baseStr.replace(str3,"");
  baseStr = baseStr.replace(str4,"");

  baseStr.length == 0 ? console.log("YES"):console.log("NO");

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
