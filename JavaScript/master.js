let burgerBtn = document.querySelector(".burger-icon")

console.log(burgerBtn)

burgerBtn.onclick = () => {
    document.querySelector(".links").classList.toggle("open")
}