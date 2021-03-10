document.getElementById("check").addEventListener("click", check);

function check () {
    let number = document.getElementById("number").value;
    if(number > 0) {
        document.getElementById("result").innerHTML = ("Số " +number+ " lớn hơn 0");
    }
    else
        document.getElementById("result").innerHTML = ("Số " +number+ " nhỏ hơn 0");
}