const input = document.querySelector("#input");
const res = document.querySelector("#res");
const convertBtn = document.querySelector(".convertBtn")

input.addEventListener("keyup", () => {
    let value = input.value;

    res.value = value;
})

convertBtn.addEventListener("click", () => {

    let value = input.value;


    let pattern = new RegExp(/[\s\W]/, "gi")
    value = value.replace(pattern, " ");
    value = value.trim();

    let arr = value.split(" ");
    let resArr = arr.map(e => {
        return e.charAt(0).toUpperCase() + e.substring(1);
    })

    resArr[0] = resArr[0].charAt(0).toLowerCase() + resArr[0].substring(1);

    value = resArr.join("");

    res.value = value;
})
