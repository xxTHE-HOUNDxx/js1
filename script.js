
const botDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
const closedDoorPath ='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
    
  
 const image1=document.getElementById('door1')
 const image2=document.getElementById('door2') 
 const image3=document.getElementById('door3')
 let numClosedDoors = 3
 const startButton = document.getElementById('start');
 let currentlyPlaying=true
 let openDoor1
 let openDoor2
 let openDoor3
 const randomChoreDoorGenerator =()=>{
   const choreDoor= Math.floor(Math.random()*3)

   if(choreDoor===0){
      openDoor1=botDoorPath
      openDoor2=beachDoorPath
      openDoor3=spaceDoorPath
   }else if(choreDoor===1){
      openDoor2=botDoorPath
      openDoor1=beachDoorPath
      openDoor3=spaceDoorPath
   }else{
      openDoor3=botDoorPath
      openDoor1=spaceDoorPath
      openDoor2=beachDoorPath
   }
 }
 
 image1.onclick =()=>{
  if (image1.src===closedDoorPath && currentlyPlaying){
    playDoor(openDoor1)
  }
  image1.setAttribute('src',openDoor1);
  
 }
  

 image2.onclick =()=>{
  if (image2.src===closedDoorPath && currentlyPlaying){
    playDoor(openDoor2)
   }
   image2.setAttribute('src',openDoor2);
   
    
 }

 

 image3.onclick =()=>{
  if (image3.src===closedDoorPath && currentlyPlaying){
    playDoor(openDoor3)
  }
   image3.setAttribute('src',openDoor3);
   
 }


  startButton.onclick =()=>{
    if(!currentlyPlaying){
      startRound()
    }
  
} 

 

 const gameOver=(status)=>{
   if (status==='win'){
     startButton.innerHTML='YOU WIN! Play again?'
   }else{
     startButton.innerHTML='Game over! Play again?'
   }
   currentlyPlaying=false
 }

 const isBot=(door)=>{
  if (door===botDoorPath){
    return true
  }else{
    return false
  }
 }

 const playDoor =(door)=>{
   numClosedDoors--;
   if (numClosedDoors===0){
     gameOver('win');
   }else if(isBot(door)){
     gameOver()

   }
 }

 const startRound=()=>{
    numClosedDoors=3
    image1.src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
    image2.src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
    image3.src='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
    startButton.innerHTML='Good luck!'
    currentlyPlaying=true
    randomChoreDoorGenerator()

 }
 startRound()


 
 

 
 
 




 

 

  
   
  







            
