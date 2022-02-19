//document replace 
const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string replace
const HIDDEN_CLASS = "hidden";
const USERNAME = "username";

function paintGreetings()
{
    const username = logInInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}
//submit 
function handleLoginOnSubmit(info){
    info.preventDefault();
    logInForm.classList.add(HIDDEN_CLASS);
    //Setting user id on browser
    localStorage.setItem(USERNAME, logInInput.value);
    paintGreetings();
}
//display greeting

logInForm.addEventListener("submit",handleLoginOnSubmit);

const SaveUserName = localStorage.getItem(USERNAME);

if(SaveUserName === null){
    //show the input form
    logInForm.classList.remove(HIDDEN_CLASS);
    logInForm.addEventListener("submit",handleLoginOnSubmit);
}
else{
    //show greeting
    paintGreetings(SaveUserName);
}