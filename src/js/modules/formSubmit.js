import Validation from './validation.js'

export function formSubmit() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('tel');
    const btn = document.querySelector('[data-btn]');
    const arrInput = [nameInput, emailInput, telInput];

    function click(arrInput) {
        let validator = new Validation(arrInput);
        validator.main();
    }

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        click(arrInput);
    });
}

