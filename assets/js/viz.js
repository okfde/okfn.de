document.addEventListener('DOMContentLoaded', function (event) {
  incomeTypesViz();
  incomesViz();
  expenseViz();
});

function incomesViz() {
  var margin = {top:50, right:10, bottom:50, left:20};
  var width = 800 - margin.left - margin.right;
  var height = 390 - margin.top - margin.bottom;
  var scaleWidth = 500;
  var magicSpacing = 210;

  var svg = d3.select('div.einnahmen').append('svg')
      .attr('width' , width + margin.left + margin.right)
      .attr('height' , height + margin.top + margin.bottom)
      .attr("transform", "translate("+ margin.left +","+ margin.top +")");

  d3.csv("/okf/finanzierung/einnahmen.csv").then(function(data) {
    var sumAmount = data.reduce(function (sum, d) {
      return sum + parseInt(d.amount, 10);
    }, 0);
    data = data.map(function (d) {
      d.percentage = (d.amount / sumAmount * 100).toFixed(1);
      return d;
    });
    data = data.sort((a, b) => b.amount - a.amount);
    data = data.slice(0,9);

    var xScale = d3.scaleLinear()
        .domain([0, 50])
        .range([0, scaleWidth]);
    var xAxis = d3.axisBottom(xScale);
    svg.append('g')
      .attr("class", "x axis")
      .attr("transform", "translate("+ magicSpacing +","+ height +")")
      .call(xAxis);

    var yScale = d3.scaleBand().rangeRound([0, height]);
    var yAxis = d3.axisLeft(yScale);
    yScale.domain(data.map(function(d) { return d.item; }));

    var yAxis_g = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + magicSpacing +",0)")
        .call(yAxis)
        .selectAll("text");

    var tip = d3.tip()
        .attr('class', 'd3-tip n')
        .offset([-10, 0])
        .html(function(d) {
          return "<span>" + d.amount + " Euro ("+ d.percentage + "%) von " + d.item + " (" + d.category + ")</span>";
        });

    svg.call(tip);

    var barHeight = 15;
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
        return (i * (barHeight * 2.13) + (10));
      })
      .attr('fill', '#382eff')
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  });
}



function incomeTypesViz() {
  var margin = {top:20, right:10, bottom:50, left:20};
  var width = 900 - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;
  var scaleWidth = 500;
  var magicSpacing = 230;

  var svg = d3.select('div.einnahmen-kategorien').append('svg')
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

  d3.csv("/okf/finanzierung/einnahmen-kategorien.csv").then(function(data) {
    var yScale = d3.scaleBand().rangeRound([0, height]);
    var yAxis = d3.axisLeft(yScale);
    yScale.domain(data.map(function(d) { return d.category; }));

    var yAxis_g = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + magicSpacing +",0)")
        .call(yAxis)
        .selectAll("text");

    var tip = d3.tip()
        .attr('class', 'd3-tip n')
        .offset([-10, 0])
        .html(function(d) {
          return "<span>" + d.amount + " Euro durch " + d.category + " (" + d.percentage + "%)</span>";
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
}

function expenseViz() {
  var margin = {top:10, right:10, bottom:50, left:20};
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

  d3.csv("/okf/finanzierung/ausgaben.csv").then(function(data) {
    var yScale = d3.scaleBand().rangeRound([0, height]);
    var yAxis = d3.axisLeft(yScale);

    yScale.domain(data.map(function(d) { return d.item; }));

    var yAxis_g = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+ magicSpacing +",0)")
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
}
