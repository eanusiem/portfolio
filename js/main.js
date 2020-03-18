// Scroll Button 
// Citation: https: www.w3schools.com/howto/howto_js_scroll_to_top.asp
mainbutton = document.querySelector(".scrollbutton");
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    mainbutton.style.display = "block";
	} else {
    mybutton.style.display = "none";
	}
}

function topFunction(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Attack on Titan Character Introductions
// Citation: https: www.sitepoint.com/community/t/hover-sound-on-text/146000/2
function PlaySound(index){
        var audio = document.getElementById("character"+index);
        audio.play();
}
function StopSound(index){
        var audio = document.getElementById("character"+index);
        audio.pause();
}

