console.log("Hello from JavaScript!")
let name = "Hương";
let yearOfBirth = 2006;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name +  ", năm nay mình " + age + " tuổi.");
let score = 7.5;
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
   if (avg >=8){
    return "giỏi"
   }
   else if(avg >=6.5){
    return "khá"
   }
   else if(avg >=5){
    return "trung bình"
   }
   else{
    return "yếu"
   }
}
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
  if(age >= 18){
    console.log("đủ 18 tuổi");
  }
  else{
    console.log("chưa đủ 18 tuổi");
  }
}