document.getElementById("check").addEventListener("click", check);

function check() {
    let age = document.getElementById("age").value;
    if (age >= 15) {
        document.getElementById("result").innerHTML = ("Kết quả: Đủ tuổi học lớp 10");
    }
    else {
        document.getElementById("result").innerHTML = ("Kết quả: Không đủ tuổi học lớp 10");
    }
}