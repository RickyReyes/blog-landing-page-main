document.addEventListener('click', toggleMenu);

const mobileMenu = document.querySelector(".mobile-menu");

/* toggle mobile menu */
function toggleMenu(e) {
    if (!e.target.src) {
        return;
    }
    if (e.target.src.includes("icon-close.svg")) {
        e.target.src = "./images/icon-hamburger.svg";
        mobileMenu.style.transform = 'translateX(-163%)';
    } else if (e.target.src.includes("hamburger.svg")) {
        e.target.src = "./images/icon-close.svg";
        mobileMenu.style.transform = 'translateX(-50%)';
    }
}

/* each nav link */
const navLinks = document.querySelectorAll('.menu-category');

/* collection of <ul> tags (one for each nav link) */
const allItemsBlocks = document.querySelectorAll(".items");

/* add toggle display to each nav link (Product, Company, Contact) */
navLinks.forEach((navLink, i) => {
    let arrow = navLink.firstElementChild;
    let selectedLink = navLink.dataset.key;
    let correspondingBlock = document.querySelector(`.${selectedLink}-items`);
    navLink.addEventListener('click', () => {
       if (correspondingBlock.classList.contains('toggle-block')) {
        arrow.classList.remove('toggle-rotate');
            allItemsBlocks.forEach(itemsBlock => {
                if (itemsBlock.classList.contains('toggle-block')) {
                    itemsBlock.classList.remove('toggle-block');
                }
            });
        } else if (!correspondingBlock.classList.contains('toggle-block')) {
            arrow.classList.add('toggle-rotate');
            allItemsBlocks.forEach(itemsBlock => {
                if (itemsBlock.classList.contains('toggle-block')) {
                    itemsBlock.classList.remove('toggle-block');
                }
            });
            correspondingBlock.classList.add('toggle-block');
            }
    });
});


const editorSvg = document.querySelector('.editor');
const laptopSvg = document.querySelector('.laptop');

let  x = 0;
const mediaQuery = window.matchMedia("(min-width: 950px)");
mediaQuery.addEventListener('change', () => changeSvgs('large'));

changeSvgs();

/* change mobile svgs to desktop svgs */
function changeSvgs() {
    if (mediaQuery.matches) {
        editorSvg.src = 'images/illustration-editor-desktop.svg';
    } else {
        editorSvg.src = 'images/illustration-editor-mobile.svg';
    }
}