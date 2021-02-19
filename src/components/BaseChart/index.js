import React, { useEffect } from "react";
import * as d3 from "d3";
import classnames from "classnames";
import drawAxis from "./axis";
import "./index.scss";

const BaseChart = (drawChart) => {
  function Chart(props) {
    const svgRef = React.createRef();
    const { axisProps, data, svgProps, scaleBandPadding, ...restProps } = props;
    const { margin, width, height, svgContainerClass } = svgProps;
    const yMaxValue = d3.max(data, (d) => d.score);

    let xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d, index) => index))
      .padding(scaleBandPadding);

    let yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    useEffect(() => {
      flushChart();
      draw();
    });

    function flushChart() {
      d3.select(svgRef.current).selectAll("*").remove();
    }

    function draw() {
      d3.select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      drawAxis({
        ...svgProps,
        data,
        svgRef,
        xScale,
      });

      drawChart({
        svgRef,
        data,
        xScale,
        yScale,
        ...svgProps,
        ...restProps,
      });
    }

    return (
      <div className="base__container">
        <svg ref={svgRef} className={classnames(svgContainerClass)} />
      </div>
    );
  }

  Chart.defaultProps = {
    scaleBandPadding: -1,
  };

  return Chart;
};
export default BaseChart;
