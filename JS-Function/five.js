function test(a, b = 1, c = 2, d = 3) {
    console.log(a + b + c + d)  //16
    console.log(a + b + c + d)  //35
    console.log(a + b + c + d)

}
test(10)
test(10, 20)
test(10, 20, 30)
test(10, 20, 30, 40)