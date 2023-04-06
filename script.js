function menuOption() {
    let menuIcon = document.querySelector('.menu-option a');
    let itens = document.querySelector('.navbar .itens');
    if (itens.style.display == 'none' || itens.style.display == '') {
        itens.style.display = 'block';
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';


    }
    else if (itens.style.display == 'block') {
        itens.style.display = 'none';
        menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';


    }

}