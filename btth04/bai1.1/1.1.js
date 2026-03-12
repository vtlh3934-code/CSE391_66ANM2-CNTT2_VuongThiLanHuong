let students = []

function getRank(score){

if(score >= 8.5) return "Giỏi"
if(score >= 7) return "Khá"
if(score >= 5) return "Trung bình"

return "Yếu"

}

function renderTable(){

let tbody = document.getElementById("tableBody")
tbody.innerHTML = ""

let total = 0

students.forEach(function(sv,index){

total += sv.score

let tr = document.createElement("tr")

if(sv.score < 5){
tr.classList.add("lowScore")
}

tr.innerHTML = `
<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${getRank(sv.score)}</td>
<td>
<button class="deleteBtn" data-index="${index}">Xóa</button>
</td>
`

tbody.appendChild(tr)

})

let avg = students.length ? (total/students.length).toFixed(2) : 0

document.getElementById("stats").textContent =
"Tổng sinh viên: " + students.length + " | Điểm trung bình: " + avg

}

function addStudent(){

let nameInput = document.getElementById("name")
let scoreInput = document.getElementById("score")

let name = nameInput.value.trim()
let score = parseFloat(scoreInput.value)

if(name === ""){
alert("Họ tên không được để trống")
return
}

if(isNaN(score) || score < 0 || score > 10){
alert("Điểm phải từ 0 đến 10")
return
}

students.push({
name:name,
score:score
})

renderTable()

nameInput.value = ""
scoreInput.value = ""

nameInput.focus()

}

document.getElementById("addBtn").addEventListener("click",addStudent)

document.getElementById("score").addEventListener("keyup",function(e){

if(e.key === "Enter"){
addStudent()
}

})

document.getElementById("tableBody").addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

let index = e.target.getAttribute("data-index")

students.splice(index,1)

renderTable()

}

})