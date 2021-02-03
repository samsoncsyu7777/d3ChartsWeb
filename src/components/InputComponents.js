import React from "react";
import {
  Box,
  Button,
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { theme as myTheme } from "../themes/theme";

const inputDimension = 4;

const myInputStyles = makeStyles((theme) => ({
  integerInput: {
    width: inputDimension + "vw",
    height: inputDimension + "vw",
    fontSize: inputDimension * 0.8 + "vw",
    minWidth: 0,
    [theme.breakpoints.down("sm")]: {
      width: inputDimension * 2 + "vw",
      height: inputDimension * 2 + "vw",
      fontSize: inputDimension * 2 * 0.8 + "vw",
    },
  },
  superscript: {
    fontSize: inputDimension * 0.3 + "vw",
    height: inputDimension * 0.9 + "vw",
    lineHeight: inputDimension * 0.25 + "vw",
    color: myTheme.color.red,
    [theme.breakpoints.down("sm")]: {
      fontSize: inputDimension * 2 * 0.3 + "vw",
      height: inputDimension * 2 * 0.9 + "vw",
      lineHeight: inputDimension * 2 * 0.25 + "vw",
    },
  },
}));

export const MyInput = ({ colorStage, value, superValue }) => {

  const classes = myInputStyles();
  var bgColor;
  var textColor;
  var opacityValue;
  switch (colorStage) {
    case "focused": {
      bgColor = myTheme.color.myPink;
      textColor = myTheme.color.myRed;
      opacityValue = 1;
      break;
    };
    case "highlighted": {
      bgColor = myTheme.color.myYellow;
      textColor = myTheme.color.myBlue;
      opacityValue = 1;
      break;
    }
    case "invisible": {
      bgColor = myTheme.color.myWhite;
      textColor = myTheme.color.myBlue;
      opacityValue = 0;
      break;
    }
    default: {
      bgColor = myTheme.color.myWhite;
      textColor = myTheme.color.myBlue;
      opacityValue = 1;
      break;
    }
  }

  return (
    <Button
      className={classes.integerInput}
      variant="outlined"
      style={{ backgroundColor: bgColor, color: textColor, opacity: opacityValue }}
    >
      <sup className={classes.superscript}>{superValue == 0? "": superValue}</sup>
      {value}
    </Button>
  )
}

const horizontalLineStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
  },
  oneDigitLength: {
    width: inputDimension + "vw",
    height: "0.1vw",
    [theme.breakpoints.down("sm")]: {
      width: inputDimension * 2 + "vw",
      height: "0.2vw",
    },
  },
}));

export const HorizontalLine = ({ lengthArray }) => {
  const classes = horizontalLineStyles();

  return (
    <Grid className={classes.row}>
      {
        lengthArray.map((item, index) => {
          return <Box
            borderBottom={3}
            className={classes.oneDigitLength}
          />
        })
      }
    </Grid>
  )
}

const verticalLineStyles = makeStyles((theme) => ({
  oneDigitHeight: {
    width: "0.1vw",
    height: inputDimension + "vw",
    [theme.breakpoints.down("sm")]: {
      width: "0.2vw",
      height: inputDimension * 2 + "vw",
    },
  },
}));

export const VerticalLine = () => {
  const classes = verticalLineStyles();

  return (
    <Box
      borderRight={3}
      className={classes.oneDigitHeight}
    />
  )
}