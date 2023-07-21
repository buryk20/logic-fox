class Validation
{
    // status = false;

    constructor(arrInput) {
        this.arrInput = arrInput;
        this.status = false;
        this.arrSat = [];
    }

    main() {
        // let status = false;
        this.getParam(this.arrInput);
        this.checkEmptiness(this.arrInput);

    }

    getParam(params) {
    }

    checkEmptiness(arrInput) {
        console.log(this.arrSat);

        arrInput.forEach(element => {
            if (element.value != '') {
                this.arrSat.push(true);
            } else {
                this.arrSat.push(false);
            }
        });

        console.log(this.arrSat);
    }
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const btn = document.querySelector('[data-btn]');
const arrInput = [nameInput, emailInput, telInput];



function click(arrInput) {
    let validation = new Validation(arrInput);
    validation.main();
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    click(arrInput);
});

