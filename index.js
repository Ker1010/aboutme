
    
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    var clicks = 0;
    var isAnimating = false;

  function onClick() {
    if (isAnimating) {
      return;
  }
    clicks += 1;

  if (clicks > 2) {
    document.getElementById('bigpic').style.display='block';
    let id = null;
  const elem = document.getElementById("bigpic");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 10000000) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + 'px';
      isAnimating = true;
    setTimeout(function() {
      isAnimating = false;
  }, 10000000);
    }


  }
  }
};