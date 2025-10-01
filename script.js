const body = document.body;
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

body.onload = function () {
    //pegar o modo salvo no localStorage, antes verificar se tem um modo salvo
    const mode = localStorage.getItem("mode");

    //verificar
    if (mode) {
        body.className = mode;
        return;
    }

    localStorage.setItem("mode", "light");


    lightBtn.onclick = function () {
        body.className = "light";
        localStorage.setItem("mode", "light");
    }

    darkBtn.onclick = function () {
        body.className = "dark";
        localStorage.setItem("mode", "dark");
    }
}