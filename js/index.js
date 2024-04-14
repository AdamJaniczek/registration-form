// Set a Cookie
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function register() {
    setCookie('registered', true, 30);
    changeRegistrationForm();
}

function changeRegistrationForm() {
    let registrationForm = document.getElementById("registration-form");
    registrationForm.innerHTML = "Dziękuje za rejestracje";
}