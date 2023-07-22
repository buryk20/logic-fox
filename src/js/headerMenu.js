export let headerMenu = function() {
    const headerWrp = document.querySelector('[data-header-wrp ]');

    if(headerWrp) {
        const btnMenu = headerWrp.querySelector('[data-btn-menu]');
        const menuList = headerWrp.querySelector('[data-menu-list-wrp]');

        console.log(menuList);

        btnMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            menuList.classList.toggle('active');
        })
    }
} 