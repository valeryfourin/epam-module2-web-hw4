const content = document.querySelectorAll('.content', '.banner')
const birds = document.getElementById('birds'),
    moon = document.getElementById('moon'),
    mountainBack = document.getElementById('mountainBack'),
    text = document.getElementById('text'),
    btn = document.getElementById('btn'),
    mountainsFront = document.getElementById('mountainsFront'),
    header = document.getElementById('header'),
    title = document.getElementById('header');

const scrollHandler = () => {
    let value = window.scrollY;
    birds.style.left = (window.innerWidth / 2) - value * 1.2 + 'px';
    moon.style.top = value * 0.7 + 'px';
    mountainBack.style.top = value * 0.4 + 'px';
    mountainsFront.style.top = value * 0.2 + 'px';
    text.style.top = value * 1.6 + 'px';
    btn.style.left = -value * 0.6 + 'px';
    btn.style.marginLeft = '100px';
    
    requestAnimationFrame(scrollHandler);

    content.forEach(element => {
        isInViewport(element) 
        ? element.classList.add('appear')
        : element.classList.remove('appear');
    })
}

const transitionNav = () => {
    window.scrollY > 300 
    ? header.classList.add('colored-nav')
    : header.classList.remove('colored-nav');
    
    requestAnimationFrame(transitionNav);
}

const isInViewport = (element) => {
    const elementPosition = element.getBoundingClientRect();
    const top = elementPosition.top,
          bottom = elementPosition.bottom;

    const topIsAboveScreenTop = top <= 0;
    const topIsBelowScreenTop = top >= 0;
    const bottomIsAboveScreenTop = bottom < 0;
    const bottomIsAboveScreenBottom = bottom <= window.innerHeight;
    const bottomIsBelowScreenBottom = bottom >= window.innerHeight;
    const topIsAboveScreenBottom = top <= window.innerHeight;

    return (
        (topIsAboveScreenTop && !bottomIsAboveScreenTop) ||
        (bottomIsBelowScreenBottom && topIsAboveScreenBottom) ||
        (topIsBelowScreenTop && bottomIsAboveScreenBottom)
    );
};

requestAnimationFrame(scrollHandler);
requestAnimationFrame(transitionNav);