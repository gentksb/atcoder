package main

import (
	"fmt"
	"strings"
)

func main() {
	var input string
	fmt.Scan(&input)
	fmt.Print(strings.Count(input, "1"))
}
