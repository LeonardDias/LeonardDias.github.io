let nomeCompleto = document.querySelector("#nome");
let emailCompleto = document.querySelector("#email");
let telefoneCompleto = document.querySelector("#telefone");
let mensagemCompleta = document.querySelector("#mensagem");

let formularioValidado = document.getElementById("formulario");
formularioValidado.addEventListener("submit", function(enviar) {
    enviar.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    let eValido = true;
    resetarErros();

    if (nomeCompleto.value === "") {
        eValido = false;
        mostrarErro(nomeCompleto, "erroNome", "O campo é obrigatório");
    } else {
        mostrarSucesso(nomeCompleto);
    }

    if (emailCompleto.value === "") {
        eValido = false;
        mostrarErro(emailCompleto, "erroEmail", "O campo é obrigatório");
    } else {
        mostrarSucesso(emailCompleto);
    }

    if (telefoneCompleto.value === "") {
        eValido = false;
        mostrarErro(telefoneCompleto, "erroTelefone", "O campo é obrigatório");
    } else {
        mostrarSucesso(telefoneCompleto);
    }

    if (mensagemCompleta.value === "") {
        eValido = false;
        mostrarErro(mensagemCompleta, "erroMensagem", "O campo é obrigatório");
    } else {
        mostrarSucesso(mensagemCompleta);
    }

    if (eValido) {
        alert("Formulário enviado com Sucesso!");
        formularioValidado.reset();
        resetarErros();
    }
}

function mostrarErro(campo, idErro, mensagem) {
    campo.classList.add("bordaerro");
    let erro = document.getElementById(idErro);
    if (erro) {
        erro.textContent = mensagem;
        erro.style.display = "block";
    }
}

function mostrarSucesso(campo) {
    campo.classList.add("bordaok");
}

function resetarErros() {
    let campos = [nomeCompleto, emailCompleto, telefoneCompleto, mensagemCompleta];
    let idsErro = ["erroNome", "erroEmail", "erroTelefone", "erroMensagem"];

    campos.forEach(campo => {
        campo.classList.remove("bordaerro", "bordaok");
    });

    idsErro.forEach(id => {
        let erro = document.getElementById(id);
        if (erro) {
            erro.textContent = "";
            erro.style.display = "none";
        }
    });
}


