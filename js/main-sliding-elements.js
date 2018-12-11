window.addEventListener('load', function(){

    let main_figure = document.getElementById("main-figure");
    let main_h3 = document.getElementById("main-h3");
    let main_header = document.getElementById("main-header");
    let main_btn = document.getElementById("main-btn");

    main_figure.style.transition = "all .5s linear";
    main_figure.style.transform = "translateX(0)";
    main_figure.style.opacity = 1;

    function slide1(){

        let s = 2;

        let slide1_interval = window.setInterval(function(){

            if(s <= 0){

                main_h3.style.opacity = 1;
                main_h3.style.transform = "translateY(0px)";
                clearInterval(slide1_interval);

            }else{

                s--;

            }

        }, 100);

    }

    function slide2(){

        let s = 5;

        let slide2_interval = window.setInterval(function(){

            if(s <= 0){

                main_header.style.opacity = 1;
                main_header.style.transform = "translateY(0px)";
                clearInterval(slide2_interval);

            }else{

                s--;

            }

        }, 100);

    }

    function slide3(){

        let s = 8;

        let slide3_interval = window.setInterval(function(){

            if(s <= 0){

                main_btn.style.opacity = 1;
                main_btn.style.transform = "translateY(0px)";
                clearInterval(slide3_interval);

            }else{

                s--;

            }

        }, 100);

    }

    slide1();
    slide2();
    slide3();

});