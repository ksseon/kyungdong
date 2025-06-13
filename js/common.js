const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

// 링크막아주기
const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb > li');
    const $nav = get('#header .nav');
    const $navBar = get('#header .nav-bg');

    $gnbli.forEach((itemLi) => {
        itemLi.addEventListener('mouseenter', (e) => {
            $nav.classList.add('on');
            $navBar.classList.add('on');
        });
    });
    $nav.addEventListener('mouseleave', (e) => {
        $nav.classList.remove('on');
        $navBar.classList.remove('on');
    });
};
const familySite = () => {};

//사이트맵 팝업창 열고,닫기
const siteMap = () => {
    const $pop = get('.sitemap');
    const $allmenu = get('#header .util .all-menu');
    const $close = get('.sitemap .close');
    const $bg = get('.bg');

    $allmenu.addEventListener('click', (e) => {
        $pop.classList.add('on');
        $bg.classList.add('on');
        // $close.classList.add('on');
    });
    $pop.classList.remove('on');
    $bg.classList.remove('on');

    $close.addEventListener('click', (e) => {
        $pop.classList.remove('on');
        $bg.classList.remove('on');
    });
};

//topbar, header 스크롤 처리
const topBar = () => {
    const $top = get('.top');
    const $header = get('#header');
    let ty = 0; //위치값 뽑기 ty
    //top 누르면 화면이 맨위로 올라가게
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset
        //console.log(window.scrollY); 화면에서 스크롤 내리면 위치값 나옴
        ty = window.scrollY;
        if (ty > 200) {
            //top css에 on붙이기 : ty가 300보다 커지면 $top이 보여라
            //css에선 .top를 display:none,block으로 처리함
            $top.classList.add('on');
        } else {
            $top.classList.remove('on');
        }

        if (ty > 100) {
            $header.classList.add('on');
        } else {
            $header.classList.remove('on');
        }
    });
};

const comInit = () => {
    navi();
    topBar();
    siteMap();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();
