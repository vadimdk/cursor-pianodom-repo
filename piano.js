//const btn = document.getElementById('buttona'); 

document.addEventListener('keyup', function(event) {
    
    if ( event.code == 'KeyA') {
    console.log('A');
  }  else if (event.code == 'KeyS') {
    console.log('S');
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

const audio = document.getElementById("myAudio");
function playAudio() { 
  audio.play(); 
} 


// keydown keyup keypress
//document.addEventListener('keydown', function(event) {
//});