package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

var sc = bufio.NewScanner(os.Stdin)

func nextInt() int {
	sc.Scan()
	i, e := strconv.Atoi(sc.Text())
	if e != nil {
		panic(e)
	}
	return i
}

func main() {
	sc.Split(bufio.ScanWords)

	N := nextInt()
	cardArray := []int{}

	//スライスに2行目の各要素をappend
	for i := 0; i < N; i++ {
		cardArray = append(cardArray, nextInt())
	}
	// 1.8のメソッド…
	// sort.Slice(cardArray, func(i, j int) bool { return cardArray[i] > cardArray[j] })
	sort.Sort(sort.Reverse(sort.IntSlice(cardArray)))

	var AliceScore, BobScore int

	for currentTurnCount := 1; currentTurnCount <= N; currentTurnCount++ {
		if currentTurnCount%2 == 1 {
			AliceScore += cardArray[currentTurnCount-1]
		} else {
			BobScore += cardArray[currentTurnCount-1]
		}
	}

	fmt.Print(AliceScore - BobScore)
}
