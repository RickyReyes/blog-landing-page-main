/* bling JS shortcuts */
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

const mobileMenu = document.querySelector(".nav-items");
const navLinks = document.querySelectorAll('.menu-category');
const allItemsBlocks = document.querySelectorAll(".items");
const laptopSvg = document.querySelector('.laptop');
const editorSvg = document.querySelector('.editor');
const mediaQuery = window.matchMedia("(min-width: 950px)");

document.addEventListener('click', toggleMenu);
mediaQuery.addEventListener('change', () => changeSvgs('large'));
navLinks.forEach(navLink => 
    navLink.addEventListener('click', () => handleNavClick(navLink))
);

/* toggle mobile menu by clicking on hamburger/x buttons */
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
    

/* toggle each nav link's options, arrow rotation */
function handleNavClick(navLink) {
    let clickedKey = navLink.dataset.key;
    let clickedBlock = $(`.${clickedKey}-items`);
    let clickedArrows = $$(`.${clickedKey}-arrow`);
    let allBlocks = $$('.items');

    if (clickedBlock.classList.contains('toggle-block')) {
        clickedBlock.classList.remove('toggle-block');
        console.log('removed.')
        clickedArrows.forEach(arrow => {
            arrow.style.transform = 'rotateZ(0deg)'
        });
    } else {
        clickedBlock.classList.add('toggle-block');
        clickedArrows.forEach(arrow => {
            arrow.style.transform = 'rotateZ(180deg)'
        });
    }

    allBlocks.forEach(block => {
            if (block.classList.contains('toggle-block') && block !== clickedBlock) {
                let key = block.dataset.key;
                let arrows = $$(`.${key}-arrow`);
                arrows.forEach(arrow => {
                    arrow.style.transform = 'rotateZ(0deg)'
                });
                block.classList.remove('toggle-block');
            }
    })

}

/* change mobile svgs to desktop svgs
(editor and laptop illustrations) */
function changeSvgs() {
    if (mediaQuery.matches) {
        editorSvg.src = 'images/illustration-editor-desktop.svg';
        laptopSvg.src = 'images/illustration-laptop-desktop.svg';
        
    } else {
        editorSvg.src = 'images/illustration-editor-mobile.svg';
        laptopSvg.src = 'images/illustration-laptop-mobile.svg';
    }
}

/* run changeSvgs() on page load */
changeSvgs();