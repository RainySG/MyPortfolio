const form = document.querySelector("form")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")

form.addEventListener("submit" , (a) => {
   a.preventDefault();
   card1.classList.add("hide")
    card2.classList.remove("hide")
})