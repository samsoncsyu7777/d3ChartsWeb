import * as d3 from "d3";
import classnames from "classnames";

function drawAxis(config) {
  const { height, data, svgRef, xScale } = config;

  const svg = d3.select(svgRef.current).select("g");

  svg
    .append("g")
    .attr("class", classnames(["base__axis base__axis-label"]))
    .attr("transform", `translate(0,${height + 15})`)
    .call(
      d3
        .axisBottom(xScale)
        .tickFormat((i) => data[i].date)
        .tickSizeOuter(0)
    );
}

export default drawAxis;
