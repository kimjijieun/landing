$(function(){

    history.scrollRestoration = "manual"

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
        gsap.to('.view-wrap',1,{
            x:xVal,
            y:yVal
        })
        
    })

    $('.move').mousemove(function(e){

        console.log(e.offsetX);
        var x = ((-$(this).width() / 2) + e.offsetX) *0.4;
        var y = ((-$(this).height() / 2) + e.offsetY) *0.4;
    
        gsap.to($(this), {
            transform:"translate(" + x + "px," + y + "px)"
        })
    })

    $('.move').mouseleave(function(){
        gsap.to($(this), {
            transform:"translate(0,0)"
        })
    })

    $('.btn-work, .btn-txt, .work-box .arrow, .sc-work .btn-more').mousemove(function(e){

        // console.log(e.offsetX);
        var x = ((-$(this).width() / 2) + e.offsetX) * 0.4;
        var y = ((-$(this).height() / 2) + e.offsetY) * 0.4;
    
        gsap.to($(this),0.5, {
            transform:"translate3D(" + x + "px," + y + "px, 0)",
            ease: Elastic.easeOut
        })
    })

    $('.btn-work, .btn-txt, .work-box .arrow, .sc-work .btn-more').mouseleave(function(){
        gsap.to($(this),1.2, {
            transform:"translate3D(0, 0, 0)",
            ease: Elastic.easeOut.config(1, 0.1)
        })
    })




    // 호버 view
    $('.sc-work .work-area .work-left').mouseover(function(){

        gsap.to('.cursor .view, .view-wrap',{
            opacity:1,
            scale: 1,
        })

        idx = $(this).parents('.work-area .work-item').index();

        gsap.to('.view-wrap .item',{
            yPercent:-100*idx
        })
    })
    $('.sc-work .work-area .work-left').mouseleave(function(){

        gsap.to('.cursor .view, .view-wrap',{
            opacity:0,
            scale: 0,
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
        gsap.to('.sc-work .work-area .work-item.show',{
            opacity:1,
            visibility: 'visible',
            height: 'auto'
        })

    })





// 헤더 이미지

    gsap.to('.sc-intro .intro-img',{
        scrollTrigger:{
            trigger:".sc-intro",
            start:"0% 0%",
            end: "100% 0%",
            scrub:5,
        },
        yPercent:20,
    });

    



// 스크롤
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        oneselfHeight = $('.sc-oneself').outerHeight();

        let rolling = gsap.timeline({})


        if (curr > 100) {
            $('.header .btn-menu').addClass('on');
        } else {
            $('.header .btn-menu').removeClass('on');
        }
    });


    $('.header .btn-menu, .link-nav:last-child').click(function(e){
        e.preventDefault();

        $('.header .btn-menu').toggleClass('active');
        $('.header .menu-area').toggleClass('active');
        $('.dimmed').toggleClass('active');
        $('body').toggleClass('active');
        $('.link-nav:last-child').toggleClass('show');
        
        if ($(window).scrollTop() == 0) {
            if ($('.header .btn-menu').hasClass('on')) {
                $('.header .btn-menu').removeClass('on');
            }else {
            $('.header .btn-menu').addClass('on');
            }
        } 


        
        if ($("body").hasClass('active')) {
            $('body').css('overflow','hidden');
        } else {
            $('body').css('overflow','initial');
        }
        
    });


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
            toggleActions: 'play reverse play reverse',
        },
    });








    let pan = gsap.timeline({});


    gsap.to('.sc-output .output-list.list1',{

        scrollTrigger:{
            trigger:".sc-output",
            start:"top+=50% bottom",
            end: "bottom+=50% top",
            scrub:1,
        },

        xPercent:-10
      });
    gsap.to('.sc-output .output-list.list2',{

        scrollTrigger:{
            trigger:".sc-output",
            start:"top+=50% bottom",
            end: "bottom+=50% top",
            scrub:1,
        },

        xPercent:10
      });

      gsap.to('.sc-output .pan-box, pan',{

        scrollTrigger:{
            trigger:".sc-output .pan-box",
            start:"top bottom",
            end: "bottom top",
            scrub:1,
        },

        yPercent:-100,
        height:0
    });

})
