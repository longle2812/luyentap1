document.getElementById("check").addEventListener("click", check);
function check() {
    let num = +document.getElementById("num").value;
    let noti = document.getElementById("result");
    if ((num <= 10000) && (num > 5000)) {
        noti.innerHTML = ("Hoa hồng là 6%");
    }
    else {
        if ((num <= 5000) && (num > 2000)) {
            noti.innerHTML = ("Hoa hồng là 3%");
        }
        else {
            noti.innerHTML = ("Hoa hồng là 1%");
        }
    }
}