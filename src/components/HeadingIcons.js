import React from "react";
import { Grid } from "@material-ui/core";
import { ImEqualizer } from "react-icons/im";
import { IoDownloadOutline } from "react-icons/io5";
import { FiPrinter } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";
import { withStyles } from "@material-ui/core/styles";
import { colors } from "../themes/colors";

const headingIconsStyle = () => ({
  headingBar: {
    display: "flex",
    paddingRight: "5px",
  },
  headingIcon: {
    width: "18px",
    height: "18px",
    padding: "12px",
    color: colors.white,
  },
});

function HeadingIcons(props) {
  const components = [
    ImEqualizer,
    IoDownloadOutline,
    FiPrinter,
    BsQuestionCircle,
    BsBoxArrowRight,
  ];
  const { classes, handleHeadingIconClick } = props;

  return (
    <Grid className={classes.headingBar}>
      {components.map((Component, index) => (
        <Component
          key={index}
          className={classes.headingIcon}
          onClick={() => handleHeadingIconClick(index)}
        />
      ))}
    </Grid>
  );
}

export default withStyles(headingIconsStyle)(HeadingIcons);
