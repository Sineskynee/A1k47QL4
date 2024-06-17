document.addEventListener('DOMContentLoaded', function() {
    
    var avt =  [
        'url("../footage/hocsinh_footage/1.png")',
        'url("../footage/hocsinh_footage/2.png")',
        'url("../footage/hocsinh_footage/3.png")',
        'url("../footage/hocsinh_footage/4.jpg")',
        'url("../footage/hocsinh_footage/5.jpg")',
        'url("../footage/hocsinh_footage/6.jpeg")',
        'url("../footage/hocsinh_footage/7.jpg")',
        'url( "../footage/hocsinh_footage/8.png")',
        'url("../footage/hocsinh_footage/9.jpg")',
        'url("../footage/hocsinh_footage/10.jpg")',
    ];
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var avt_right = document.getElementById("avt_right");
    var avt_left = document.getElementById("avt_left");
    var avt_main = document.getElementById("avt_main");
    var avt_right_idx = 1;
    var avt_left_idx = avt.length-1;
    var avt_main_idx = 0;

    next.addEventListener('click', function(){ 
        avt_left_idx = (avt_left_idx+1) % avt.length;
        avt_main_idx = (avt_main_idx+1) % avt.length;
        avt_right_idx = (avt_right_idx+1) % avt.length;

        avt_left.style.backgroundImage = avt[avt_left_idx];
        avt_main.style.backgroundImage = avt[avt_main_idx];
        avt_right.style.backgroundImage = avt[avt_right_idx];
    });

    prev.addEventListener('click', function(){
        if(avt_left_idx == 0){
            avt_left_idx = avt.length-1;
        }else{
            avt_left_idx = (avt_left_idx-1) % avt.length;
        }
        if(avt_main_idx == 0){
            avt_main_idx = avt.length-1;
        }else{
            avt_main_idx = (avt_main_idx-1) % avt.length;
        }
        if(avt_right_idx == 0){
            avt_right_idx = avt.length-1;
        }else{
            avt_right_idx = (avt_right_idx-1) % avt.length;
        }

        avt_left.style.backgroundImage = avt[avt_left_idx];
        avt_main.style.backgroundImage = avt[avt_main_idx];
        avt_right.style.backgroundImage = avt[avt_right_idx];
    });


    
});