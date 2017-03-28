// Image modal code from: https://www.w3schools.com/howto/howto_css_modal_images.asp

// Get the modal
var modal = document.getElementById('img-modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('ball-img');
var img2 = document.getElementById('coat-img');
var img3 = document.getElementById('mtg-img');
var img4 = document.getElementById('catan-img');

var modalImg = document.getElementById("modal-img");

img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
