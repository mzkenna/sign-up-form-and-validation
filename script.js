const  form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const message = document.getElementById('message');
const messageContainer = document.querySelector('.message-container')



let isValid = false;
let passwordMatch= false;
function validateForm(){
    // Using Constraint API
    isValid = form.checkValidity()
    // style message  for an error
    if(!isValid){
        message.textContent=" Please complete all fields"
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red'
        return;
    }
    // Check if passowrd match

    if(password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green'
    }else{
        passwordMatch= false;
        message.textContent="Make Sure Password Match"
        message.style.color = 'red';
        messageContainer.style.color = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red'
        return;
    }
    // if form is valid and password match
    if(isValid && passwordMatch){
        message.textContent = "Successfully Registered!";
        message.style.color= 'green';
        messageContainer.style.borderColor = 'green'
    }
}

function storeFormData(){
    const user = {

        name : form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    // store  user data

    console.log(user)
}
function processFormData(e){
    e.preventDefault()
    
    // validate form
    validateForm()

    // submit user if valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}
form.addEventListener("submit", processFormData);