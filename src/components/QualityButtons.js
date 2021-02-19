import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { colors } from "../themes/colors";

const qualityButtonsStyle = () => ({
  buttonsBar: {
    display: "flex",
    paddingLeft: "30px",
  },
  button: {
    height: "30px",
    padding: "5px 10px 5px 10px",
    margin: "2px",
    color: colors.white,
    fontSize: "14px",
    fontWeight: 600,
    borderWidth: 0,
    borderRadius: "3px",
  },
});

function QualityButtons(props) {
  const buttons = ["Day", "Week", "Month", "Quarter", "Half", "Year"];
  const {
    classes,
    handleQualityClick,
    qualityFocusedIndex,
    qualityEnableArray,
  } = props;
  return (
    <Grid className={classes.buttonsBar}>
      {buttons.map((button, index) => {
        let enabled = qualityEnableArray.includes(button) ? true : false;
        return (
          <button
            key={index}
            className={classes.button}
            value={button}
            onClick={() => handleQualityClick(index)}
            enabled={enabled.toString()}
            style={{
              backgroundColor: !enabled
                ? colors.lightBlue
                : index === qualityFocusedIndex
                ? colors.black
                : colors.blue,
            }}
          >
            {button}
          </button>
        );
      })}
    </Grid>
  );
}

export default withStyles(qualityButtonsStyle)(QualityButtons);
