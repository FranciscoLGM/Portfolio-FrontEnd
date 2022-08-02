const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value === "") {
        e.target.setCustomValidity("Debe ingresar un nombre de usuario Valido");
    } else if (password.value === "") {
        e.target.setCustomValidity("Debe ingresar una contraseña Valida");
    } else {
        e.target.setCustomValidity("");
    }
});
