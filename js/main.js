'use strict'

/* ========================================================
* ドロワーメニュー
=========================================================*/

function toggleNav() {
    const drawerBtnIcon = document.getElementById("js-drawer-btn");
    const blackBg = document.getElementById("js-black-bg");
    let body = document.body;
    drawerBtnIcon.addEventListener('click', (function () {
        body.classList.toggle('is-active-drawer--open')
    })), blackBg.addEventListener('click', (function () {
        body.classList.remove('is-active-drawer--open');
    }))
}
toggleNav();

/* ========================================================
* トップスクロール
=========================================================*/

const topBtn = document.getElementById("js-page-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        topBtn.classList.add("is-scroll-active");
    } else {
        topBtn.classList.remove("is-scroll-active");
    }
});

/* ========================================================
*　スライダー
=========================================================*/
{

    const slideshowImages = document.querySelectorAll("#topMain img"); //allで全ての配列を取得
    const nextImageDelay = 5000;
    let currentImageCounter = 0;

    slideshowImages[currentImageCounter].style.opacity = 1;

    setInterval(nextImage, nextImageDelay); //一定時間ごとに特定の処理を繰り返す

    function nextImage() {
        slideshowImages[currentImageCounter].style.zIndex = -2;
        const tenmpCounter = currentImageCounter;

        setTimeout(() => {
            slideshowImages[tenmpCounter].style.opacity = 0;
        }, 1000);

        currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
        slideshowImages[currentImageCounter].style.opacity = 1;
        slideshowImages[currentImageCounter].style.zIndex = -1;
    }

}