import React, { useEffect } from "react";
import * as d3 from "d3";
import { colors } from "../themes/colors";

function PieChart(props) {
  const { data, outerRadius, innerRadius, focused, index } = props;
  const marginValue = 5;
  const margin = {
    top: marginValue,
    right: marginValue,
    bottom: marginValue,
    left: marginValue,
  };
  const id = "pie-container" + index.toString();
  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;
  const value = [data.score, 100 - data.score];
  const vslyText = data.vsly === null ? "N/A" : data.vsly;
  const primaryColor = focused ? colors.skyBlue : colors.darkBlue;
  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.scaleOrdinal([primaryColor, colors.lightGrey]))
    .domain([0, value.length]);

  useEffect(() => {
    drawChart();
  }, [data, focused]);

  function drawChart() {
    d3.select("#" + id)
      .select("svg")
      .remove();

    const svg = d3
      .select("#" + id)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    svg
      .append("text")
      .text(value[0] + "%")
      .style("text-anchor", "middle")
      .attr("fill", primaryColor)
      .attr("font-size", "18px");

    svg
      .append("text")
      .text(vslyText)
      .style("text-anchor", "middle")
      .attr("fill", colors.grey)
      .attr("font-size", "11px")
      .attr("font-weight", "bold")
      .attr("transform", `translate(0, ${height / 8})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d);

    const arc = svg.selectAll().data(pieGenerator(value)).enter();

    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i));
  }

  return <div id={id} />;
}

export default PieChart;
