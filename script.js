const input = document.querySelector(".input input");
const btn = document.querySelector(".input button");
const result = document.querySelector(".result");
let searchedInput;

btn.addEventListener("click", () => {
    let reverseInput = searchedInput.split("").reverse().join("");

    result.style.display = "block"

    if(searchedInput != reverseInput) {
        return result.innerHTML = `No, <span>'${input.value}'</span> isn't a palindrome!`;
    }
    result.innerHTML = `Yes, <span>'${input.value}'</span> is a palindrome!`;

});

input.addEventListener("keyup", () => {
    searchedInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(searchedInput) {
        return btn.classList.add("active");
    }
    result.style.display = "none";
    btn.classList.remove("active");
});