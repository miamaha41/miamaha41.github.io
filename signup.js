//localStorage.setItem("password", "123456")
// let username = localStorage.getItem("username");
// const btn = document.getElementById("button");
const form = document.getElementById("signupform");
// const login = document.getElementById("validateLogin");
// // btn.onclick =  ;
// let username = document.getElementById("username");
// let phone = document.getElementById("phone");
// let email = document.getElementById("email");
// Username không được trống, tối thiểu 5 ký tự, ko chứa ký tự đặc biệt
// Mật khẩu không được trống, tối thiểu 8 ký tự
// Mật khẩu nhập lại phải trùng
// Phone phải là những con số và 10 ký tự
// Email phải đúng định dạng, va không được để trống.

// Lấy giá trị của một input
function getValue(id) {
  return document.getElementById(id).value.trim();
}

// Hiển thị lỗi
function showError(key, mess) {
  document.getElementById(key + '_error').innerHTML = mess;
}
function validate() {
  let flag = true;

  // 1 username
  let username = getValue('username');
  if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)) {
    flag = false;
    showError('username', 'Vui lòng kiểm tra lại Username');
  }
  // else if(username == localStorage.getItem('username')) {
  //   flag = false;
  //   showError('username', 'Tài khoản này đã có người đăng kí ');
  // }
  else { showError('username', ''); }

  // 2. password
  let password = getValue('password');
  let repassword = getValue('repassword');
  if (password == '' || password.length < 8) {
    flag = false;
    showError('password', 'Vui lòng kiểm tra lại Password');
  } else { showError('password', ''); }
  if (password != repassword) {
    flag = false;
    showError('repassword', 'Mật khẩu nhập lại phải trùng khớp');
  } else { showError('repassword', ''); }
  // 3. Phone
  let phone = getValue('phone');
  if (phone == '' || !/^[0-9]{10}$/.test(phone)) {
    flag = false;
    showError('phone', 'Vui lòng kiểm tra lại Phone');
  } else { showError('phone', ''); }

  // 4. Email
  let email = getValue('email');
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!mailformat.test(email)) {
    flag = false;
    showError('email', 'Vui lòng kiểm tra lại Email');
  } else {
    showError('email', '');
  }

  return flag;
}

function signup() {
  validate();
  if (validate()) {
    let username = getValue('username');
    let password = getValue('password');
    if (username != localStorage.getItem(username)) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Đăng kí thành công");
      window.location.href = "./login.html";
    }
  }
  return validate();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
});
