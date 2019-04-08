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
      document.getElementById('buttonF').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioF.play();
    console.log('F');
  } else if (event.code == 'KeyG') {
      document.getElementById('buttonG').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioG.play();
    console.log('G');
  } else if (event.code == 'KeyH') {
      document.getElementById('buttonH').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioH.play();
    console.log('H');
  } else if (event.code == 'KeyJ') {
      document.getElementById('buttonJ').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioJ.play();
    console.log('J');
  } else if (event.code == 'KeyK') {
      document.getElementById('buttonK').animate([
         {transform: 'translateY(0px)'},
         {transform: 'translateY(10px)'}
     ], { 
          duration: 300,
          iterations: 1
        });
        
        audioK.play();
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

const audioF = document.getElementById("myAudio-F");
function playAudio() { 
  audioF.play(); 
} 

const audioG = document.getElementById("myAudio-G");
function playAudio() { 
  audioG.play(); 
} 

const audioH = document.getElementById("myAudio-H");
function playAudio() { 
  audioH.play(); 
} 

const audioJ = document.getElementById("myAudio-J");
function playAudio() { 
  audioJ.play(); 
} 

const audioK = document.getElementById("myAudio-K");
function playAudio() { 
  audioK.play(); 
} 
