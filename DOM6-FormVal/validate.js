function validateForm() {
    let email = document.getElementById('emailId').value;
    let password = document.getElementById('password').value
    if (email == "") {
        document.getElementById('emailMessage').innerHTML = "Please Enter Email Id"
    }
    if (password == "" || password.length > 4) {
        document.getElementById('passwordMessage').innerHTML = "Please Enter Proper Password Id"
    }
    return false
}