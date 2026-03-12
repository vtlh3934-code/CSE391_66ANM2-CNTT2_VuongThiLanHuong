let students = [
{name:"Nguyễn An", score:8.5},
{name:"Trần Bình", score:6.5},
{name:"Nguyễn Nam", score:9},
{name:"Lê Hùng", score:4}
]

let filteredStudents = []

let sortAsc = true

function getRank(score){

if(score >= 8.5) return "Giỏi"
if(score >= 7) return "Khá"
if(score >= 5) return "Trung bình"
return "Yếu"

}

function applyFilters(){

let keyword =
document.getElementById("search").value.toLowerCase()

let rankFilter =
document.getElementById("filterRank").value

filteredStudents = students.filter(function(sv){

let matchName =
sv.name.toLowerCase().includes(keyword)

let rank = getRank(sv.score)

let matchRank =
rankFilter === "all" || rank === rankFilter

return matchName && matchRank

})

filteredStudents.sort(function(a,b){

return sortAsc
? a.score - b.score
: b.score - a.score

})

renderTable()

}

function renderTable(){

let tbody = document.getElementById("tableBody")
let noResult = document.getElementById("noResult")

tbody.innerHTML = ""

if(filteredStudents.length === 0){

noResult.textContent = "Không có kết quả"
return

}

noResult.textContent = ""

filteredStudents.forEach(function(sv,index){

let tr = document.createElement("tr")

if(sv.score < 5){
tr.classList.add("lowScore")
}

tr.innerHTML = `
<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${getRank(sv.score)}</td>
`

tbody.appendChild(tr)

})

}

document
.getElementById("search")
.addEventListener("input",applyFilters)

document
.getElementById("filterRank")
.addEventListener("change",applyFilters)

document
.getElementById("scoreHeader")
.addEventListener("click",function(){

sortAsc = !sortAsc

this.textContent =
sortAsc ? "Điểm ▲" : "Điểm ▼"

applyFilters()

})

applyFilters()