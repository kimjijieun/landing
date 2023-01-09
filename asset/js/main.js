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

        // console.log(xVal+'//'+yVal);
        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })
        
    })


    // 호버시 view생김
    $('.sc-work .work-area .work-item').mouseover(function(){

        gsap.to('.cursor .view',{
            opacity:1,
            visibility: 'visible'
        })

        // gsap.to('.work-area .view-box',{
        //     transform: 'translateY(-100)'
        // })
    })
    $('.sc-work .work-area .work-item').mouseleave(function(){

        gsap.to('.cursor .view',{
            opacity:0,
            visibility: 'hidden'
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
    

    // gsap.from('.sc-intro',{
    //     scrollTrigger:{
    //         trigger:".sc-intro",
    //         start:"0% 0%",
    //         end: "100% 0%",
    //         markers:true, //좌표표시
    //         scrub:0,
    //     },
    //     yPercent:-20,
    // })

    gsap.to('.sc-intro .intro-img',{

        scrollTrigger:{
            trigger:".sc-intro",
            start:"0% 0%",
            end: "100% 0%",
            markers:true, //좌표표시
            scrub:0,
        },
        yPercent:20,
    });
    
    // gsap.to('.sc-intro .intro-img',{

    //     scrollTrigger:{
    //         trigger:".sc-intro",
    //         start:"top 80%",
    //         end: "bottom top",
    //         markers:true, //좌표표시
    //         scrub:0,
    //     },
    //     yPercent:20,
    // });



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
            // markers:true, //좌표표시
            scrub:1,
        },
        display:'none',
        height:0,
        // duration: 3
    });
})
