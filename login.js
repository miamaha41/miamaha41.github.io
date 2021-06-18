const login = document.getElementById("loginform");

function logIn() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
        localStorage.setItem('index', '1');
        alert("Bạn đã đăng nhập thành công");
        location.href = "/";
    }else {alert("Bạn chưa đăng kí tài khoản này");}
}
login.addEventListener("submit", (e) => {
    e.preventDefault();
    logIn();
})

