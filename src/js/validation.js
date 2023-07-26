export default class Validation
{
    // status = false;

    constructor(arrInput) {
        this.arrInput = arrInput;
        this.status = false;
        // this.arrSat = [];
    }

    main() {
        // let status = false;
        this.getParam(this.arrInput);
        this.checkEmptiness(this.arrInput);

    }

    getParam(params) {
    }

    checkEmptiness(arrInput) {
        let arrNew = [];

        arrInput.forEach(element => {
            if (element.value != '' && element.value != '+38(___)___-__-__') {
                arrNew.push(true);
            } else {
                arrNew.push(false);
            }
        });

        return arrNew;
    }

    checkEmail(email) {

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email.trim());
    }
}