$(function(){

// 시작 로딩페이지
    gsap.to('.loading-wrap', {
        delay:1.2,
        display:'none',
        height:0
    })
    gsap.to('.loading-wrap .pan-box', {
        height:0,
        delay:0.5,
    })

    gsap.fromTo('.loading-wrap .txt-load',{
        opacity:1
        },{
        duration: 1,
        opacity:0
   });



    // ld = gsap.timeline();

    // ld.to('.a', {opacity:1, delay:0.4});
    // ld.to('.a', {opacity:0});
    // ld.to('.s', {opacity:1, delay:0.5});
    // ld.to('.s', {opacity:0});
    // ld.to('.d', {opacity:1, delay:0.6});
    // ld.to('.d', {opacity:0});
    // ld.to('.txt-load:nth-child(4)', {opacity:1, delay:0.7});
    // ld.to('.txt-load:nth-child(4)', {opacity:0});
    // ld.to('.txt-load:nth-child(5)', {opacity:1, delay:0.8});
    // ld.to('.txt-load:nth-child(5)', {opacity:0});



// 헤더 이미지
    gsap.to('.sc-intro .intro-img',{

        scrollTrigger:{
            trigger:".sc-intro",
            start:"top bottom",
            end: "50% top",
            // markers:true, //좌표표시
            scrub:1,
        },

        yPercent:-2,
        delay:2
    });

    gsap.to('.sc-intro',{

        scrollTrigger:{
            trigger:".sc-intro",
            start:"top bottom",
            end: "50% top",
            // markers:true, //좌표표시
            scrub:1,
        },

        yPercent:-5
    });

    gsap.to('.sc-work .inner1 .work-desc',{

        scrollTrigger:{
            trigger:".sc-work .work-desc",
            start:"top bottom",
            end: "bottom top",
            // markers:true, //좌표표시
            scrub:1,
        },

        yPercent:-5
    });


// 스크롤 메뉴버튼
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        // introHeight = $('.sc-intro').outerHeight()-50;

        if (curr > 100) {
            $('.header .btn-menu').addClass('on');
        } else {
            $('.header .btn-menu').removeClass('on');
        }
    });


    $('.header .btn-menu').click(function(e){
        e.preventDefault();

        $('.header .btn-menu').toggleClass('active');
        $('.header .menu-area').toggleClass('active');
        $('.dimmed').toggleClass('active');
        $('body').toggleClass('active');
        // $('.menu-area .menu-item').delay(300).fadeIn(700);
        // $('.menu-area .menu-item').delay(300).fadeToggle(700);
        
    })



})
