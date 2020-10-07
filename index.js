function navlistOpen() {
    const nav = document.querySelector('.navlinks');
    const open = document.querySelector('.open');


    open.addEventListener('click', function () {
        nav.classList.toggle('navlinksActive')
    })

}
navlistOpen()