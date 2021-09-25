$(function(){
    //패밀리사이트
    $("#family_link select").on("change", function(){
        let lnk=$(this).val();
        if(lnk) window.open(lnk);
    });

    //스크롤을 가장 위로
    $(".to-top").on("click", ()=>{
        $("html,body").animate({scrollTop:0},1000)
    });

    //스크롤 이벤트와 화살표 함수
    $(window).on("scroll", ()=>{
        let wct=$(window).scrollTop();
        const tTop=$(".to-top");
        wct > 500 ? tTop.fadeIn() : tTop.fadeOut();
        //로고 사이즈 바꾸기
        const hEAder=$("header");        
        wct > 200 ? hEAder.addClass("on") : hEAder.removeClass("on");
    });

});