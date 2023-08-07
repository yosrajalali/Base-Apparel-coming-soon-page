const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const errorContainer = document.getElementById('error__container');

form.addEventListener('submit', (event) => {
    let errorMessages = [];

    if (emailInput.value.trim() === '') {
        errorMessages.push('Email address field is empty');
    } else if (!isValidEmail(emailInput.value)) {
        errorMessages.push('Please provide a valid email');
    }

    if (errorMessages.length > 0) {
        event.preventDefault();
        errorContainer.innerHTML = '';

        for (let errorMessage of errorMessages) {
            let errorElement = document.createElement('span');
            errorElement.innerText = errorMessage;
            errorElement.classList.add('error');
            errorContainer.appendChild(errorElement);
        }
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}