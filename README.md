# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/images/blogr-desktop.png)
![](/images/blogr-mobile.png)

### Links

- Solution URL: [Here](https://github.com/RickyReyes/blog-landing-page-main)
- Live Site URL: [Here](https://blog-landing-page-main.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Grid
- Vanilla JS
- Mobile-first workflow

### What I learned
- Heading levels should only increase by one
- ul and ol elements must only directly contain li, script or template elements

- Using the & selector in Sass
- Using text-shadow to produce a "bold" effect without growing the parent container
```css
li {
	padding: 0.6rem;
    &:hover {
        text-shadow: 1px 0px 0px $very-dark-blue;
    }
}
```

Changing an img tag's src attribute using a media query in JS:
```js
const mediaQuery = window.matchMedia("(min-width: 950px)");
function changeSvgs() {
    if (mediaQuery.matches) {
        editorSvg.src = 'images/illustration-editor-desktop.svg';
        laptopSvg.src = 'images/illustration-laptop-desktop.svg';
        
    } else {
        editorSvg.src = 'images/illustration-editor-mobile.svg';
        laptopSvg.src = 'images/illustration-laptop-mobile.svg';
    }
}
```

### Useful resources

- [Wes Bos](https://www.courses.wesbos.com/account) - His #JavaScript30 course  helped me learn useful vanilla JavaScript DOM manipulation.
- [Kevin Powell](https://www.youtube.com/KevinPowell) - His videos helped me get comfortable using Flexbox, CSS Grid, and Sass.

## Author

- Website - [Ricky Reyes](https://www.github.com/RickyReyes)
- Twitter - [@RKYNTR](https://www.twitter.com/RKYNTR)