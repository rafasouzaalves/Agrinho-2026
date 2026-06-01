// Mensagem principal

document
.getElementById("btnMensagem")
.addEventListener("click", () => {

    alert(
        "A sustentabilidade garante um futuro melhor para todos!"
    );

});

// Contador animado

let numero = 0;

const contador =
document.getElementById("contadorNumero");

const intervalo = setInterval(() => {

    numero += 10;

    contador.textContent = numero;

    if(numero >= 1000){
        clearInterval(intervalo);
    }

}, 20);

// Quiz

function respostaCorreta(){

    document.getElementById("resultado")
    .innerHTML =
    "✅ Correto! A rotação de culturas preserva o solo.";

}

function respostaErrada(){

    document.getElementById("resultado")
    .innerHTML =
    "❌ Errado! O desmatamento prejudica o meio ambiente.";

}

// Formulário

document
.getElementById("formulario")
.addEventListener("submit", (e)=>{

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const email =
    document.getElementById("email").value;

    if(nome === "" || email === ""){

        document.getElementById(
            "mensagemFormulario"
        ).innerHTML =
        "⚠️ Preencha todos os campos.";

        return;
    }

    document.getElementById(
        "mensagemFormulario"
    ).innerHTML =
    "✅ Mensagem enviada com sucesso!";
});
