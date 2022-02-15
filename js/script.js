const swiper = new Swiper('.swiper_1', {
    direction: 'horizontal',
    loop: true,
    loopedSlides: 2.3,
    navigation: {
        nextEl: '.arrow',
        prevEl: '.arrow_1',
    },
    centeredSlides: true,
    slidesPerView: 2.3,

    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2.3,
        }
    }

});
const swiperSecond = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    centeredSlides: true,

});
const swiperThird = new Swiper('.swiper_2', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.arrow',
        prevEl: '.arrow_1',
    },
    pagination: {
        el: '.swiper-pagination_1',
        clickable: true,
    },


});
//burgerMenu
const iconMenu = document.querySelector(".nav__burger");
const menuBody = document.querySelector('.menu');
const hiddenButton = document.querySelector('.nav__button');
const phoneNumber = document.querySelector('.nav__phone');
const networks = document.querySelector('.nav__networks');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        hiddenButton.classList.toggle('_active');
        phoneNumber.classList.toggle('_active');
        networks.classList.toggle('_active');
    });
}
//scroll
const menuScroll = document.querySelectorAll('.menu__link[data-goto], .footer-navigation__link[data-goto], .button-suggestion[data-goto]');
if (menuScroll.length > 0) {
    menuScroll.forEach(menuLink => {
        menuLink.addEventListener("click", menuClick);
    });

    function menuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                hiddenButton.classList.remove('_active');
                networks.classList.remove('_active');
                phoneNumber.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }
}
//pop-ups
const popup = document.querySelectorAll('.pop-up');
const popupOpener = document.querySelector('.presents-opener');
const popupClose = document.querySelectorAll('.pop-up__close');
const popupOpenerSecond = document.querySelector('.link-partner');
if (popupOpener) {
    popupOpener.addEventListener('click', function(e) {
        e.preventDefault();
        popup[0].classList.add('_active');
        document.body.classList.add('_lock');
        if (iconMenu.classList.contains('_active')) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            hiddenButton.classList.remove('_active');
            networks.classList.remove('_active');
            phoneNumber.classList.remove('_active');
        }
    });
}
if (popupOpenerSecond) {
    popupOpenerSecond.addEventListener('click', function(e) {
        e.preventDefault();
        popup[1].classList.add('_active');
        document.body.classList.add('_lock');
        if (iconMenu.classList.contains('_active')) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            hiddenButton.classList.remove('_active');
            networks.classList.remove('_active');
            phoneNumber.classList.remove('_active');
        }
    });
}
//close a pop-up
for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener('click', function() {
        for (let i = 0; i < popup.length; i++) {
            popup[i].classList.remove('_active');
        }
        document.body.classList.remove('_lock');
    });
}
for (let i = 0; i < popup.length; i++)
    popup[i].addEventListener('click', function(e) {
        if (!e.target.closest('.pop-up__main')) {
            popup[i].classList.remove('_active');
            document.body.classList.remove('_lock');
        }
    });
//form
const inputElement = document.getElementById("suggestion__file");
let icon = document.querySelector("._icon-file");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
    icon.classList.remove('_icon-file');
    icon.classList.add('_icon-check');
}
let submitSuggest = document.querySelectorAll('.button-submit');
let textFieldFirst = document.querySelectorAll('.suggestion__text_1');
let textFieldSecond = document.querySelectorAll('.suggestion__text_2');
let textFieldThird = document.querySelectorAll('.pop-up__text_1');
let textFieldFourth = document.querySelectorAll('.pop-up__text_2');
console.log(submitSuggest)

submitSuggest[0].addEventListener('click', function() {
    for (let i = 0; i < textFieldFirst.length; i++) {
        if (textFieldFirst[i].value === '') {
            textFieldFirst[i].classList.add('_empty');
        } else {
            textFieldFirst[i].classList.remove('_empty');
        }

    }
});

submitSuggest[1].addEventListener('click', function() {
    for (let i = 0; i < textFieldSecond.length; i++) {
        if (textFieldSecond[i].value === '') {
            textFieldSecond[i].classList.add('_empty');
        } else {
            textFieldSecond[i].classList.remove('_empty');
        }
    }
});
submitSuggest[2].addEventListener('click', function() {
    for (let i = 0; i < textFieldThird.length; i++) {
        if (textFieldThird[i].value === '') {
            textFieldThird[i].classList.add('_empty');
        } else {
            textFieldThird[i].classList.remove('_empty');
        }
    }
});
submitSuggest[3].addEventListener('click', function() {
    for (let i = 0; i < textFieldFourth.length; i++) {
        if (textFieldFourth[i].value === '') {
            textFieldFourth[i].classList.add('_empty');
        } else {
            textFieldFourth[i].classList.remove('_empty');
        }

    }
});
let inputAll = document.querySelectorAll('input[type=text], input[type=tel]');
for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].addEventListener('input', function() {
        for (let i = 0; i < inputAll.length; i++) {
            if (!inputAll[i].value == '') {
                inputAll[i].classList.remove('_empty');
            }


        }
    })

}