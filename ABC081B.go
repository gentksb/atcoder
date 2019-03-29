package main

import (
	"fmt"
)

func main() {
	var N, tmp, counter int

	fmt.Scan(&N)

	array := []int{}
	for i := 0; i < N; i++ {
		fmt.Scan(&tmp)
		fmt.Print(tmp)
		array = append(array, tmp)
	}

	for { // 奇数があった場合カウントを出力して終了
		for i := 0; i < N; i++ {
			if array[i]%2 == 1 {
				fmt.Print(counter)
				return
			}
		}

		//すべて偶数なら、全項目を2で割ってカウンターを加算
		for i := 0; i < N; i++ {
			array[i] /= 2
		}
		counter++
	}
}
