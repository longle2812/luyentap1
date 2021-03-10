document.getElementById("check").addEventListener("click", check);
function check () {
    let call = +document.getElementById("call").value;
    let sms = +document.getElementById("sms").value;
    sum = (call * 5000) + (sms * 250);
    document.getElementById("result").innerHTML = ("Cước phí là " +sum+ " VNĐ");
}