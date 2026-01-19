const questions = [
  "เมื่ออยู่ในที่ที่ไม่คุ้นเคย คุณมักสังเกตสถานการณ์ก่อนลงมือทำ",
  "คุณชอบวางแผนล่วงหน้ามากกว่าทำตามสถานการณ์",
  "คุณตัดสินใจจากเหตุผลมากกว่าอารมณ์"
];

let index = 0;
let score = 0;

function startTest() {
  if (!document.getElementById("accept").checked) {
    alert("กรุณากดยอมรับก่อนเริ่ม");
    return;
  }
  document.getElementById("test").style.display = "block";
  showQuestion();
}

function showQuestion() {
  if (index < questions.length) {
    document.getElementById("question").innerText = questions[index];
  } else {
    document.getElementById("test").innerHTML =
      `<h2>คะแนนรวมของคุณ: ${score}</h2>`;
  }
}

function answer(value) {
  score += value;
  index++;
  showQuestion();
}
