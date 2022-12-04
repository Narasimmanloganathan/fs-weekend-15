function mouseOverEx() {
    document.getElementById('abc').style.background = "yellow"
}

function focusEx() {
    document.getElementById('focusEx').style.background = "red"
}
function blurEx() {
    let name = document.getElementById('blurex').value;
    //document.getElementById('blurex').value = name.toUpperCase()
    document.getElementById('blurex').value = "GM"
    console.log(name)
}   