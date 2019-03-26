'use strict'

function Main(input){
	const tmpInput = input.split("\n")
	let inputArr = tmpInput[1].split(" ")
	
	const calc = (item) =>{
		let count = 0; //要素ごとの2で割れる回数を記録
		while (item % 2 === 0){
			item /= 2
			count++
		}
	return count
	}
	console.log(Math.min(...inputArr.map(num=>calc(num))))　//全要素の2で割れる数の配列を作って最小値を回答
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
