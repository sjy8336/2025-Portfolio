/* const tab = document.querySelector('.tab a');
tab.addEventListener('click',()=>{
    e.preventDefault()
    tab.classList.remove('on')    
    tab.classList.add('on')    
}) */
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
const webS = new Swiper('.webs', {
    loop: true,
    autoplay:{delay:6000},
});
const navi = document.querySelector ('.tab');
const bigD = document.querySelector('.pj03_in .big_bg');
const detail_img = document.querySelectorAll('.detail li img');
const big_imgD = document.querySelector('.pj03_in .big_bg img');
const body = document.querySelectorAll('body');
bigD.style.display = 'none';
for(let detail of detail_img){//6개 이미지 반복문 접근
    detail.addEventListener('click',(e)=>{
        //클릭한 대상 관련에 a가 있다면 스크롤 위로 올라가는 기능 막기
        e.preventDefault()
        //큰 이미지 부모 보이기
        bigD.style.display = 'block'
        //팝업 실행 시 body 스크롤 막기
        document.body.style.overflow = 'hidden';
        navi.style.zIndex = '0'
        ports.disable()
        //클릭한 (이미지의 경로(src)를 큰 이미지 팝업의 src로 대입하기
        big_imgD.src = detail.src
        //이전 팝업에서 내린 스크롤을 기억하지 않도록 항상 스크롤 위로 올리기
        bigD.children[0].scrollTo(0,0)
    })
}
//팝업 출력 시 팝업 닫기
bigD.addEventListener('click',()=>{
    bigD.style.display = 'none'
    document.body.style.overflow = '';
    ports.enable()
    navi.style.zIndex = '100'
})
function PlayRollingSwiper(target){
    rollingSwiper = new Swiper('.snsS', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 12000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto'
    });
}
window.addEventListener('load', function(){
    PlayRollingSwiper();
});
/*  */
const bigS = document.querySelector('.pj02_in .big_bg');
const ban_img = document.querySelectorAll('.sns li img');
const big_imgS = document.querySelector('.pj02_in .big_bg img');
bigS.style.display = 'none';
for(let sns of ban_img){
    sns.addEventListener('click',(e)=>{
        e.preventDefault()
        bigS.style.display = 'block'
        document.body.style.overflow = 'hidden';
        navi.style.zIndex = '0'
        ports.disable()
        big_imgS.src = sns.src
        bigS.children[0].scrollTo(0,0)
    })
}
bigS.addEventListener('click',()=>{
    bigS.style.display = 'none'
    document.body.style.overflow = '';
    ports.enable()
    navi.style.zIndex = '100'
})
const bigb = document.querySelector('.pj04_in .big_bg');
const banner_img = document.querySelectorAll('.banner li img');
const big_imgB = document.querySelector('.pj04_in .big_bg img');
bigb.style.display = 'none';
for(let banner of banner_img){
    banner.addEventListener('click',(e)=>{
        e.preventDefault()
        bigb.style.display = 'block'
        document.body.style.overflow = 'hidden';
        navi.style.zIndex = '0'
        ports.disable()
        big_imgB.src = banner.src
        bigb.children[0].scrollTo(0,0)
    })
}