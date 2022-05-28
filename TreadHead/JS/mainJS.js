function toggleDark () {
    document.getElementById("darkJS").classList.toggle("dark");
}
let dark = document.getElementById("darkButton");
dark.onclick = toggleDark;

let darkButtonTF = document.body.hasAttribute("dark");

if (darkButtonTF = false) {
    document.getElementById("darkButton").setAttribute("class", "hideDarkIcon");
}

