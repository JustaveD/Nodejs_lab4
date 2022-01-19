const cartText = document.querySelector(".card-text");
const oldText = cartText.innerText;
const applyBtn = document.querySelector(".btn-apply");
const inputLength = document.querySelector("#length");

applyBtn.addEventListener("click", function () {
    const length = inputLength.value;

    const lengthOfText = cartText.innerText.length;
    if (inputLength.value == "") {
        return false;
    }
    if (length < lengthOfText) {
        cartText.innerText = oldText.substring(0, length) + "...";
    }
    else {
        cartText.innerText = oldText + ".";
    }
})