document.addEventListener('DOMContentLoaded', function (event) {
  developmentViz();
  incomeTypesViz();
  incomesViz();
  expenseViz();
});

function developmentViz() {
  var margin = {top:30, right:10, bottom:50, left:20};
  var width = 600 - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;
  var magicSpacing = 40;
  var scaleWidth = width - magicSpacing;

  var svg = d3.select('div.entwicklung').append('svg')
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+ (width + margin.left + margin.right) +' '+ (height + margin.top + margin.bottom))
      .attr('preserveAspectRatio','xMinYMin')
      .attr("transform", "translate("+ margin.left +","+ margin.top +")");

  d3.csv("/okf/finanzierung/entwicklung.csv").then(function(data) {
    data = data.map(function (d) {
      d.year = parseInt(d.year, 10);
      d.turnover = parseInt(d.turnover, 10);
      return d;
    });

    var xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year)).nice()
        .range([20, scaleWidth]);
    var xAxis = d3.axisBottom(xScale)
        .ticks(7)
        .tickFormat(d3.format("d"));

    svg.append('g')
      .attr("class", "x axis")
      .attr("transform", "translate("+ magicSpacing +","+ height +")")
      .call(xAxis);
    svg.append('svg:title').text("Entwicklung der Organisation anhand jährlicher Gesamteinnahmen");

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.turnover)]).nice()
        .range([height, margin.top]);
    var yAxis = d3.axisLeft(yScale)
        .ticks(6)
        .tickFormat(d3.formatPrefix(".1", 1e6));

    var yAxis_g = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + magicSpacing +",0)")
        .call(yAxis)
        .selectAll("text");

    var tip = d3.tip()
        .attr('class', 'd3-tip n')
        .offset([-10, 0])
        .html(function(d) {
          return "<span>" + d.turnover + "€ " + d.year +"</span>";
        });

    svg.call(tip);

    var line = d3.line().x(d => xScale(d.year) +  magicSpacing)
        .y(d => yScale(d.turnover));

    svg.append('svg:path')
      .attr('d', line(data))
      .attr('stroke', '#382eff')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    svg.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 4)
      .attr("cx", function(d) {
        return xScale(d.year) + magicSpacing;
      })
      .attr("cy", function(d) { return yScale(d.turnover); })
      .style("stroke","#382eff")
      .style("stroke-width", 2)
      .style("fill", "white")
      .on('mouseover', function(d, i) {
        d3.select(this).transition().attr('r', 5).style('fill', "#382eff");
        tip.show(d, this);
      })
      .on('mouseout', function (d, i) {
        d3.select(this).transition().attr('r', 4).style('fill', "white");
        tip.hide(d);
      });
  });
}

function incomesViz() {
  //incomesHelper('div.einnahmen', '/okf/finanzierung/einnahmen.csv');
  incomesHelper('div.income-donations', '/okf/finanzierung/einnahmen-spenden.csv');
  incomesHelper('div.income-institutions', '/okf/finanzierung/einnahmen-institutionen.csv');
  incomesHelper('div.income-companies', '/okf/finanzierung/einnahmen-unternehmen.csv');
  incomesHelper('div.income-services', '/okf/finanzierung/einnahmen-dienstleistungen.csv');
}

function incomesHelper (containerSelector, dataPath) {
  var margin = {top:50, right:20, bottom:50, left:20};
  var width = 650 - margin.left - margin.right;
  var height = 450 - margin.top - margin.bottom;
  var magicSpacing = 210;
  var scaleWidth = width - magicSpacing;

  var svg = d3.select(containerSelector).append('svg')
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+ (width + margin.left + margin.right) +' '+ (height + margin.top + margin.bottom))
      .attr('preserveAspectRatio','xMinYMin')
      .attr("transform", "translate("+ margin.left +","+ margin.top +")");

  d3.csv(dataPath).then(function(data) {
    var sumAmount = data.reduce(function (sum, d) {
      return sum + parseInt(d.amount, 10);
    }, 0);
    data = data.map(function (d) {
      d.percentage = (d.amount / sumAmount * 100).toFixed(1);
      return d;
    });
    data = data.sort((a, b) => b.amount - a.amount);
    svg.append('svg:title').text("Aufschlüsselung der Einnahmen durch " + data[0].category);
    //data = data.slice(0,9);

    var xScale = d3.scaleLinear()
        .domain([0, 65])
        .range([0, scaleWidth]);
    var xAxis = d3.axisBottom(xScale).tickFormat(function (d) { return d + "%"});
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
          return "<span>" + d.amount + "€ von " + d.item + " ("+ d.percentage + "% aller " + d.category + ")</span>";
        });

    svg.call(tip);

    var barHeight = 15;
    var countData = data.length;
    var barOffset = function () {
      if (countData < 10) {
        return barHeight;
      } else {
        return barHeight / 2;
      }
    }();

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
        return i * Math.floor(height/ countData) + barOffset;
      })
      .attr('fill', '#382eff')
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  });
}

function incomeTypesViz() {
  var margin = {top:20, right:10, bottom:50, left:20};
  var width = 650 - margin.left - margin.right;
  var height = 400 - margin.top - margin.bottom;
  var magicSpacing = 230;
  var scaleWidth = width - magicSpacing;

  var svg = d3.select('div.einnahmen-kategorien').append('svg')
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+ (width + margin.left + margin.right) +' '+ (height + margin.top + margin.bottom))
      .attr('preserveAspectRatio','xMinYMin')
      .attr("transform", "translate("+ margin.left +","+ margin.top +")");

  var xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, scaleWidth]);
  var xAxis = d3.axisBottom(xScale).tickFormat(function (d) { return d + "%"});
  svg.append('g')
    .attr("class", "x axis")
    .attr("transform", "translate("+ magicSpacing +","+ height +")")
    .call(xAxis);

  d3.csv("/okf/finanzierung/einnahmen-kategorien.csv").then(function(data) {
    var yScale = d3.scaleBand().rangeRound([0, height]);
    var yAxis = d3.axisLeft(yScale);
    yScale.domain(data.map(function(d) { return d.category; }));

    svg.append('svg:title').text("Aufschlüsselung der Gesamteinnahmen nach Kategorie");

    var yAxis_g = svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + magicSpacing +",0)")
        .call(yAxis)
        .selectAll("text");

    var tip = d3.tip()
        .attr('class', 'd3-tip n')
        .offset([-10, 0])
        .html(function(d) {
          return "<span>" + d.amount + "€ durch " + d.category + " (" + d.percentage + "% der Gesamteinnahmen)</span>";
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
  var width = 650 - margin.left - margin.right;
  var height = 480 - margin.top - margin.bottom;
  var magicSpacing = 170;
  var scaleWidth = width - magicSpacing;

  var svg = d3.select('div.ausgaben').append('svg')
      .attr("width", '100%')
      .attr("height", '100%')
      .attr('viewBox','0 0 '+ (width + margin.left + margin.right) +' '+ (height + margin.top + margin.bottom))
      .attr('preserveAspectRatio','xMinYMin')
      .attr("transform", "translate("+ margin.left +","+ margin.top +")");

  var xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, scaleWidth]);
  var xAxis = d3.axisBottom(xScale).tickFormat(function (d) { return d + "%"});;
  svg.append('g')
    .attr("class", "x axis")
    .attr("transform", "translate("+ magicSpacing +","+ height +")")
    .call(xAxis);

  d3.csv("/okf/finanzierung/ausgaben.csv").then(function(data) {
    var yScale = d3.scaleBand().rangeRound([0, height]);
    var yAxis = d3.axisLeft(yScale);

    yScale.domain(data.map(function(d) { return d.item; }));
    svg.append('svg:title').text("Aufschlüsselung der Gesamtausgaben");

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
