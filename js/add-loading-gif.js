window.addEventListener('load', function(){

  
  let gif_box = document.getElementById("gif-box"),
      s = 5,
      wrapper_left = document.getElementById("left"),
      app_h1 = document.getElementById("app-h1"),
      app_break_line = document.getElementById("break-line"),
      input_first = document.getElementById("input-box-first"),
      input_second = document.getElementById("input-box-second"),
      input_third = document.getElementById("input-box-third"),
      input_fourth = document.getElementById("input-box-fourth"),
      bg_chooser = document.getElementById("bg-chooser"),
      btn = document.getElementById("btn-app-settings");

  let gif_interval = window.setInterval(function(){

    if(s <= 0){

        gif_box.style.opacity = "0";
        gif_box.style.visibility = "hidden";

        app_h1.style.transition = "all .5s linear";
        app_h1.style.opacity = 1;
        app_h1.style.transform = "translateY(0)";
        
        app_break_line.style.transition = "all 1s linear";
        app_break_line.style.transform = "translateX(0)";

        slide_input_first();
        slide_input_second();
        slide_input_third();
        slide_input_fourth();
        slide_bg_chooser();
        slide_btn();

    }
    
    if( s <= -1){

        wrapper_left.removeChild(gif_box);
        clearInterval(gif_interval);

    }else{

        s--;
    
    }

  },1000);

  function slide_input_first(){

    let s = 3;

    let input_interval = window.setInterval(function(){

        if(s <= 0){

            input_first.style.opacity = 1;
            input_first.style.transform = "translateY(0)";
            clearInterval(input_interval);

        }else{

            s--;

        }

    },100);

  }

  function slide_input_second(){

    let s = 5;

    let input_interval = window.setInterval(function(){

        if(s <= 0){

            input_second.style.opacity = 1;
            input_second.style.transform = "translateY(0)";
            clearInterval(input_interval);

        }else{

            s--;

        }

    },100);

  }

  function slide_input_third(){

    let s = 7;

    let input_interval = window.setInterval(function(){

        if(s <= 0){

            input_third.style.opacity = 1;
            input_third.style.transform = "translateY(0)";
            clearInterval(input_interval);

        }else{

            s--;

        }

    },100);

  }

  function slide_input_fourth(){

    let s = 9;

    let input_interval = window.setInterval(function(){

        if(s <= 0){

            input_fourth.style.opacity = 1;
            input_fourth.style.transform = "translateY(0)";
            clearInterval(input_interval);

        }else{

            s--;

        }

    },100);

  }

  function slide_bg_chooser(){

    let s = 11;

    let bg_interval = window.setInterval(function(){

        if(s <= 0){

            bg_chooser.style.opacity = 1;
            bg_chooser.style.transform = "translateY(0)";
            clearInterval(bg_interval);

        }else{

            s--;

        }

    },100);

  }

  function slide_btn(){

    let s = 13;

    let btn_interval = window.setInterval(function(){

        if(s <= 0){

            btn.style.opacity = 1;
            btn.style.transform = "translateY(0)";
            clearInterval(btn_interval);

        }else{

            s--;

        }

    },100);

  }

}, false);