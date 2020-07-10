const mqDark = window.matchMedia("(prefers-color-scheme: dark)")

const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")

const bodyTag = document.querySelector("body")


darkModeToggle.addEventListener("click", function() {
    bodyTag.classList.toggle("dark-mode")
})



const updateDarkMode = function() {
    if (mqDark.matches) {
    darkModeToggleText.innerHTML = "Light mode"
 } else {
    darkModeToggleText.innerHTML = "Dark mode"
 }
}

updateDarkMode()
mqDark.addListener(function() {
    updateDarkMode()
})

