// бургер

let burger = document.querySelector('.js-burger');

let menu = document.querySelector('.js-header-menu');

burger.addEventListener('click',
function() {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.classList.toggle('stop-scroll');
})


let close = document.querySelector('.button--close');

close.addEventListener('click',
    function() {
        menu.classList.remove('open');
    }
)


// подключение свайпера в секции hero

let swiper = new Swiper('.js-swiper-hero', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
  });

// подключение свайпера в секции best

function swiperBest() {

    let swiperBest = new Swiper('.js-swiper-best', {
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
            },

            1024: {
                slidesPerView: 'auto',
            }
            }
    });
};

swiperBest();


// // подключение табов в секции choice

document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelector('.js-wrapper-tabs');
    let tabsBtn = document.querySelectorAll('.js-tabs');
    let tabsContent = document.querySelectorAll('.js-tabs-content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('js-tabs')) {
                let tabsPath = e.target.dataset.tabsPath;
                tabsHandler(tabsPath);
            }
        });
    }

    let tabsHandler = (path) => {

        tabsBtn.forEach(el => {el.classList.remove('active')});
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('active');


        tabsContent.forEach(el => {el.classList.remove('active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('active');
    };
});
