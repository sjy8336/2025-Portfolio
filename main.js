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
    autoplay:{delay:6000},
});








const snsSlide = new Swiper('.snsD',{
    autoplay:{delay:0},
    loop:true,
    speed:3500,
    /* loopAdditionalSlides: 3, // 추가 슬라이드 복제 → 마지막 슬라이드에서 멈칫하는 현상 방지 */
});
const bnrSlide = new Swiper('.bannerD',{
    autoplay:{delay:0},
    loop:true,
    speed:3500,
});

const navi = document.querySelector ('.tab');
const bigD = document.querySelector('.detailD .big_bg');
const detail_img = document.querySelectorAll('.detail li img');
const big_imgD = document.querySelector('.detailD .big_bg img');
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
const bigS = document.querySelector('.snsD .big_bg');
const ban_img = document.querySelectorAll('.sns li img');
const big_imgS = document.querySelector('.snsD .big_bg img');
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
const bigb = document.querySelector('.bannerD .big_bg');
const banner_img = document.querySelectorAll('.banner li img');
const big_imgB = document.querySelector('.bannerD .big_bg img');
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
bigb.addEventListener('click',()=>{
    bigb.style.display = 'none'
    document.body.style.overflow = '';
    ports.enable()
    navi.style.zIndex = '100'
})