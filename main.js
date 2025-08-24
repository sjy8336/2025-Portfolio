const ports = new Swiper(".main",{
    direction:'vertical',
    mousewheel:true,
    speed:700,
});
const nav = document.querySelectorAll ('nav a');
for(let i of nav){
    i.addEventListener('click', function(e){
        e.preventDefault()
        const slideIndex = this.getAttribute('data-slide')
        ports.slideTo(slideIndex)
    })
};