//const pw-container = document.getElementById("pw-container")
const input = document.getElementById("password")
const copy = document.getElementById("copy")
const pwSubmit = document.getElementById("#submit")
// const charMax = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&*()_+-~"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const nums = "0123456789"
const symbols = "!@#$%^&*()_+-~><?=-"
const allSym = upperCase + lowerCase + nums + symbols
const PWlength = 16

function createPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += nums[Math.floor(Math.random() * nums.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    while(PWlength > password.length){
        password += allSym[Math.floor(Math.random() * allSym.length)]
    }
    input.value = password
}




input.addEventListener('click', () => {
    let msg = navigator.clipboard.writeText(input.value)
    // let newPW = input.value
    window.alert = function(msg, timeout=null) {
        const alert = document.createElement('div')
        const alertButton = document.createElement('button')
        alert.classList.add('alert')
        alert.append(alertButton)
        alertButton.innerHTML="Ok"
        alert.setAttribute('style', `
            position: fixed;
            top: 100px;
            left: 40%;
            padding:20px;
            border-radius: 10px;
            box-shadow: 0 10px 5px 0 #000022;
        `)
        // alert.innerHTML = `<span><br/>${msg}</span>`
        document.body.appendChild(alert)
        alert("Copied the text: " + msg + alertButton)
        
        alertButton.addEventListener('click', (e) => {
            alert.remove()
        })
    }
});





// YouTube source = https://youtu.be/Xrsb9SiF3a8?si=D-tjfksn3REhUI-g
// pwSubmit.addEventListener("click", function(){
//     e.preventDefault()
//     createPassword()
    
// })