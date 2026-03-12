const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^0[0-9]{9}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/

function showError(id,message){

let input = document.getElementById(id)
let error = document.getElementById(id+"Error")

error.textContent = message

input.classList.add("error-border")
input.classList.remove("success-border")

}

function clearError(id){

let input = document.getElementById(id)
let error = document.getElementById(id+"Error")

error.textContent = ""

input.classList.remove("error-border")
input.classList.add("success-border")

}

function validateFullname(){

let name = document.getElementById("fullname").value.trim()

if(name === ""){
showError("fullname","Không được để trống")
return false
}

if(name.length < 3){
showError("fullname","Ít nhất 3 ký tự")
return false
}

if(!nameRegex.test(name)){
showError("fullname","Chỉ được chứa chữ")
return false
}

clearError("fullname")
return true

}

function validateEmail(){

let email = document.getElementById("email").value.trim()

if(email === ""){
showError("email","Email không được trống")
return false
}

if(!emailRegex.test(email)){
showError("email","Email không hợp lệ")
return false
}

clearError("email")
return true

}

function validatePhone(){

let phone = document.getElementById("phone").value.trim()

if(!phoneRegex.test(phone)){
showError("phone","SĐT phải 10 số bắt đầu bằng 0")
return false
}

clearError("phone")
return true

}

function validatePassword(){

let pass = document.getElementById("password").value

if(!passwordRegex.test(pass)){
showError("password","≥8 ký tự, có hoa, thường, số")
return false
}

clearError("password")
return true

}

function validateConfirm(){

let pass = document.getElementById("password").value
let confirm = document.getElementById("confirmPassword").value

if(confirm !== pass){
showError("confirmPassword","Mật khẩu không khớp")
return false
}

clearError("confirmPassword")
return true

}

function validateGender(){

let gender = document.querySelector("input[name='gender']:checked")

if(!gender){

document.getElementById("genderError").textContent = "Chọn giới tính"
return false

}

document.getElementById("genderError").textContent = ""
return true

}

function validateTerms(){

let terms = document.getElementById("terms")

if(!terms.checked){

document.getElementById("termsError").textContent="Phải đồng ý điều khoản"
return false

}

document.getElementById("termsError").textContent=""
return true

}

document.getElementById("fullname").addEventListener("blur",validateFullname)
document.getElementById("email").addEventListener("blur",validateEmail)
document.getElementById("phone").addEventListener("blur",validatePhone)
document.getElementById("password").addEventListener("blur",validatePassword)
document.getElementById("confirmPassword").addEventListener("blur",validateConfirm)

document.querySelectorAll("input").forEach(function(el){

el.addEventListener("input",function(){

let error = document.getElementById(this.id+"Error")

if(error){
error.textContent=""
this.classList.remove("error-border")
}

})

})

document.getElementById("registerForm").addEventListener("submit",function(e){

e.preventDefault()

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateTerms()

if(valid){

document.getElementById("registerForm").style.display="none"

let name = document.getElementById("fullname").value

document.getElementById("success").textContent =
"Đăng ký thành công! 🎉 Xin chào "+name

}

})