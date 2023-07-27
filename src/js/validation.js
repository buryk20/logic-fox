export default class Validation
{

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

    checkPhone(phone) {
        if(phone.includes('_')) {
            return false;
        } else {
            return true;
        }
    }

    checkCheckbox(checkbox) {
        let status = checkbox.checked;
        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
                status = true;
            } else {
                status =  false;
            }
        });
        return status;
    }
}