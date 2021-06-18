const theForm = document.getElementById("cardform");
const lilogin = document.getElementById("lidangnhap");
const lisignup = document.getElementById("lidangky");
const  ul = document.getElementById("dn");
if(localStorage.getItem("index") == "1") { 
    lilogin.style.display = "none" ; 
    lisignup.style.display = "none" ;
    let li = document.createElement("li");
    let atag = document.createElement("a");
    let btn = document.createElement("button");
    btn.id = "dangxuat";
    // btn.setAttribute("style","");
    btn.innerHTML = "Đăng xuất";
    atag.appendChild(btn);
    li.appendChild(atag);
    ul.appendChild(li);
    btn.addEventListener("click",function (e){
        localStorage.setItem("index","0");
        btn.remove();
        location.href = "/";
    })
}else {
    lilogin.style.display = "inline" ; 
    lisignup.style.display = "inline" ;
}
function selectOnlyThis(id) {
    for (let i = 1;i <= 6; i++)
    {
        document.getElementById(i).checked = false;
        
    }
    document.getElementById(id).checked = true;
}
function laythe() {
const loaithe = document.getElementById("loaiThe").value.trim();
const mathe = document.getElementById("maThe").value.trim();
const serithe = document.getElementById("seriThe").value.trim();
let menhgia = "";
// if(loaithe == '' || mathe == ''  || serithe == ''){
//   alert("Vui lòng nhập đầy đủ thông tin thẻ");
// }else {
    for (let i = 1; i < 7; i++) {
        if(document.getElementById(i).checked == true){
            menhgia = document.getElementById(i).value.trim();
        }
    }
    localStorage.setItem("loaiThe",loaithe);
    localStorage.setItem("maThe",mathe);
    localStorage.setItem("seriThe",serithe);
    localStorage.setItem("menhGia",menhgia );
    alert("Thẻ đang được xử lí");
    location.href = "/";
// }
}
theForm.addEventListener("submit", (e)=>{
e.preventDefault();
laythe();
});
