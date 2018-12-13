document.addEventListener('DOMContentLoaded', function (event) {
  var margin = {top:10, right:10, bottom:90, left:20};
  var width = 800 - margin.left - margin.right;
  var height = 480 - margin.top - margin.bottom;
  var scaleWidth = 600;
  var magicSpacing = 170;

  var svg = d3.select('div.ausgaben').append('svg')
      .attr('width' , width + margin.left + margin.right)
      .attr('height' , height + margin.top + margin.bottom)
      .attr("transform", "translate("+ margin.left +","+ margin.top +")");

  var xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, scaleWidth]);
  var xAxis = d3.axisBottom(xScale);
  svg.append('g')
    .attr("class", "x axis")
    .attr("transform", "translate("+ magicSpacing +","+ height +")")
    .call(xAxis);


  d3.csv("/okf/finanzierung/ausgaben2017.csv").then(function(data) {

    var yScale = d3.scaleBand().rangeRound([0, height]);
    var yAxis = d3.axisLeft(yScale);

    yScale.domain(data.map(function(d) { return d.item; }));

    var yAxis_g = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+ magicSpacing+",0)")
        .call(yAxis)
        .selectAll("text");

    var tip = d3.tip()
        .attr('class', 'd3-tip n')
        .offset([-10, 0])
        .html(function(d) {
          return "<span>" + d.percentage + "% der Ausgaben gehen in " + d.item + "</span>";
        });

    svg.call(tip);

    var barHeight = height / data.length / 2;
    svg.selectAll('rect.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'one-bar')
      .attr('width', function (d, i) {
        return xScale(d.percentage);
      })
      .attr('height', function (d, i) {
        return barHeight;
      })
      .attr('x', function(d,i){
        return magicSpacing;
      })
      .attr('y', function(d, i) {
        return (i * (height/ data.length) + (barHeight / 2));
      })
      .attr('fill', '#382eff')
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  });
});
