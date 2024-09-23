// login code
function gogle() {
    window.open("https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1", "_blank");
}
var logn = document.getElementById("login")
var sign = document.getElementById("sign")
var title = document.getElementById("titl")
function sumit(){
    alert("Succesfully logged!");
    logn.style.display = "none";
    window.location.href="../index.html";

}
function signed(){
    alert("Succesfully signed!");
    sign.style.display = "none";
    window.location.href="../index.html";
}