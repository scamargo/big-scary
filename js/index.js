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
  slideIndex++;
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
  for(var i=0;i<4;i++) {
    var id = json["items"][i]["id"]["videoId"];
    videoLinks.push(id);
  }


$("#vid1").attr("src", "https://www.youtube.com/embed/" +videoLinks[0]);
$("#vid2").attr("src", "https://www.youtube.com/embed/" +videoLinks[1]);
$("#vid3").attr("src", "https://www.youtube.com/embed/" +videoLinks[2]);
$("#vid4").attr("src", "https://www.youtube.com/embed/" +videoLinks[3]);

});

/*
var dataset = (function () {
    var dataset = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json',
        'dataType': "json",
        'success': function (data) {
            dataset = data;
            }
    });
    return dataset;
})();
*/


var dataset = [
  {
    "Monthly": 12500,
    "UBI": 1500,
    "Ethnicity": "Asian"
  },
  {
    "Monthly": 4000,
    "UBI": 1000,
    "Ethnicity": "Asian"
  },
    {
    "Monthly": 8000,
    "UBI": 2500,
    "Ethnicity": "Asian"
  },
  {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "Asian"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "Asian"
  },
    {
    "Monthly": 3000,
    "UBI": 1000,
    "Ethnicity": "Asian"
  },
      {
    "Monthly": 16500,
    "UBI": 3000,
    "Ethnicity": "Asian"
  },
    {
    "Monthly": 4500,
    "UBI": 1500,
    "Ethnicity": "Asian"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "Asian"
  },
    {
    "Monthly": 8500,
    "UBI": 2500,
    "Ethnicity": "Asian"
  },
  {
    "Monthly": 12500,
    "UBI": 1500,
    "Ethnicity": "African American"
  },
  {
    "Monthly": 4000,
    "UBI": 1000,
   "Ethnicity": "African American"
  },
    {
    "Monthly": 8000,
    "UBI": 2500,
   "Ethnicity": "African American"
  },
  {
    "Monthly": 1500,
    "UBI": 500,
   "Ethnicity": "African American"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "African American"
  },
    {
    "Monthly": 3000,
    "UBI": 1000,
    "Ethnicity": "African American"
  },
      {
    "Monthly": 16500,
    "UBI": 3000,
     "Ethnicity": "African American"
  },
    {
    "Monthly": 4500,
    "UBI": 1500,
    "Ethnicity": "African American"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "African American"
  },
    {
    "Monthly": 8500,
    "UBI": 2500,
    "Ethnicity": "African American"
  },
  {
    "Monthly": 12500,
    "UBI": 1500,
    "Ethnicity": "Hispanic or Latin American"
  },
  {
    "Monthly": 4000,
    "UBI": 1000,
     "Ethnicity": "Hispanic or Latin American"
  },
    {
    "Monthly": 8000,
    "UBI": 2500,
     "Ethnicity": "Hispanic or Latin American"
  },
  {
    "Monthly": 1500,
    "UBI": 500,
     "Ethnicity": "Hispanic or Latin American"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
     "Ethnicity": "Hispanic or Latin American"
  },
    {
    "Monthly": 3000,
    "UBI": 1000,
     "Ethnicity": "Hispanic or Latin American"
  },
      {
    "Monthly": 16500,
    "UBI": 3000,
     "Ethnicity": "Hispanic or Latin American"
  },
    {
    "Monthly": 4500,
    "UBI": 1500,
     "Ethnicity": "Hispanic or Latin American"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
     "Ethnicity": "Hispanic or Latin American"
  },
    {
    "Monthly": 8500,
    "UBI": 2500,
     "Ethnicity": "Hispanic or Latin American"
  },
  {
    "Monthly": 12500,
    "UBI": 1500,
    "Ethnicity": "White"
  },
  {
    "Monthly": 4000,
    "UBI": 1000,
    "Ethnicity": "White"
  },
    {
    "Monthly": 8000,
    "UBI": 2500,
    "Ethnicity": "White"
  },
  {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "White"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "White"
  },
    {
    "Monthly": 3000,
    "UBI": 1000,
    "Ethnicity": "White"
  },
      {
    "Monthly": 16500,
    "UBI": 3000,
    "Ethnicity": "White"
  },
    {
    "Monthly": 4500,
    "UBI": 1500,
    "Ethnicity": "African American"
  },
    {
    "Monthly": 1500,
    "UBI": 500,
    "Ethnicity": "Native American"
  },
    {
    "Monthly": 8500,
    "UBI": 2500,
    "Ethnicity": "Native American"
  }
 ];


const w = 1200;
const h = 600;
const padding = 80;
const rad = 10;
const shiftL = 15;
const opac = 0.5;

const xScale = d3.scaleLinear()
  .domain([0,20500])
  .range([padding,w-padding]);

const yScale = d3.scaleLinear()
  .domain([0,4000])
// [243.1, 290.7]
  .range([h-padding, padding]);
// [740, 60]

// set up tool tips
  const tip = d3.tip().attr('class', 'd3-tip').html((d) =>
    d['Hispanic']);

// create svg
const svg = d3.select('#chart')
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "white")
    .attr("fill-opacity", "0.6");

// call tip within svg viz
svg.call(tip)

// Append items
svg.selectAll('circle')
  .data(dataset).enter().append('circle')
  .attr("class", "circle")
  .attr('cx', (d) => xScale(d['Monthly'] + Math.random(-1,1) * 1000)) // original
  .attr('cy', (d) => yScale(d['UBI'] + Math.random(-1,1) * 500))
  .attr('r', 10)
  .attr('fill-opacity', 0.5)
  .attr('fill', (d) => {
  if (d['Ethnicity'] === "White") {
      return '#166FDB'
    } else if (d['Ethnicity'] === "Hispanic or Latino") {
      return '#203042'
    } else if (d['Ethnicity'] === "African American") {
      return '#00A5A8'
    } else if (d['Ethnicity'] === "Native American") {
      return '#B34C2D'
    } else if (d['Ethnicity'] === "Asian / Pacific Islander") {
      return '#DB2716'
    } else {
      return '#F4D30C'
    }
  })

svg.selectAll('text')
  .data(dataset).enter().append('text')
  .attr('class', 'labels')
  //.text((d) => d['Monthly'])
  .attr('x', (d) => xScale(d['Monthly']) + 10) // original
  .attr('y', (d) => yScale(d['UBI']) + 5)
  .on('mouseover', tip.show)
  .on('mouseout', tip.hide)

const xAxis = d3.axisBottom(xScale)
  .ticks(6);

svg.append('g')
  .attr("transform", "translate(0," + (h - padding) + ")")
  .attr("stroke-width", "2")
  .style('font-size', '1.2em')
  .call(xAxis);

// add Title to graph
svg.append("text")
  .attr("transform",
    "translate(" + (w / 2) + " ," +
    (padding / 4) + ")")
  .style("text-anchor", "middle")
  .text("Current Income and UBI by Ethnicity")
  .style('font-size', '1.5em');

// label x-axis
svg.append("text")
  .attr("transform",
    "translate(" + (w / 2) + " ," +
    (h - padding / 4) + ")")
  .style("text-anchor", "middle")
  .attr("font-size","1.5em")
  .text("Current Monthly Income");

const yAxis = d3.axisLeft(yScale)
  .ticks(5)
  .tickFormat(d3.format(','));

svg.append('g')
  .attr('transform', 'translate(' + padding + ',0)')
  .attr('stroke-width',"2")
  .attr("font-size","1.2em")
  .call(yAxis);

// label y-axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", padding / 8)
  .attr("x", 0 - (0.40 * h))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .attr("font-size","1.5em")
  .text("Monthly Universal Basic Income");

// Legend WHITE
svg.append('circle')
  .attr('cx', (d) => w*.75)
  .attr('cy', (d) => h*.7)
  .attr('r', rad)
  .attr('fill', '#166FDB')
  .attr('fill-opacity', opac)

svg.append("text")
  .attr("transform",
    "translate(" + (w*.75 + shiftL) + " ," +
    (h*.7 + 5) + ")")
  .text("White");

// LAT
svg.append('circle')
  .attr('cx', (d) => w*.75)
  .attr('cy', (d) => h*.73)
  .attr('r', rad)
  .attr('fill', '#203042')
 .attr('fill-opacity', opac)

svg.append("text")
  .attr("transform",
    "translate(" + (w*.75  + shiftL) + " ," +
    (h*.73 + 5) + ")")
  .text("Hispanic or Latin American");

// Af Am
svg.append('circle')
  .attr('cx', (d) => w*.75)
  .attr('cy', (d) => h*.76)
  .attr('r', rad)
  .attr('fill', '#00A5A8')
 .attr('fill-opacity', opac)

svg.append("text")
  .attr("transform",
    "translate(" + (w*.75 + shiftL) + " ," +
    (h*.76 + 5) + ")")
  .text("African American");

// Nat Am
svg.append('circle')
  .attr('cx', (d) => w*.75)
  .attr('cy', (d) => h*.79)
  .attr('r', rad)
  .attr('fill', '#B34C2D')
 .attr('fill-opacity', opac)

svg.append("text")
  .attr("transform",
    "translate(" + (w*.75  + shiftL) + " ," +
    (h*.79 + 5) + ")")
  .text("Native American");

// Asian
svg.append('circle')
  .attr('cx', (d) => w*.75)
  .attr('cy', (d) => h*.82)
  .attr('r', rad)
  .attr('fill', '#DB2716')
 .attr('fill-opacity', opac)

svg.append("text")
  .attr("transform",
    "translate(" + (w*.75  + shiftL) + " ," +
    (h*.82 + 5) + ")")
  .text("Asian / Pacific Islander");

// Other
svg.append('circle')
  .attr('cx', (d) => w*.75)
  .attr('cy', (d) => h*.85)
  .attr('r', rad)
  .attr('fill', '#F4D30C')
 .attr('fill-opacity', opac)

svg.append("text")
  .attr("transform",
    "translate(" + (w*.75  + shiftL) + " ," +
    (h*.85 + 5) + ")")
  .text("Other");
