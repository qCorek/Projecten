    const div = document.getElementById("movingDiv");
    let position = 0;
    let direction = 1;
    const step = 2; 
    const interval = 10; 

    function moveDiv() {
      position += step * direction; 
      div.style.left = position + "px"; 

    
      if (position > window.innerWidth - 50) {
        direction = -1; 
      } else if (position < 0) {
        direction = 1; 
      }
    }

    setInterval(moveDiv, interval); 