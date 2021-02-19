import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { AiFillInfoCircle } from "react-icons/ai";
import { withStyles } from "@material-ui/core/styles";
import { colors } from "../themes/colors";

const filtersStyle = () => ({
  row: {
    display: "flex",
  },
  filters: {
    fontSize: "14px",
    fontWeight: 600,
    paddingBottom: "5px",
  },
  filtersBox: {
    display: "flex",
    height: "90px",
    width: "230px",
    alignItems: "center",
    borderRadius: "8px",
    borderColor: colors.lightGrey,
    marginBottom: "15px",
  },
  filterSelectionBox: {
    height: "12px",
    width: "12px",
  },
  filterRow: {
    padding: "10px 0px 10px 17px",
    alignItems: "center",
  },
  cqaText: {
    fontSize: "14px",
    padding: "0px 7px 0px 14px",
  },
  infoIcon: {
    width: "18px",
    height: "18px",
  },
});

function Filters(props) {
  const cqaSelection = ["All CQA Results", "CQAs with Closed Loop"];
  const { classes, handleCqaClick, cqaIndex } = props;

  return (
    <Box border={2} className={classes.filtersBox}>
      <Grid className={classes.filtersContent}>
        {cqaSelection.map((cqa, index) => {
          return (
            <Grid key={cqa} className={`${classes.row} ${classes.filterRow}`}>
              <Box
                className={classes.filterSelectionBox}
                style={{
                  backgroundColor:
                    index === cqaIndex ? colors.darkBlue : colors.lightGrey,
                }}
                onClick={() => handleCqaClick(index)}
              />
              <Typography className={classes.cqaText}>{cqa}</Typography>
              <AiFillInfoCircle className={classes.infoIcon} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default withStyles(filtersStyle)(Filters);
