const btnSubmit = document.querySelector("#btn-submit");
const password = document.querySelector(".password");
const message = document.querySelector(".mes");
const email = document.querySelector(".email");

btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = email.value;
    if (!emailValue.match(emailPattern)) {
        message.innerText = "Email không hợp lệ!";
    } else {
        if (password.value.length < 8) {
            message.innerText = "Mật khẩu phải có ít nhất 8 ký tự!";
        }
        else {
            message.innerText = "Đăng ký thành công!";
            message.classList.add("suc");
        }
    }
})