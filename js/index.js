
var slideIndex = 1;
var videoSlideIndex = 1;
showDivs(slideIndex, "mySlides");
showDivs(videoSlideIndex, "videoSlides")

function plusDivs(n) {
    showDivs(slideIndex += n,"mySlides");
}

function plusDivsVid(n) {
    showDivs(slideIndex += n,"videoSlides");
}


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

var youtubeUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC7u-8ToPtdxpzIuQMBOYRywIZW3Dj-JjM&part=snippet&type=video&q=thebigscaryidea&order=date";

var videoLinks = [];

$.getJSON(youtubeUrl, function(json) {
  console.log(JSON.stringify(json));
  for(var i=1;i<3;i++) { 
    var id = json["items"][i]["id"]["videoId"];
    videoLinks.push(id);
  }     


console.log("videolink1: "+ videoLinks[0]);
$("#vid1").attr("src", "https://www.youtube.com/embed/" +videoLinks[0]);
$("#vid2").attr("src", "https://www.youtube.com/embed/" +videoLinks[1]);
  
});