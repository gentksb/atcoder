package main

import (
	"fmt"
)

func main() {
	var A, B, C, X int
	coinsPatternTotalArray := []int{}

	fmt.Scan(&A, &B, &C, &X)

	//与えられたコインの組み合わせによって生まれる価格を全て列挙し、一致数をカウントする
	for i := 0; i <= A; i++ {
		for j := 0; j <= B; j++ {
			for k := 0; k <= C; k++ {
				coinsPatternTotalArray = append(coinsPatternTotalArray, i*500+j*100+k*50)
			}
		}
	}

	//fmt.Print(coinsPatternTotalArray)

	var counter int
	for i := 0; i < len(coinsPatternTotalArray); i++ {
		if coinsPatternTotalArray[i] == X {
			counter++
		}
	}
	fmt.Print(counter)

}
