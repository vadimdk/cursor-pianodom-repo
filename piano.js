//const btn = document.getElementById('buttons'); 
//const btnA = document.getElementById('buttonA');

document.addEventListener('keydown', function(event) {
    
    if ( event.code == 'KeyA') {
        console.log('keydown');
        
// document.addEventListener('keyup', function() {
//    btnA.style.width = '50px';
//    btnA.style.background = 'red'; 
//}, { once: true });
     document.getElementById('buttonA').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
      duration: 200,
      iterations: 1
      });
        
        console.log('keyup');
        audio.play();
  }  else if (event.code == 'KeyS') {
    const btnS = document.getElementById('buttonS');
        btnS.addEventListener('keyup', function() {
  btnS.style.width = '50px';
    btnS.style.background = 'red';
  }, { once: true });  
  
  } else if (event.code == 'KeyD') {
    console.log('D');
  } else if (event.code == 'KeyF') {
    console.log('F');
  } else if (event.code == 'KeyG') {
    console.log('G');
  } else if (event.code == 'KeyH') {
    console.log('H');
  } else if (event.code == 'KeyJ') {
    console.log('J');
  } else if (event.code == 'KeyK') {
    console.log('K');
  }
     
    });


//function changeButton (event) {
//
//const btn = document.querySelector('.button');
//    btn.style.width = '50px';
//    btn.style.background = 'red';
//
//}

const audio = document.getElementById("myAudio");
function playAudio() { 
  audio.play(); 
} 


// keydown keyup keypress
//document.addEventListener('keydown', function(event) {
//});