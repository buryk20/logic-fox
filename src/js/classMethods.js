export default class GlobalMethods
{
    delClassArr(arr, className) {
        arr.forEach(el => {
            el.classList.remove(className)
        });
    }
}