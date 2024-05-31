const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    checkInputEmail();
    checkInputUsername();

})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha seu username !")
    } else {
        const formItem = username.parentElement;
        formItem.classList = "form_content"
    }
}


function checkInputEmail() {
    constemailValue = email.value;
    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form_content"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}