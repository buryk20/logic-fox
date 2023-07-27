export default class GlobalMethods
{
    delClassArr(arr, className) {
        arr.forEach(el => {
            el.classList.remove(className)
        });
    }

    animationInputs(inputArr, labelArr) {
        inputArr.forEach((el, index) => {
            el.addEventListener('click', function() {
                labelArr[index].classList.add('active');
            });
            el.addEventListener('blur', () => {
                if(inputArr[index].value === '') {
                    labelArr[index].classList.remove('active');
                }
            });
        });
    }

    telegramMessege (token, chatId, name, email, phone, nameSite) {
        let currentTime = new Date();
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Новое сообщение из контактной формы на сайте ${nameSite}. \n Имя: ${name} \n Email: ${email} \n Телефон: ${phone}  \n Время: ${currentTime}`
            })
        }).then(res => {
            if (!res.ok) {
                throw new Error(`Failed to send message: ${res.status} ${res.statusText}`);
            }
            console.log('Message sent successfully!');
        })
        .catch(err => {
            console.error(err);
        });
    }
}