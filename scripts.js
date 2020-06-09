// const button = document.querySelector('button');

// button.addEventListener('click',function(){
//     const audio = document.querySelector('audio');
//     audio.play();
//     audio.currentTime=8;

// });

var global=0;
setInterval(function() {

    const array = ["https://images.unsplash.com/photo-1516967124798-10656f7dca28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"

]
var element = document.getElementById("container");
element.style.backgroundImage = 'url(' +array[global]+ ')';
global+=1;

if(global==array.length){
    global=0; 
}  
    }, 
    10000);

    function typeWrite(elemento){
        const textoArray= elemento.innerHTML.split('');
        elemento.innerHTML='';
        textoArray.forEach((letra,i)=>{
           setTimeout(function(){
            elemento.innerHTML+=letra;
           },100*i)
        });
    }
    var div = document.querySelector(".text");
    typeWrite(div);
