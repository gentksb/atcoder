package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	var N, A, B int
	var sum int

	fmt.Scan(&N, &A, &B)
	for i := 1; i <= N; i++ {
		var totalN int
		currentNumber := strconv.Itoa(i)
		for j := 0; j <= len(currentNumber); j++ {
			totalN = totalN + (i/int(math.Pow10(j)))%10
		}
		if totalN >= A && totalN <= B {
			sum = sum + i
		}
	}

	fmt.Print(sum)

}
