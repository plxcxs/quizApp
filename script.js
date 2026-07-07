let form = Array.from(document.querySelectorAll(".form"));
let checked = Array.from(document.querySelectorAll(".marked"));
let unchecked = Array.from(document.querySelector(".addBookmark"));

unchecked.forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.add("hidden");
    });
});

form.forEach((element) => {
    element.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});
