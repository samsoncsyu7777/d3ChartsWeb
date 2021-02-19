import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import HeadingIcons from "./HeadingIcons";
import { withStyles } from "@material-ui/core/styles";
import { colors } from "../themes/colors";

const headingStyle = (theme) => ({
  heading: {
    display: "flex",
    flex: 1,
    height: "45px",
    backgroundColor: colors.blue,
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "90px",
    },
  },
  headingTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: colors.white,
    paddingLeft: "60px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5px",
    },
  },
  flexEnd: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loginText: {
    fontSize: "13px",
    fontWeight: 600,
    color: colors.skyBlue,
    borderRightWidth: 2,
    borderColor: colors.skyBlue,
    minWidth: "140px",
  },
  verticalLine: {
    borderWidth: 1,
    borderColor: colors.skyBlue,
    height: "25px",
    paddingLeft: "15px",
  },
});

function Heading(props) {
  const { classes, handleHeadingIconClick } = props;

  return (
    <Grid container className={classes.heading}>
      <Typography className={classes.headingTitle}>Diagnostic Tool</Typography>
      <Grid className={classes.flexEnd}>
        <Typography className={classes.loginText}>
          Logged in as General User
        </Typography>
        <Box borderRight={1} className={classes.verticalLine} />
        <HeadingIcons handleHeadingIconClick={handleHeadingIconClick} />
      </Grid>
    </Grid>
  );
}

export default withStyles(headingStyle)(Heading);
