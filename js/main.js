const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        removeClass()
        slide.classList.add('active')
    })
}

function removeClass() {
    slides.forEach(function(slide) {
        slide.classList.remove('active')
    })
}