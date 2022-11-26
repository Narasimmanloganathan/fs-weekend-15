let user = {
    id: 101,
    name: "Rahul",
    email: "rahul@gmail.com"
}
console.log(user.sal);//undefined
user.name = "Rahul Gandhi"
console.log(user)
delete user.email
console.log(user)
