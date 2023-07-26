import Validation from './validation.js';
import GlobalMethods from './classMethods.js';

export function formSubmit() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const btn = document.querySelector('[data-btn]');
    const arrInput = [nameInput, emailInput, telInput];
    const application = document.querySelector('[data-application]');

    let validation = new Validation();
    let globalMethods = new GlobalMethods();

    function click(arrInput) {
        let validator = new Validation(arrInput);
        validator.main();
    }

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        click(arrInput);
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

        if(statusArrValid && validation.checkEmail(emailInput.value)) {
            console.log('true');
            application.classList.add('active');
        }

    });
}
