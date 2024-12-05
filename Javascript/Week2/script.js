   const div = document.getElementById("movingDiv");
    let position = 0; 
    const step = 2; 
    const interval = 10; 

    function moveDiv() {
      position += step; 
      div.style.left = position + "px"; 
      if (position > window.innerWidth) {
        position = -50; 
      }
    }

    setInterval(moveDiv, interval); 