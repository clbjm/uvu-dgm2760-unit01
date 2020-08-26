
/*document.getElementById('company').innerHTML = "joe's bed and breakfast"
*/
document.querySelector('#company').innerText = "joe's bed and breakfast"

document.querySelector('header > h2').innerText = "best b&b in utah"

let userName = prompt("what is your name?")

let message = "hello " + userName + ", welcome to the best loging in utah!"

//let message = 'Hello ${userName}, welcome to the best logging in utah county'

document.querySelector('#greeting').innerText = message