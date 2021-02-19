import React from "react";
import { Grid } from "@material-ui/core";
import { FaThumbtack } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import { withStyles } from "@material-ui/core/styles";
import { colors } from "../themes/colors";

const sideBarStyle = () => ({
  sideBar: {
    width: "44px",
    height: "100vh",
    backgroundColor: colors.blackBlue,
  },
  paddingTop: {
    paddingTop: "48px",
  },
  sideIcon: {
    width: "20px",
    height: "24px",
    padding: "12px",
    color: colors.white,
  },
});

function SideBar(props) {
  const components = [
    FaThumbtack,
    IoStatsChartSharp,
    FaMailBulk,
    FaShapes,
    IoMdRefreshCircle,
  ];
  const { classes, handleSideIconClick, sideIconFocusedIndex } = props;

  return (
    <Grid className={classes.sideBar}>
      <Grid className={classes.paddingTop} />
      {components.map((Component, index) => (
        <Component
          key={index}
          className={classes.sideIcon}
          onClick={() => handleSideIconClick(index)}
          style={{
            backgroundColor: sideIconFocusedIndex === index ? colors.black : "",
          }}
        />
      ))}
    </Grid>
  );
}

export default withStyles(sideBarStyle)(SideBar);
