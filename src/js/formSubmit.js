import Validation from './validation.js';
import GlobalMethods from './classMethods.js';

export function formSubmit() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const btn = document.querySelector('[data-btn]');
    const arrInput = [nameInput, emailInput, telInput];
    const application = document.querySelector('[data-application]');
    const labelArr = document.querySelectorAll('[data-label]');
    const checkboxMainForm = document.querySelector('[data-checkbox-main-form]');
    const btnClose = document.querySelector('[data-btn-close]');

    const token = "6494850464:AAHI3FqHzM4xZlqy-RajUNgxsT7VHKJh3Bg";
    const chatId = "-1001848961736";

    let validation = new Validation();
    let globalMethods = new GlobalMethods();

    checkboxMainForm.checked = true;

    globalMethods.animationInputs(arrInput, labelArr);

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        let statusArrValid = validation.checkEmptiness(arrInput);
        globalMethods.delClassArr(arrInput, 'error');
        statusArrValid.forEach((el, index) => {
            if(el === false) {
                arrInput[index].classList.add('error');
            }
        });
        if (!validation.checkEmail(emailInput.value)) {
            emailInput.classList.add('error');
        }
        if (!validation.checkPhone(telInput.value)) {
            telInput.classList.add('error');
        }

        if(statusArrValid && validation.checkEmail(emailInput.value) && validation.checkCheckbox(checkboxMainForm) && validation.checkPhone(telInput.value)) {
            application.classList.add('active');

            globalMethods.telegramMessege(token, chatId, nameInput.value, emailInput.value, telInput.value, 'LogicFox');

            window.setTimeout(() => application.classList.remove('active'), 3000);
        }
    });

    btnClose.addEventListener('click', () => {
        application.classList.remove('active');
    })
}
