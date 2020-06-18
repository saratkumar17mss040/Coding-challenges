# Problem Opinion

- visualizing Correlation matrix is out of the scope of built-in way of doing it in plain vanilla javaScript.
- we can make the visualization from scratch but takes some time.
- I have represented the data in-terms of table format as one of the way of visualising
  correlation matrix is through tables.
- we can still do different visualization for different types of data using -[d3.js](https://d3js.org/)
- d3.js is a open source javaScript library for visualizing data.

## Additional resources and links for advance visualisation for given different data.

- [what is a correlation matrix ?](https://www.displayr.com/what-is-a-correlation-matrix/#:~:text=A%20correlation%20matrix%20is%20a,Create%20your%20own%20correlation%20matrix)
- [what is a Histogram ?](https://www.data-to-viz.com/graph/histogram.html)
- [what is a double Histogram ?](https://www.d3-graph-gallery.com/graph/histogram_double.html)
- [creating a simple csv data](https://code-maven.com/create-and-download-csv-with-javascript)

- Steps to follow

1. We need to create a csv data for the input.
2. Load the d3.js library or download the library.
   ```javascript
   <script src="https://d3js.org/d3.v5.min.js"></script>
   ```
3. Create a simple html file

   ```javascript
   <!DOCTYPE html>
   <meta charset="utf-8">

   <!-- Load d3.js -->
   <script src="https://d3js.org/d3.v4.js"></script>

   <!-- Create a div where the graph will take place -->
   <div id="my_dataviz"></div>
   ```

4. Code for creating the histogram

   ```javascript
   <script>
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

   // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

    // get the data - load your custom data here instead of the sample data
    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_doubleHist.csv", function(data) {

   // X axis: scale and draw:
   var x = d3.scaleLinear()
    .domain([-4,9])
    // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
    .range([0, width]);
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

   // set the parameters for the histogram
   var histogram = d3.histogram()
    .value(function(d) { return +d.value; })
    // I need to give the vector of value
    .domain(x.domain())
    // then the domain of the graphic
    .thresholds(x.ticks(40));
    // then the numbers of bins

   // And apply twice this function to data to get the bins.
   var bins1 = histogram(data.filter( function(d){return d.type === "variable 1"} ));
   var bins2 = histogram(data.filter( function(d){return d.type === "variable 2"} ));

   // Y axis: scale and draw:
   var y = d3.scaleLinear()
   .range([height, 0]);
   y.domain([0, d3.max(bins1, function(d) { return d.length; })]);
   // d3.hist has to be called before the Y axis obviously
   svg.append("g")
   .call(d3.axisLeft(y));

   // append the bars for series 1
   svg.selectAll("rect")
   .data(bins1)
   .enter()
   .append("rect")
   .attr("x", 1)
   .attr("transform", function(d) {
   return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
   .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
   .attr("height", function(d) { return height - y(d.length); })
   .style("fill", "#69b3a2")
   .style("opacity", 0.6)

   // append the bars for series 2
   svg.selectAll("rect2")
   .data(bins2)
   .enter()
   .append("rect")
   .attr("x", 1)
   .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
   .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
   .attr("height", function(d) { return height - y(d.length); })
   .style("fill", "#404080")
   .style("opacity", 0.6)

   // Handmade legend
   svg.append("circle").attr("cx",300).attr("cy",30).attr("r", 6).style("fill", "#69b3a2")
   svg.append("circle").attr("cx",300).attr("cy",60).attr("r", 6).style("fill", "#404080")
   svg.append("text").attr("x", 320).attr("y", 30).text("variable A")
   .style("font-size", "15px").attr("alignment-baseline","middle")
   svg.append("text").attr("x", 320).attr("y", 60).text("variable B")
   .style("font-size", "15px").attr("alignment-baseline","middle")
   });
   </script>
   ```