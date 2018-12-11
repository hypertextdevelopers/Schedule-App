window.addEventListener('load', function(){

    let download_btn = document.getElementById("btn-download-settings");

    download_btn.addEventListener('click', function(){

       window.print();

    });

}, false);