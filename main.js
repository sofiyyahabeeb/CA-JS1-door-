

let doorIsOpen = true;

function toggleDoor (){
    const door =document.getElementById('door');
if (doorIsOpen) {
    door.src = 'img/closedoor.jpg';
    doorIsOpen= false;
} else {
    door.src ='img/opendoor.jpg';
    doorIsOpen= true;
} 
}
