$(function(){

// 시작 로딩페이지
    gsap.to('.loading-wrap', {
        delay:1.2,
        display:'none',
        height:0
    })
//     gsap.to('.loading-wrap .pan-box', {
//         height:0,
//         delay:0.9,
//     })

//     gsap.fromTo('.loading-wrap .txt-load',{
//         opacity:1
//         },{
//         duration: 1,
//         opacity:0
//    });



    ld = gsap.timeline();

    ld.to('.a', {opacity:1, delay:0.4});
    ld.to('.s', {opacity:1, delay:0.5});
    ld.to('.d', {opacity:1, delay:0.6});
    // ld.to('.txt-load:nth-child(4)', {opacity:1, delay:0.7});
    // ld.to('.txt-load:nth-child(4)', {opacity:0});
    // ld.to('.txt-load:nth-child(5)', {opacity:1, delay:0.8});
    // ld.to('.txt-load:nth-child(5)', {opacity:0});


    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        // console.log(xVal+'//'+yVal);
        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
        
    })


    // 호버시 view생김
    $('.sc-work .work-area .work-item').mouseover(function(){

        gsap.to('.cursor .view',{
            opacity:1
        })

        // gsap.to('.work-area .view-box',{
        //     transform: 'translateY(-100)'
        // })
    })
    $('.sc-work .work-area .work-item').mouseleave(function(){

        gsap.to('.cursor .view',{
            opacity:0
        })
    })



    // 호버

    $('.sc-work .btn').mouseover(function(){

        // gsap.To('.btn-fill',{
        //     yPercent: 75
        // })
        // gsap.fromTo('.btn-fill',{
        //     yPercent: 75
        // },{
        //     y: 0
        // })
    })

    // $('.sc-work .btn').mouseleave(function(){

    //     gsap.fromTo('.btn-fill',{
    //         yPercent: 0
    //     },{
    //         yPercent: -75
    //     })
    // })



        // $('.sc-work .btn-work').hover(function(){
    //     gsap.to('.btn-work .btn-fill',{
    //         yPercent: 75
    //     })


    // })






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

    gsap.to('.sc-work',{

        scrollTrigger:{
            trigger:".sc-work .inner1",
            start:"top bottom",
            end: "bottom top",
            // markers:true, //좌표표시
            scrub:1,
        },

        yPercent:-5
    });


// 스크롤 메뉴버튼
// 스크롤 글씨
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        // introHeight = $('.sc-intro').outerHeight()-50;
        oneselfHeight = $('.sc-oneself').outerHeight();

        if (curr > 100) {
            $('.header .btn-menu').addClass('on');
            $('.sc-intro .animate-name').addClass('rolling')

            // 푸터부분 스크롤시 박스
            // if (curr >= oneselfHeight) {
            //     $('.sc-output .pan-box').addClass('active')
            // } else {
            //     $('.sc-output .pan-box').removeClass('active')
            // }
        } else {
            $('.header .btn-menu').removeClass('on');
            $('.sc-intro .animate-name').removeClass('rolling')
        }
    });


    $('.header .btn-menu').click(function(e){
        e.preventDefault();

        $('.header .btn-menu').toggleClass('active');
        $('.header .menu-area').toggleClass('active');
        $('.dimmed').toggleClass('active');
        $('body').toggleClass('active');
        
    })

    // 글자 무한
    // setInterval(function() {
    //     $('.animate-name').animate({'left':'-100%'})
    // }, 1000);

    // $(function ok(){
    //     $('.animate-name').animate({'left':'0'},1000, null);
    //     $('.animate-name').animate({'left':'-100%'},1000, null, ok);

    // })
    // $('animate-name').animate({'left': '-100%'}, 3000).animate({'left': 0}, 1000);


    // 스크롤시 롤링
    gsap.to('.sc-output .output-list.list1',{

        scrollTrigger:{
            trigger:".output-list.list1",
            start:"-150% bottom",
            end: "50% top",
            // markers:true,
            scrub:1,
        },

        xPercent:-5
      })
    gsap.to('.sc-output .output-list.list2',{

        scrollTrigger:{
            trigger:".output-list.list2",
            start:"-150% bottom",
            end: "50% top",
            // markers:true,
            scrub:1,
        },

        xPercent:5
      })

      gsap.to('.sc-output .pan-box',{

        scrollTrigger:{
            trigger:".sc-output",
            start:"top bottom",
            end: "80% bottom",
            markers:true, //좌표표시
            scrub:1,
        },
        display:'none',
        height:0,
        // duration: 3
    });
})
