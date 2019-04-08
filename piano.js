//const btn = document.getElementById('buttons'); 
//const btnA = document.getElementById('buttonA');

document.addEventListener('keydown', function(event) {
    
    if ( event.code == 'KeyA') {
        
     document.getElementById('buttonA').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioA.play();
        console.log('A');
  }  else if (event.code == 'KeyS') {
      document.getElementById('buttonS').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioS.play();
    
       console.log('S');
  } else if (event.code == 'KeyD') {
      document.getElementById('buttonD').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioD.play();
      
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




const audioA = document.getElementById("myAudio-A");
function playAudio() { 
  audioA.play(); 
} 

const audioS = document.getElementById("myAudio-S");
function playAudio() { 
  audioS.play(); 
} 

const audioD = document.getElementById("myAudio-D");
function playAudio() { 
  audioD.play(); 
} 

