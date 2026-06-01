const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    temaBtn.textContent =
    document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

document
.getElementById("saibaMais")
.addEventListener("click", () => {

document
.getElementById("sobre")
.scrollIntoView({
behavior:"smooth"
});

});

function animarNumero(id, valor){

let numero = 0;

const elemento =
document.getElementById(id);

const incremento = valor / 100;

const timer = setInterval(() => {

numero += incremento;

if(numero >= valor){

numero = valor;

clearInterval(timer);

}

elemento.textContent =
Math.floor(numero).toLocaleString();

},20);

}

window.addEventListener("load", () => {

animarNumero("num1", 5000);
animarNumero("num2", 1200);
animarNumero("num3", 350);

});

const formulario =
document.getElementById("formulario");

const feedback =
document.getElementById("feedback");

formulario.addEventListener("submit", (e) => {

e.preventDefault();

const nome =
document.getElementById("nome").value.trim();

const email =
document.getElementById("email").value.trim();

const mensagem =
document.getElementById("mensagem").value.trim();

if(nome === "" || email === "" || mensagem === ""){

feedback.textContent =
"Preencha todos os campos.";

feedback.style.color = "red";

return;
}

feedback.textContent =
`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

feedback.style.color = "green";

formulario.reset();

});
