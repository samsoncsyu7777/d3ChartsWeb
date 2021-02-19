import BaseChart from "../BaseChart";
import classnames from "classnames";
import * as d3 from "d3";
import { colors } from "../../themes/colors";

import "./index.scss";

function drawAreaChart(props) {
  const { svgRef, data, xScale, yScale, width, height, strokeWidth } = props;

  const svg = d3.select(svgRef.current).select("g");
  const singleWidth = width / (data.length - 1);
  const line = d3
    .area()
    .curve(d3.curveCardinal)
    .x((d, index) => xScale(index))
    .y((d) => yScale(d.score));

  var curveFunc = d3
    .area()
    .curve(d3.curveCardinal)
    .x((d, index) => xScale(index))
    .y0(yScale(0))
    .y1((d) => yScale(d.score));

  svg
    .append("path")
    .datum(data)
    .attr("transform", `translate(${singleWidth},0)`)
    .attr("stroke-width", strokeWidth)
    .attr("class", classnames(["area-chart__stroke"]))
    .attr("d", line);

  svg
    .append("path")
    .datum(data)
    .attr("transform", `translate(${singleWidth},0)`)
    .attr("fill", "url(#gradient)")
    .attr("d", curveFunc);

  svg
    .selectAll("p")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "point")
    .attr("r", 8)
    .attr("cx", (d, index) => xScale(index))
    .attr("cy", (d) => yScale(d.score))
    .attr("class", classnames(["area-chart__circle"]))
    .attr("transform", `translate(${singleWidth},0)`);

  let label = svg.append("g").attr("text-anchor", "center").selectAll("text");

  label
    .data(data, (d) => d.score)
    .join((enter) =>
      enter
        .append("text")
        .attr("transform", `translate(${singleWidth - 10}, -20)`)
        .attr("y", (d) => yScale(d.score))
        .attr("x", (d, index) => xScale(index))
        .text((d) => d.score + "%")
        .style("font-size", 12)
    );

  svg
    .append("linearGradient")
    .attr("id", "gradient")
    .attr("gradientUnits", "userSpaceOnUse")
    .attr("x1", 0)
    .attr("y1", yScale(0))
    .attr("x2", 0)
    .attr("y2", yScale(height / 2))
    .selectAll("stop")
    .data([
      { offset: "0%", color: colors.lightBlue },
      { offset: "100%", color: colors.darkBlue },
    ])
    .enter()
    .append("stop")
    .attr("offset", function (d) {
      return d.offset;
    })
    .attr("stop-color", function (d) {
      return d.color;
    });
}

export default BaseChart(drawAreaChart);
