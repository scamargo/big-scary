var youtubeUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCPcWeTfcGe1PLIUlrlpXJ2gkhrcxg80i0&part=snippet&type=video&q=thebigscaryidea&order=date";
var videoLinks = [];  

var slideIndex = 1;
showDivs(slideIndex, "mySlides");
showDivs(slideIndex, "videoSlides")

function plusDivs(n) {
    showDivs(slideIndex += n,"mySlides");
}

function plusDivsVid(n) {
    showDivs(slideIndex += n,"videoSlides");
}

function showDivsPlusOne() {
    console.log('plus one');

    var x = document.getElementsByClassName("mySlides");
    if (slideIndex > x.length) {slideIndex = 1} 
    if (slideIndex < 1) {slideIndex = x.length} ;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";   
} 

setInterval(showDivsPlusOne, 4000);

function showDivs(n, slideClass) {
    var i;
    var x = document.getElementsByClassName(slideClass);
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}



$.getJSON(youtubeUrl, function(json) {
  for(var i=1;i<4;i++) { 
    var id = json["items"][i]["id"]["videoId"];
    videoLinks.push(id);
  }     


$("#vid1").attr("src", "https://www.youtube.com/embed/" +videoLinks[0]);
$("#vid2").attr("src", "https://www.youtube.com/embed/" +videoLinks[1]);
$("#vid3").attr("src", "https://www.youtube.com/embed/" +videoLinks[2]);
  
});