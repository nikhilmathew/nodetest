(function () {
    var jsonCircles = [
  { "x_axis": 30, "y_axis": 30, "radius": 10, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 15, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
 
var svgContainer = d3.select(".main-container").append("svg").attr("height", 400).attr("width", 400).style("border", "1px solid black");
var circleSelection = svgContainer.selectAll("circle")
    .data(jsonCircles)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
        return d.x_axis;
    })
    .attr("cy", function (d) {
        return d.y_axis;
    })
    .attr("r",function(d){
         return d.radius;
    })
    .style("fill",function (d) {
        return d.color;
    });



} ());
