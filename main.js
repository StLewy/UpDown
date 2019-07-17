// nawigacja
const navi = document.querySelector('nav');
const bar = document.querySelector('.fas');
bar.addEventListener('click', () => {
    navi.classList.toggle('show');
    navi.classList.remove('showDesc');

})
// scrool

$('li.aboutUs').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.about').offset().top
    }, 500)
})
$('li.usOffert').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.offert').offset().top
    }, 500)
})
$('li.usProjekt').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.project').offset().top
    }, 500)
})
$('li.contactToUs').on('click', function () {
    $('body,html').animate({
        scrollTop: $('.contact').offset().top
    }, 500)
})

const btnAbout = document.querySelector('.aboutUs');
const btnOffert = document.querySelector('.usOffert');
const btnProject = document.querySelector('.usProjekt');
const btnContact = document.querySelector('.contactToUs');
const liList = document.querySelectorAll('li');

btnAbout.addEventListener('click', () => {
    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('blue')
    }
    btnAbout.classList.add('blue')
    navi.classList.toggle('hidden');
    navi.classList.toggle('show');

})
btnOffert.addEventListener('click', () => {

    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('blue')
    };

    btnOffert.classList.add('blue');
    navi.classList.toggle('hidden');
    navi.classList.toggle('show');
})
btnProject.addEventListener('click', () => {
    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('blue')
    };
    btnProject.classList.add('blue');
    navi.classList.toggle('hidden');
    navi.classList.toggle('show');

})
btnContact.addEventListener('click', () => {

    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('blue')
    };
    btnContact.classList.add('blue');
    navi.classList.toggle('hidden');
    navi.classList.toggle('show');
})