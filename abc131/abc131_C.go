package main

import (
	"fmt"
)

func main() {
	var A, B, C, D int
	var counter int
	counter = 0

	fmt.Scan(&A, &B, &C, &D)
	for i := A; i <= B; i++ {
		if i%C != 0 && i%D != 0 {
			counter++
		}
	}

	fmt.Print(counter)

}
// タイムオーバー！！！！！！