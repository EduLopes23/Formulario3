const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const usernameValue = username.value 
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmatioValue = passwordConfirmation.value

    if (usernameValue === "") {
        setErrorFor(username, "Nome de usuário obrigatório");
    } else {
        setSucessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, 'Email obrigatório.');
    } else if (!validateEmail (emailValue)) {
        setErrorFor(email, "Insira um e-mail válido.");
    } else {
        setSucessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "Senha obrigatória!");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "Senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSucessFor(password);
    }

    if (passwordConfirmatioValue === ""){
        setErrorFor(passwordConfirmatioValue, "Confirmação de senha obrigatória!");
    } else if (passwordConfirmatioValue != passwordValue) {
        setErrorFor (passwordConfirmation, "Senhas diferentes!");
    } else {
        setSucessFor(passwordConfirmation);
    }

    const formConstrols = form.querySelectorAll('.form-control');

    const formIsValid = [...formConstrols].every((formControl)=> {
        return formControl.className === "form-control sucess";
    })

    if (formIsValid) {
        console.log("Formulário válido");
    }
}

function setErrorFor(input, message){
    const formControl= input.parentElement;
    const small = formControl.querySelector('small');

    //Adicionar mensagem de erro
    small.innerText = message;

    //Adicionar a classe de erro
    formControl.className = "form-control error";
}

function setSucessFor(input) {
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className = "form-control sucess";
}

function validateEmail (email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}