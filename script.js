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
let index = 2;
function skillsLogos(){
    let img = document.querySelector('.img-box img');
    img.src = `./imagens/0${index}.jpg`;
    index < 9 ? index +=1 : index =1;
    
    
}setInterval(skillsLogos, 3000)

function left(){
    let img = document.querySelector('.img-box img');
    index > 1 ? img.src = `./imagens/0${index -=1}.jpg` : img.src = `./imagens/0${index =9}.jpg`;
    console.log(index -1)
}

function right(){
    let img = document.querySelector('.img-box img');
    index < 9 ? img.src = `./imagens/0${index +=1}.jpg` : img.src = `./imagens/0${index =1}.jpg`;
    console.log(index -1)
}