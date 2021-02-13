var svgWidth = 2000;
var svgHeight = 1750;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  d3.csv("../assets/data/data.csv").then(function(censusData) {
console.log (censusData)
    censusData.forEach(function(data) {
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
        // console.log(data)
  }); 
    var xLinearScale = d3.scaleLinear()
        .domain(d3.extent(censusData, state => state.poverty))
        .range([0, width]);

        var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(censusData, state => state.healthcare)])
        .range([height, 0]);

        var xAxis = d3.axisBottom(xLinearScale).ticks(5);
        var yAxis = d3.axisLeft(yLinearScale).ticks(6);

        chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      chartGroup.append("g")
        .call(yAxis);

      chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "16px")
        .attr("class", "axisText")
        .text("Healthcare Access Rate in state");

      chartGroup.append("text")
       .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
       .attr("class", "axisText")
       .text("State Poverty Rate");

      var circlesGroup = chartGroup.selectAll("circle")
        .data(censusData)
        .enter()
        .append("circle")
        .attr("cx", state => xLinearScale(state.poverty))
        .attr("cy", state => yLinearScale(state.healthcare))
        .attr("r", "10")
        .attr("fill", "gold")
        .attr("stroke-width", "1")
        .attr("stroke", "black")

      chartGroup.selectAll()
       .data(censusData)
       .enter()
       .append("text")
       .attr("x", d => xLinearScale(d.poverty))
       .attr("y", d => yLinearScale(d.healthcare))
       .text(d => d.abbr)
       .attr("font-size", "12")
       .style("fill", "black") 
       .classed("stateText", true)
       .attr("opacity", 1);

      var toolTip = d3.tip()
       .attr("class", "tooltip")
       .offset([80, -60])
       .html(function(d) {
        return (`${d.state} - ${d.abbr} <br> Healthcare Access Rate: ${d.healthcare} <br> State Poverty Rate: ${d.poverty}`);

        chartGroup.call(toolTip);

        circlesGroup.on("click", function(data) {
            toolTip.show(data, this);
          })

          .on("mouseout", function(data, index) {
            toolTip.hide(data);
          });
      });
  })

  // makeResponsive();

  // d3.select(window).on("resize", makeResponsive);
