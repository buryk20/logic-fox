import IMask from 'imask';
export let maskPhone = function() {
    var element = document.getElementById('tel');
    var maskOptions = {
        mask: '+38(000)000-00-00',
        lazy: false
    }
    var mask = new IMask(element, maskOptions);
}