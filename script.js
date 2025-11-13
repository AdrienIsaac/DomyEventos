document.addEventListener("keydown", function(event) {
    // Comprobar si se presionó ALT + F12
      if (event.altKey && event.code === "F12") {
        document.body.style.backgroundImage = 
          `url('https://picsum.photos/1920/1080?random=${Date.now()}')`;

      }
    });
