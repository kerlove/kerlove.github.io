
window.alert('works') 

function play(idPlayer, control) {
    var player = document.querySelector('#' + idPlayer);
    
    if (player.paused) {
        player.play();
       
    } else {
        player.pause(); 
      
    }
}





