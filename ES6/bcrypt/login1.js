const bcrypt = require('bcrypt')
let user = {
    user_Name: "Nagaraj",
    email: "nagaraj@gmail.com",
    password: 'ILoveInida',
    cc: '4444555566667777',
    cv: '123'
}
let salt = bcrypt.genSaltSync(10)
let new_Password = bcrypt.hashSync(user.password, salt);
let new_CC = bcrypt.hashSync(user.cc, salt)
/*
console.log(user.password)
console.log(new_Password)
console.log(user.cc)
console.log(new_CC) */