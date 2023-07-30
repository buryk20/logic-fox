export let headerMenu = function() {
    const headerWrp = document.querySelector('[data-header-wrp ]');

    if(headerWrp) {
        const btnMenu = headerWrp.querySelector('[data-btn-menu]');
        const menuList = headerWrp.querySelector('[data-menu-list-wrp]');
        const btnBaclCall = document.querySelector('[data-btn-back-call]');
        console.log(btnBaclCall);

        btnMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            menuList.classList.toggle('active');
        });

        btnBaclCall.addEventListener('click', () => {
            menuList.classList.remove('active');
            btnMenu.classList.remove('active');
        })
    }
}