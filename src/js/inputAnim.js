export let inputAnim = function() {
    const form = document.querySelector('[data-form]');

    if(form) {
        const labelArr = form.querySelectorAll('[data-label]');
        const inputArr = form.querySelectorAll('[data-input]');

        inputArr.forEach((el, index) => {
            el.addEventListener('click', function() {
                labelArr[index].classList.add('active');
            })
            el.addEventListener('blur', () => {
                if(inputArr[index].value === '') {
                    labelArr[index].classList.remove('active');
                }
            })
        });
    }
}