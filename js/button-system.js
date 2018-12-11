window.addEventListener('load', function(){

    let button_app = document.getElementById("btn-app-settings");
    let app_wrapper = document.getElementById("wrapper");
    let btn_back = document.getElementById("btn-back");
   

    button_app.addEventListener('click', function(){

        let class_input = document.getElementById("input-first");
        let teacher_input = document.getElementById("input-second");
        let period_input = document.getElementById("input-third");
        let year_input = document.getElementById("input-fourth");
        let bg_chooser_box = document.getElementById("bg-chooser");
        let schedule_class_teacher = document.getElementById("class-teacher");
        let schedule_year = document.getElementById("year");
        let schedule = document.getElementById("schedule");

       
        if(class_input.value == ""){

            class_input.style.transition = "all .2s linear";
            class_input.style.borderBottom = "2px solid #d9534f";

        }else{

            class_input.style.transition = "all .2s linear";
            class_input.style.borderBottom = "2px solid #63c863";

        }
        
        if(teacher_input.value == ""){

            teacher_input.style.transition = "all .2s linear";
            teacher_input.style.borderBottom = "2px solid #d9534f";

        }else{

            teacher_input.style.transition = "all .2s linear";
            teacher_input.style.borderBottom = "2px solid #63c863";

        }

        if(period_input.value == ""){

            period_input.style.transition = "all .2s linear";
            period_input.style.borderBottom = "2px solid #d9534f";

        }else{

            period_input.style.transition = "all .2s linear";
            period_input.style.borderBottom = "2px solid #63c863";

        }

        if(year_input.value == ""){

            year_input.style.transition = "all .2s linear";
            year_input.style.borderBottom = "2px solid #d9534f";

        }else{

            year_input.style.transition = "all .2s linear";
            year_input.style.borderBottom = "2px solid #63c863";

        }

        if(color_set == null){

            bg_chooser_box.style.transition = "all .2s linear";
            bg_chooser_box.style.borderBottom = "2px solid #d9534f";

        }else{

            bg_chooser_box.style.transition = "all .2s linear";
            bg_chooser_box.style.borderBottom = "2px solid #63c863";

        }

        if(class_input.value !== "" && teacher_input.value !== "" && period_input.value !== "" && year_input.value !== "" && color_set !== null){

            app_wrapper.style.transform = "translateX(-50%)";
            schedule_class_teacher.innerHTML = '<p>'+class_input.value+' '+teacher_input.value+'</p>';
            schedule_year.innerHTML = '<p>'+year_input.value+'</p> <br> <p>obowiązuje od '+period_input.value+'</p>';
            schedule.style.backgroundColor = color_set;

        }


    }, false);

    btn_back.addEventListener('click', function(){

        app_wrapper.style.transform = "translate(0)";

    }, false);

}, false);