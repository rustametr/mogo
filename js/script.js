let button1 = document.querySelectorAll('.service_arrow')[0];
let button2 = document.querySelectorAll('.service_arrow')[1];
let button3 = document.querySelectorAll('.service_arrow')[2];

let left_service_button = document.querySelectorAll('.service_slider_button')[0];
let right_service_button = document.querySelectorAll('.service_slider_button')[1];

let left_some_button = document.querySelectorAll('.some_of_work_button')[0];
let right_some_button = document.querySelectorAll('.some_of_work_button')[1];

let service_text_block1 = document.querySelectorAll('.service_slider_content')[0];
let service_text_block2 = document.querySelectorAll('.service_slider_content')[1];
let service_text_block3 = document.querySelectorAll('.service_slider_content')[2];

let some_text_block1 = document.querySelectorAll('.some_of_work_slider_contant')[0];
let some_text_block2 = document.querySelectorAll('.some_of_work_slider_contant')[1];
let some_text_block3 = document.querySelectorAll('.some_of_work_slider_contant')[2];

let text_place1 = document.querySelectorAll('.service_info_content')[0];
let text_place2 = document.querySelectorAll('.service_info_content')[1];
let text_place3 = document.querySelectorAll('.service_info_content')[2];

let nav_buttons_array = document.querySelectorAll('.header_nav_list_item a, .header_nav_burger_list_item a');

let burger_button = document.querySelector('.header_nav_burger_container');
let burger_list = document.querySelector('.header_nav_burger_list_container');

let adaptive_service_slider;
let adaptive_work_slider;

if(document.documentElement.clientWidth > 768){
    adaptive_service_slider = 51;
    adaptive_work_slider = 52.45;
}else{
    adaptive_service_slider = 76.5;
    adaptive_work_slider = 78.675;
}

console.log(adaptive_service_slider);

burger_button.addEventListener('click', function(){
    burger_button.classList.toggle('active_burger');
    burger_list.classList.toggle('active_burger_list');
});

for(let i = 0;i < nav_buttons_array.length; i++){
    nav_buttons_array[i].addEventListener('click', function(e){
        e.preventDefault();
        let block_id = nav_buttons_array[i].getAttribute('href');
        document.querySelector(''+block_id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        burger_button.classList.remove('active_burger');
        burger_list.classList.remove('active_burger_list');
    });
}

button1.addEventListener('click', function(e){
    if(text_place1.classList.contains('hidden')){
        text_place1.classList.remove('hidden');
        button1.classList.add('active_arrow');
        text_place2.classList.add('hidden');
        text_place3.classList.add('hidden');
        button2.classList.remove('active_arrow');
        button3.classList.remove('active_arrow');
    }else{
        text_place1.classList.add('hidden');
        button1.classList.remove('active_arrow');
        text_place2.classList.add('hidden');
        text_place3.classList.add('hidden'); 
        button2.classList.remove('active_arrow');
        button3.classList.remove('active_arrow');
    }
}); 

button2.addEventListener('click', function(e){
    if(text_place2.classList.contains('hidden')){
        text_place2.classList.remove('hidden');
        button2.classList.add('active_arrow');
        text_place1.classList.add('hidden');
        text_place3.classList.add('hidden');
        button1.classList.remove('active_arrow');
        button3.classList.remove('active_arrow');
    }else{
        text_place2.classList.add('hidden');
        button2.classList.remove('active_arrow');
        text_place1.classList.add('hidden');
        text_place3.classList.add('hidden'); 
        button1.classList.remove('active_arrow');
        button3.classList.remove('active_arrow');
    }
}); 

button3.addEventListener('click', function(e){
    if(text_place3.classList.contains('hidden')){
        text_place3.classList.remove('hidden');
        button3.classList.add('active_arrow');
        text_place2.classList.add('hidden');
        text_place1.classList.add('hidden');
        button2.classList.remove('active_arrow');
        button1.classList.remove('active_arrow');
    }else{
        text_place3.classList.add('hidden');
        button3.classList.remove('active_arrow');
        text_place2.classList.add('hidden');
        text_place1.classList.add('hidden'); 
        button2.classList.remove('active_arrow');
        button1.classList.remove('active_arrow');
    }
}); 

left_service_button.addEventListener('click', function(){
    if(service_text_block2.classList.contains('active')){
        service_text_block2.style.transform = 'translate(0,0)';
        service_text_block1.style.transform = 'translate(0,0)';
        service_text_block2.classList.remove('active');
        service_text_block1.classList.add('active');
    }else if(service_text_block3.classList.contains('active')){
        service_text_block2.style.transform = `translate(-${adaptive_service_slider}vw,0)`;
        service_text_block3.style.transform = `translate(-${adaptive_service_slider}vw,0)`;
        service_text_block3.classList.remove('active');
        service_text_block2.classList.add('active');
    }
});

right_service_button.addEventListener('click', function(){
    if(service_text_block1.classList.contains('active')){
        service_text_block2.style.transform = `translate(-${adaptive_service_slider}vw,0)`;
        service_text_block1.style.transform = `translate(-${adaptive_service_slider}vw,0)`;
        service_text_block2.classList.add('active');
        service_text_block1.classList.remove('active');
    }else if(service_text_block2.classList.contains('active')){
        service_text_block2.style.transform = `translate(-${adaptive_service_slider*2}vw,0)`;
        service_text_block3.style.transform = `translate(-${adaptive_service_slider*2}vw,0)`;
        service_text_block3.classList.add('active');
        service_text_block2.classList.remove('active');
    }
});

left_some_button.addEventListener('click', function(){
    if(some_text_block2.classList.contains('some_active')){
        some_text_block2.style.transform = 'translate(0,0)';
        some_text_block1.style.transform = 'translate(0,0)';
        some_text_block2.classList.remove('some_active');
        some_text_block1.classList.add('some_active');
    }else if(some_text_block3.classList.contains('some_active')){
        some_text_block2.style.transform = `translate(-${adaptive_work_slider}vw,0)`;
        some_text_block3.style.transform = 'translate(0,0)';
        some_text_block3.classList.remove('some_active');
        some_text_block2.classList.add('some_active');
    }
});

right_some_button.addEventListener('click', function(){
    if(some_text_block1.classList.contains('some_active')){
        some_text_block2.style.transform = `translate(-${adaptive_work_slider}vw,0)`;
        some_text_block1.style.transform = `translate(-${adaptive_work_slider}vw,0)`;
        some_text_block2.classList.add('some_active');
        some_text_block1.classList.remove('some_active');
    }else if(some_text_block2.classList.contains('some_active')){
        some_text_block2.style.transform = `translate(-${adaptive_work_slider*2}vw,0)`;
        some_text_block3.style.transform = `translate(-${adaptive_work_slider*2}vw,0)`;
        some_text_block3.classList.add('some_active');
        some_text_block2.classList.remove('some_active');
    }
});