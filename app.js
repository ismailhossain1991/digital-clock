const clock = document.querySelector('.clock');




setInterval(function(){
    
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();


let time = 'Am';
if(h == 0){
h = 12;
}if(h > 12){
h = h -12;
time = 'Pm';
}

h = h < 10 ? '0' + h : h;
m = m < 10 ? '0' + m : m;
s = s < 10 ? '0' + s : s;


   clock.innerHTML = `${h}:${m}:${s} ${time}`;
}, 1000); 
