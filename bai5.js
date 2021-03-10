document.getElementById("check").addEventListener("click", check);

function check() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let num3 = +document.getElementById("num3").value;
    let sum = num1 + num2 + num3;
    let noti = document.getElementById("result");
    if ((sum > 25) && (sum <= 30)) {
        noti.innerHTML = ("Xếp loại giỏi");
    } else {
        if ((sum > 15) && (sum <= 25)) {
            noti.innerHTML = ("Xếp loại khá");
        }
        else {
            noti.innerHTML = ("Xếp loại trung bình");
        }
    }
}