
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
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
    console.log(id);
  }     


console.log("vid1");
$("#vid1").attr("src", "https://www.youtube.com/embed/" +videoLinks[0]);
 $("#vid2").attr("src", "https://www.youtube.com/embed/" +videoLinks[1]);
  
  });