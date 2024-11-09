const $subscribeBtn = document.getElementById('newsletter__submit');
const $errorMsg = document.getElementById('error-message');
const $form = document.querySelector('.newsletter-subscribe__form');
const $component = document.querySelector('.newsletter-subscribe');
const $emailInput = document.getElementById('email');
const $dialogSuccess = document.getElementById('success-dialog');
const $userEmailMessage = document.querySelector('.user-email');
const $dialogDismiss = document.querySelector('.dialog__dismiss-btn');

const validateEmail = (email) => {
    const isEmailValid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return isEmailValid.exec(email);
}

const showErrorMessage = () => {
    $emailInput.classList.add('newsletter-subscribe__input--error');
    $errorMsg.style.display = 'block';
    $errorMsg.textContent = `Valid email required`;
    $emailInput.value = '';
};

const showSuccessMessage = () => {
    $emailInput.classList.remove('newsletter-subscribe__input--error');
    $errorMsg.style.display = 'none';
    $errorMsg.textContent = '';

    $component.classList.add('hidden');
    $dialogSuccess.classList.remove('dialog__hidden');
    $userEmailMessage.textContent = `${$emailInput.value}`;
};

$form.addEventListener('click', (e) => {
    if (e.target.id === 'newsletter__submit') {
        e.preventDefault();
        !validateEmail($emailInput.value) ? showErrorMessage() : showSuccessMessage();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'dialog__dismiss-btn') {
        $component.classList.remove('hidden');
        $dialogSuccess.classList.add('dialog__hidden');
        $emailInput.value = '';
    }
});