const bcrypt = require('bcrypt')
let user = {
    user_Name: "Nagaraj",
    email: "nagaraj@gmail.com",
    password: 'ILoveInida',
    cc: '4444555566667777',
    cv: '123'
}
console.log(user)
let salt = bcrypt.genSaltSync(10)
let new_Password = bcrypt.hashSync(user.password, salt);
let new_CC = bcrypt.hashSync(user.cc, salt)

user = { ...user, password: new_Password, cc: new_CC }
console.log(user)