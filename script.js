const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener('submit',(event) => {
    event.preventDefault();

    checkForm();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})


function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        //mostrar o aviso e mostrar a mensagem de erro...
        errorInput(username, "Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.classList = "form-content"
    }

}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if (passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    }else{
        const formItem = password.parentElement;
        formItem.className="form-content"
    }
}

function checkInputPasswordConfirmation(){
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    }else if (conformationPasswordValue.length !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className="form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItens = form.querySelectorAll(".form-content")

    const isValid = [...formItens].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("CADASTRADO COM SUCESSO!");
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}