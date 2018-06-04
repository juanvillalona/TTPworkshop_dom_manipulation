function myFunction(e){
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }

    var say = ("You Typed: " + String.fromCharCode(keynum));
    
    document.getElementById("change").innerHTML = say;
  }

