$(function(){
    //패밀리사이트
    $("#family_link select").on("change", function(){
        let lnk=$(this).val();
        if(lnk) window.open(lnk);
    });

    //탑팝업 닫기 버튼
    $(".top-banner i").on("click", function(){
        $(".top-banner").slideUp();
    });

    //메인 슬라이드
    let mainSlider=$(".visual-slider").slick({
        arrows:false,
        //autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });
    
    let slideDots=$(".slick-dots li");
    let slideItem=$(".visual-slider figure");

    mainSlider.on("afterChange", function(event,slick,current){
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current+1).addClass("on").siblings().removeClass("on");
    });

    let slidePrev=$("#main-visual i.xi-angle-left-thin");
    let slideNext=$("#main-visual i.xi-angle-right-thin");
    
    slidePrev.on("click", function(){
        mainSlider.slick("slickPrev")
    });
    slideNext.on("click", function(){
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function(){
        let idx=$(this).index();
        mainSlider.slick("slickGoTo", idx)
    });

    //content-slider
    let contentSlider01=$(".content-slider").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        //rows:2,
        //slidesPerRow:3,
    });  

    let contentPrev=$("#content01 i.xi-angle-left-thin");
    let contentNext=$("#content01 i.xi-angle-right-thin");
    
    contentPrev.on("click", function(){
        contentSlider01.slick("slickPrev")
    });
    contentNext.on("click", function(){
        contentSlider01.slick("slickNext")
    });

    let contentItem=$(".content-slider figure");
    contentItem.eq(4).addClass("on")
    contentSlider01.on("afterChange", function(event,slick,current){
        contentItem.eq(current+4).addClass("on").siblings().removeClass("on");
    });

});