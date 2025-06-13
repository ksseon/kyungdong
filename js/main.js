//비주얼배너
/*const mainBanner1 = () => {
    const $bannerli = getAll('#mainVisual .mainBanner li');
    const $prev = get('#mainVisual .prev');
    const $next = get('#mainVisual .next');

    let current = 0, //현재번호
        old = 0, // 과거 - 이미 끝난번호
        size = 100, // 해상도에 맞춰서 100% 처리
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;

    $next.addEventListener('click', (e) => {
        current++;
        if (current > totalImage - 1) current = 0;
        banner();
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) current = totalImage - 1;
        banner();
    });

    //공통
    const banner = () => {
        // 현재는 0의 위치로
        $bannerli[current].style.left = `0px`;
        $bannerli[current].style.zIndex = 10;
        $bannerli[current].classList.add('on');
        // 과거는 -100%로 이동하기
        $bannerli[old].style.left = `-${size}%`;
        $bannerli[old].style.zIndex = 1;
        $bannerli[old].classList.remove('on');

        lastBanner(old);
        old = current; //이미끝난 배너는 과거로 설정
    };

    const lastBanner = (z) => {
        setTimeout(() => {
            // 맨앞으로 이동
            $bannerli[z].style.left = `${size}%`;
        }, 400); // transition 시간동일
    };
};
*/
const mainBanner = () => {
    const $bannerli = getAll('#mainVisual .mainBanner li');
    const $prev = get('#mainVisual .prev');
    const $next = get('#mainVisual .next');

    let current = 0, //현재번호
        old = 0, // 과거 - 이미 끝난번호
        size = 100, // 해상도에 맞춰서 100% 처리
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;

    $next.addEventListener('click', (e) => {
        current++;
        if (current > totalImage - 1) current = 0;
        // banner(true); 도 가능
        banner('next');
    });
    $prev.addEventListener('click', (e) => {
        current--;
        if (current < 0) current = totalImage - 1;
        // banner(false); 도 가능
        banner('prev');
    });

    //공통
    const banner = (txt) => {
        const num = txt === 'next' ? size : -size;
        $bannerli[current].style.transition = '0s';
        //순간이동 -나는 밖에서부터 시작
        $bannerli[current].style.left = `${num}%`;
        setTimeout(() => {
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.left = `0px`;
            $bannerli[current].style.zIndex = 10;
            $bannerli[current].classList.add('on');

            $bannerli[old].style.left = `${num * -1}%`;
            $bannerli[old].style.zIndex = 1;
            $bannerli[old].classList.remove('on');

            old = current; //이미끝난 배너는 과거로 설정
        }, 20);
    };

    const lastBanner = (z) => {};
};

//이벤트배너
const eventBanner = () => {};

/*const sectionPage1 = () => {
    const $con0 = get('#mainVisual');
    const $con1 = get('.main .con1');
    const $con2 = get('.main .con2');
    const $con3 = get('.main .con3');
    const $con4 = get('.main .con4');
    // console.log($con1.offsetTop);위치값
    // console.log($con2.offsetTop);

    //top 누르면 화면이 맨위로 올라가게
    const $menulis = getAll('.menu li');
    let ty = 0;
    $menulis[0].addEventListener('click', (e) => {
        ty = $con0.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[1].addEventListener('click', (e) => {
        ty = $con1.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[2].addEventListener('click', (e) => {
        ty = $con2.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[3].addEventListener('click', (e) => {
        ty = $con3.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });
    $menulis[4].addEventListener('click', (e) => {
        ty = $con4.offsetTop;
        window.scrollTo({ top: ty, behavior: 'smooth' });
    });

    // window.scrollTo({ top: 위치, behavior: 'smooth' }); 페이지 부드럽게 이동
    window.scrollTo({ top: $con2.offsetTop, behavior: 'smooth' });
    //항상먼저 시작하고 싶으면 common.js에
    //  window.scrollTo({ top: 0, behavior: 'smooth' });추가
};*/
const sectionPage = () => {
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');
    console.log($cons[0].offsetTop);

    //메뉴 누르면 해당 페이지로 스무스하게 이동
    const posY = [];
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    // console.log(posY); con 배열값
    const $menulis = getAll('.menu li');
    let ty = 0;
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            //선택한 메뉴만 on , 모두떼기 -> forEach
            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
        });
    });
};

//메뉴바
const menuBar = () => {
    const $menu = get('.menu');
    const $con0 = get('#mainVisual');
    const $cons = getAll('.main .con');

    const posY = []; //좌표값 모두 담아둠
    posY.push($con0.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    posY[posY.length - 1] = posY[posY.length - 1] - 300;

    // console.log(posY); con 배열값
    let ty = 0;
    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            //선택한 메뉴만 on , 모두떼기 -> forEach
            // $menulis.forEach((item) => item.classList.remove('on'));
            // itemLi.classList.add('on');
        });
    });

    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;
        for (let i = 0; i < $menulis.length; i++) {
            if (ty >= posY[i]) {
                $menulis.forEach((item) => item.classList.remove('on'));
                $menulis[i].classList.add('on');
            }
        }
        /*if (ty >= posY[0]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[0].classList.add('on');
        }
        if (ty >= posY[1]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[1].classList.add('on');
        }
        if (ty >= posY[2]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[2].classList.add('on');
        }
        if (ty >= posY[3]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[3].classList.add('on');
        }
        if (ty >= posY[4]) {
            $menulis.forEach((item) => item.classList.remove('on'));
            $menulis[4].classList.add('on');
        }*/

        if (ty > 400) {
            //menu css에 on붙이기 : ty가 500보다 커지면 $menu 보여라
            //css에선 .menu를 display:none,block으로 처리함
            $menu.classList.add('on');
        } else {
            $menu.classList.remove('on');
        }
    });
};

//함수 만들면 무조건 합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    menuBar();
    // sectionPage();
};

(() => {
    mainInit();
})();
