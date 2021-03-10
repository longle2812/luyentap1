document.getElementById("check").addEventListener("click", check);

function check () {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let noti = document.getElementById("result");
    if ((num1 > num2) && (num1 > num3)) {
        noti.innerHTML = noti.innerText+ " " + num1;
    }
    else {
        if (num2 > num3) {
            noti.innerHTML = noti.innerText+ " " + num2;
        }
        else {
            noti.innerHTML = noti.innerText+ " " + num3;
        }
    }
}