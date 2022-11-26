function test(a, b, c = 1) {
    console.log(a + b + c)  //60
}
test(10, 20, 30)
test(10, 20)