
document.getElementById('tinhtoan').addEventListener("click", kiemtra);

function kiemtra () {
    let numa = document.getElementById("numa").value;
    let numb = document.getElementById("numb").value;
    let check = numa % numb;
    if (check == 0) {
        document.getElementById('result').innerHTML = ("Kết quả: Số " + numa + " chia hết cho số " + numb);
    }
    else {
        document.getElementById('result').innerHTML = ("Kết quả: Số " + numa + " không chia hết cho số " + numb);
    }
}