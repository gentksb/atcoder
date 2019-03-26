function Main(input){
	var splitInput = input.split(" ");
  	var answer = ((parseInt(splitInput[0],10)*parseInt(splitInput[1],10))%2) ? "Odd" : "Even";
  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));