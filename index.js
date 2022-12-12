const ratings = document.querySelector(".container-1_rating");
const optionSelectedClass = "rating__option--selected";
const ratingOptions = [];
let value;

/* Add options for rating control */
for (let i = 1; i <= 5; i++) {
    const ratingOption = document.createElement("div");
    const optionNum = document.createTextNode(i);
    // 
    ratingOption.setAttribute("value", i);
    ratingOption.appendChild(optionNum);
    ratingOption.classList.add("rating__option");
    ratingOption.addEventListener("click", handleOptionClick);

    ratings.appendChild(ratingOption);
}
const submit_btn = document.querySelector(".container-1__button");

submit_btn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    if (!value) return;

    const card1 = document.querySelector(".container-1");
    card1.style.cssText = "display: none;";

    const card2 = document.querySelector(".container-2");
    card2.style.cssText = "display: flex";

    const ratingFeedback = document.querySelector(".header-2_text");
    const answer = document.createTextNode(`You selected ${value} out of 5`);
    ratingFeedback.innerHTML = "";
    ratingFeedback.appendChild(answer);
}

function handleOptionClick(e) {
    const option = e.target;
    value = option.getAttribute("value");
    removeSelectedOption();

    option.classList.add(optionSelectedClass);
}

function removeSelectedOption() {
    const ratingOptions = document.querySelector(".container-1_rating").children;

    for (let option of ratingOptions) {
        option.classList.remove(optionSelectedClass);
    }
}