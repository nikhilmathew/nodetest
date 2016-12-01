d3.select(".main-container")
        .selectAll("p")
        .data(theData)
        .enter()
        .append("p")
        .text(function (d, i) {

            return "i= " + i + "data=" + d;
        });

    var circleRadii = [40, 20, 10];
    var svgContainer = d3.select(".main-container")
        .append("svg")
        .attr("width", 400)
        .attr("height", 400);
    var circles = svgContainer.selectAll("circle")
        .data(circleRadii)
        .enter()
        .append("circle");
    var circleAttributes = circles.attr("cx",200)
    .attr("cy",200).attr("r",function(d){ return d*5;})
    .style("fill",function(d){
        if(d===40) {returnColor="green"}
        else if(d===20){returnColor ="yellow" }
        else {returnColor = "blue"}
        return returnColor;  
    }); 

    var theData = ["hi", "my", "name", "is", "nikhil"];
    d3.select(".main-container")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100)
        .append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 50)
        .style("fill", "green");
    var spaceCircles = [30, 70, 110];
    d3.select(".main-container")
    .append("svg")
    .attr("height", 200)
    .attr("width", 200)