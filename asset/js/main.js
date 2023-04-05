$(function(){

    history.scrollRestoration = "manual"
// 시작 로딩페이지

    //글자
    let idx = 0;
    arrHello = ['Hello', 'Bonjour', 'स्वागत हे', 'Ciao', 'Olá', 'おい', 'Hallå', 'Guten tag', '안녕하세요'];
    txtmotion = setInterval(() => {
        $('.txt-load').html(arrHello[idx])
        idx++;
        console.log(idx);
    }, 200);
    setTimeout(() => {
        clearInterval(txtmotion);
    }, arrHello.length*200);
    // 맨처음에 실행안된이유는 setInterval 시간이 똑같아서


    gsap.set('body',{overflow:'hidden'})

    intro = gsap.timeline({
        onComplete:function(){
            gsap.set('body',{overflow:'initial'})
        }
    })

    intro
    .addLabel('a')
    .to('.loading-wrap',{
        delay:(arrHello.length*200*0.001)+0.5,
        yPercent:-100
    },'a')
    .to('.loading-wrap .pan-box .pan',{
        yPercent:-100
    },'a+=2.5')




    $('body').mousemove(function(e){
        xVal = e.clientX;
        yVal = e.clientY;

        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
        gsap.to('.view-wrap',{
            x:xVal,
            y:yVal
        })
        
    })

    $('.move').mousemove(function(e){

        console.log(e.offsetX);
        var x = ((-$(this).width() / 2) + e.offsetX) *0.6;
        var y = ((-$(this).height() / 2) + e.offsetY) *0.6;
    
        gsap.to('.move', {
            transform:"translate(" + x + "px," + y + "px)"
        })
    })

    $('.move').mouseleave(function(){

        gsap.to('.move', {
            transform:"translate(0,0)"
        })
    })



    // 호버시 view생김
    $('.sc-work .work-area .work-item').mouseover(function(){

        // var x = ((-$(this).width() / 2) + e.offsetX) *0.6;
        // var y = ((-$(this).height() / 2) + e.offsetY) *0.6;

        gsap.to('.cursor .view, .view-wrap',{
            opacity:1,
            visibility: 'visible',
            // transform:"translate(" + x + "px," + y + "px)"
        })

        idx = $(this).index();

        gsap.to('.view-wrap .item',{
            yPercent:-100*idx
        })
    })
    $('.sc-work .work-area .work-item').mouseleave(function(){

        gsap.to('.cursor .view, .view-wrap',{
            opacity:0,
            visibility: 'hidden',
            // transform:"translate(0,0)"
        })
    })
    




    
    //메뉴 점
    $('.header .menu-wrap .menu-item').hover(function(){
        $(this).addClass('on').siblings().removeClass('on');
    },function(){
        $('.header .menu-wrap .menu-item').removeClass('on').eq(0).addClass('on');
    });


    // 클릭시 해당영역으로 이동
    $('.header .menu-wrap .menu-item a, .link-nav, .sc-work .btn').click(function(e){
        e.preventDefault();

        target = $(this).data('target')
        gsap.to(window, {duration: 1, scrollTo:target});
    });


    // more버튼 클릭시 나타나기
    $('.sc-work .btn-more').click(function(e){
        e.preventDefault();
        $('.sc-work .btn-more').addClass('show')
        // $('.work-item').removeClass('show');
        $('.work-item').slideDown(800);

        // gsap.fromTo(".sc-work .work-item.show", {
        //         opacity: 0,
        //         yPercent:20,
        //         stagger:0.3, }
        //     ,{
        //         opacity: 1,
        //         yPercent:0,
        //         stagger:0.3,
        // });
    })





// 헤더 이미지

    gsap.to('.sc-intro .intro-img',{
        scrollTrigger:{
            trigger:".sc-intro",
            start:"0% 0%",
            end: "100% 0%",
            // markers:true, //좌표표시
            scrub:5,
        },
        yPercent:20,
    });

    // gsap.to('.sc-intro',{

    //     scrollTrigger:{
    //         trigger:".sc-intro",
    //         start:"0% 0%",
    //         end: "100% 0%",
    //         // markers:true, //좌표표시
    //         scrub:0,
    //     },
    //     yPercent:10,
    // });
    



// 스크롤 메뉴버튼
// 스크롤 글씨
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        // introHeight = $('.sc-intro').outerHeight()-50;
        oneselfHeight = $('.sc-oneself').outerHeight();

        let rolling = gsap.timeline({})

        $(window).resize(function(){

            // if (window.innerWidth < 767){
            //     if(curr = 0){
            //         $('.link-nav').click(function(){
            //             $('.header .btn-menu').addClass('on');
            //         })
            //     }
            // }
        }).resize();

        if (curr > 100) {
            $('.header .btn-menu').addClass('on');
            $('.sc-intro .animate-name').addClass('rolling');

            // gsap.to('.animate-name', {
            //     duration:10,
            //     xPercent:100,
            //     repeat: -1 //무한
            // })
            // rolling.to('.animate-name', {
            //     duration:10,
            //     xPercent:100,
            //     repeat: -1
            // })

            // 푸터부분 스크롤시 박스
            // if (curr >= oneselfHeight) {
            //     $('.sc-output .pan-box').addClass('active')
            // } else {
            //     $('.sc-output .pan-box').removeClass('active')
            // }
        } else {
            $('.header .btn-menu').removeClass('on');
            $('.sc-intro .animate-name').removeClass('rolling');

            // rolling.reverse();

            // gsap.to('.animate-name', {
            //     duration:10,
            //     xPercent:-100,
            //     repeat: -1
            // })
        }
    });

    // gsap.to('.animate-name', {
    //     duration:10,
    //     scrollTrigger:{
    //         trigger:".sc-intro",
    //         start:"0% 0%",
    //         end: "100% 0%",
    //         markers:true, //좌표표시
    //         scrub:0,
    //          yoyo: true, //애니반복
    //         toggleActions: 'reverse',
    //     },
    //     xPercent:-100,
    // })


    $('.header .btn-menu, .link-nav:last-child').click(function(e){
        e.preventDefault();

        $('.header .btn-menu').toggleClass('active');
        // $('.header .btn-menu').toggleClass('active, show');
        $('.header .menu-area').toggleClass('active');
        $('.dimmed').toggleClass('active');
        $('body').toggleClass('active');
        $('.link-nav:last-child').toggleClass('show');
        
        
        if ($("body").hasClass('active')) {
            $('body').css('overflow','hidden');
            // $('body').unbind('hover');
        } else {
            $('body').css('overflow','initial');
        }
        
    });


    // gsap.fromTo('.work-desc .work-box b',{
    //     yPercent:-100,
    //     opacity: 0
    // },{
    //     yPercent: 0,
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.sc-work .work-desc',
    //         start: '30% 70%',
    //         end: '50% 70%',
    //         markers: true,
    //         scrub:1,
    //         toggleActions: 'play reverse play reverse',
    //     },
    // })

    // gsap.to('.work-desc .work-box b',{
    //     yPercent: 0,
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.sc-work .work-desc',
    //         start: '30% 70%',
    //         end: '50% 70%',
    //         markers: true,
    //         scrub:1,
    //         toggleActions: 'play reverse play reverse',
    //     }
    // })


    // gsap.from('.work-desc .work-box',{
    //     yPercent: 20,
    //     opacity: 0,
    //     stagger:0.5,
    //     scrollTrigger: {
    //         trigger: '.sc-work .work-desc',
    //         start: '20% 70%',
    //         end: '20% 70%',
    //         // markers: true,
    //         scrub:1,
    //         // toggleActions: 'play reverse play reverse',
    //     }
    // })

    gsap.fromTo('.work-desc .work-box, .work-desc .btn-work',{
        y: 50,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        stagger:0.1,
        scrollTrigger: {
            trigger: '.sc-work .work-desc',
            start: '35% bottom',
            end: 'bottom+=15% top',
            // markers: true,
            toggleActions: 'play reverse play reverse',
        },
    });








    // 스크롤시 롤링
    let pan = gsap.timeline({});


    gsap.to('.sc-output .output-list.list1',{

        scrollTrigger:{
            trigger:".output-list.list1",
            start:"top-=20% bottom",
            end: "50% top",
            // markers:true,
            scrub:1,
        },

        xPercent:-10
      });
    gsap.to('.sc-output .output-list.list2',{

        scrollTrigger:{
            trigger:".output-list.list2",
            start:"top bottom",
            end: "bottom top",
            // markers:true,
            scrub:1,
        },

        xPercent:10
      });

      gsap.to('.sc-output .pan-box, pan',{

        scrollTrigger:{
            trigger:".sc-output .pan-box",
            start:"top bottom",
            end: "bottom top",
            // markers:true,
            scrub:1,
        },

        yPercent:-100,
        height:0
    });
})
