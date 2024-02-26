const pages = [];
const headerHeight = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-height')
    .replace('px', '');
const loader = document.querySelector('.loader');
const header = document.querySelector('header');
let isStarted = false;

pages.push(document.querySelector('.inner-presentation-container'));
pages.push(document.querySelector('.inner-skills-container'));
pages.push(document.querySelector('.inner-techno-container'));

window.addEventListener('scroll', function() {
    if (!isStarted)
        return;

    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const position = page.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0)
            page.classList.add('active');
        else
            page.classList.remove('active');
    }
});

document.querySelectorAll('.github-image-element').forEach((element) => {
    element.addEventListener('mouseover', function(event) {
        const parentElementPosition = event.target.parentElement.getBoundingClientRect();
        window.scroll({
            top: parentElementPosition.top + window.scrollY + parentElementPosition.height / 2 - (window.innerHeight - headerHeight) / 2 - headerHeight,
            behavior: 'smooth'
        })
    });
});

document.addEventListener('readystatechange', function() {
    setTimeout(() => {
        isStarted = true;
        loader.classList.remove('active');
        pages[0].classList.add('active');
        header.classList.add('active');
    }, 6000);
});