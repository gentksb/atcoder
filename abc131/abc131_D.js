'use strict'

function Main(input){
  const jobsArray = input.toString().split("\n");
  const N = jobsArray.shift();
　const jobObject = {};
  
  jobsArray.forEach(function(value, index, array) {
    const tempArray = value.toString().split(" ")
    jobObject[index] = {}
    jobObject[index].A = tempArray[0]
    jobObject[index].B = tempArray[1]
  })

  console.log(jobObject)

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));