const validateUsername = (username) => {
}

const validateEmail = (email) => {
}

const validatePassword = (password) => {
}

const subbtn = document.getElementById("submit-btn");
subbtn.addEventListener('click', () => {
    const inputUsername = document.getElementById('Username');
    const inputEmail = document.getElementById('Email');
    const inputPassword = document.getElementById('Password');
    const errorElement = document.querySelector('#formValidator .valid');

    const usernameValue = inputUsername.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)\S*$/;
    const isUsernameValid = regex.test(usernameValue);

    const emailValue = inputEmail.value
    const emailRegex = /@.*\.com$/;
    const isEmailValid = emailRegex.test(emailValue);

    const passwordValue = inputPassword.value;
    const passwordRegex = /(?=.*\d)/
    const isPasswordValid = passwordRegex.test(passwordValue);

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

        storedUsers[usernameValue] = {
            email: emailValue,
            password: passwordValue
        };

        localStorage.setItem('user' , JSON.stringify(storedUsers));
        showSuccess("Successfully!");
    } else {
        Validation(isUsernameValid, isEmailValid, isPasswordValid, errorElement);
    }
});
function Validation(isUsernameValid, isEmailValid, isPasswordValid, errorElement) {
    if (!isUsernameValid) {
        showError("Username is Invalid. Make sure to contain uppercase, number, and not special character", errorElement);
        return;
    }
    if (!isEmailValid) {
        showError("This is not a Email format!!! Contain @ and .com", errorElement);
        return;
    }
    if (!isPasswordValid) {
        showError("Password is Invalid. Make sure to contain uppercase, lowercase, number and special character", errorElement);
        return;
    }
    errorElement.textContent = "";
}
function showSuccess(successMessage) {
    const successElement = document.querySelector('#formValidator .valid');
    successElement.textContent = successMessage;
}

function showError(errorMessage, errorElement) {
    errorElement.textContent = errorMessage;
}

export { validateEmail, validatePassword, validateUsername }
