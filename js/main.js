const nav = document.querySelectorAll('nav a');
const ports = new Swiper(".main",{
    direction:'vertical',
    mousewheel:true,
    speed:600,
    on: {
        slideChangeTransitionEnd: function(){
            for(let i of nav) i.classList.remove('on')
            nav[this.activeIndex].classList.add('on')
            setTimeout(()=>{
                ScrollTrigger.refresh();
            },0);
        },
    },
});
for(let i of nav){
    i.addEventListener('click', function(e){
        e.preventDefault()
        const slideIndex = this.getAttribute('data-slide')
        ports.slideTo(slideIndex)
    })
};
const webS = new Swiper('.webs', {
    loop: true,
    autoplay:{delay:5500},
});
const snsSwiper = new Swiper('.snsD', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {delay: 0,},
    speed:5000,
    loop: true,
})
const bnrSwiper = new Swiper('.bnrD', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {delay: 0,},
    speed:5000,
    loop: true,
})
const activeScroll = document.querySelector('.design_right .active-scrollbar');
const detailSwiper = new Swiper('.design_right .detailD',{
    autoplay:{delay:2500,},
    loop:true,
    on:{
        autoplayTimeLeft(type,time,progress) {
            if(progress === 1){
                activeScroll.style.width = '0%'
                activeScroll.style.transition = 'none'
            }else {
                activeScroll.style.width = '100%'
                activeScroll.style.transition = 'width 2.5s linear'
            }
        }
    },
});
const popBg = document.querySelector('.popup_bg');
const bnr = document.querySelectorAll('.bnr li img');
const sns = document.querySelectorAll('.sns li img');
const detail = document.querySelectorAll('.detail img');
popBg.style.display = 'none'
for(let i of sns){
    i.addEventListener('click',()=>{
        popBg.style.display = 'block';
        popBg.children[0].children[0].src = i.src;
        popBg.children[0].style.width = '700px';
        popBg.children[0].style.marginTop = '100px'
        ports.mousewheel.disable();
})};
for(let i of bnr){
    i.addEventListener('click',()=>{
        popBg.style.display = 'block';
        popBg.children[0].children[0].src = i.src;
        popBg.children[0].style.width = '1200px';
        popBg.children[0].style.marginTop = '300px';
        ports.mousewheel.disable();
    })
}
popBg.addEventListener('click',function(){
    popBg.style.display = 'none';
    ports.mousewheel.enable();
});
for(let i of detail){
    i.addEventListener('click',()=>{
        popBg.style.display = 'block'
        popBg.children[0].children[0].src = i.src;
        popBg.children[0].style.width = '700px';
        popBg.children[0].style.marginTop = '100px';
        ports.mousewheel.disable();
})};