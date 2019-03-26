function Main(input){
	var inputTxt = input.toString();
  console.log(parseInt(inputTxt.slice(0,1),10)+parseInt(inputTxt.slice(1,2),10)+parseInt(inputTxt.slice(2,3),10));
}
 
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));