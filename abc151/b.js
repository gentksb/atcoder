function Main(input) {
  const inputArr = input.toString().split("\n");
  const N = inputArr[0];
  var S = inputArr[1];

  var answerCount = 0;

  while (S.search("ABC") !== -1) {
    S = S.replace("ABC", "Z");
    answerCount++;
    // console.log(S);
  }


  console.log(answerCount);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));