import React from "react";
import { Grid, Typography, Paper, Box } from "@material-ui/core";
import PieChart from "../components/PieChart";
import { colors } from "../themes/colors";
import { withStyles } from "@material-ui/core/styles";

const cardStyle = () => ({
  paperSize: {
    width: "120px",
    minHeight: "180px",
    borderRadius: "4px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  dataName: {
    fontSize: "15px",
    fontWeight: 500,
  },
  dataSample: {
    fontSize: "13px",
    fontWeight: 500,
    color: colors.darkGrey,
  },
});

function Card(props) {
  const { classes, data, focused, index } = props;

  return (
    <Box
      border={focused ? 2 : 0}
      style={{ borderColor: colors.skyBlue }}
      className={classes.paperSize}
    >
      <Paper className={classes.paperSize} elevation={focused ? 0 : 1}>
        <Grid
          container
          className={`${classes.container} ${classes.paperSize}`}
          style={{ backgroundColor: focused ? colors.aqua : colors.white }}
        >
          <Typography
            className={classes.dataName}
            style={{ color: focused ? colors.skyBlue : colors.darkBlue }}
          >
            {data.name}
          </Typography>
          <PieChart
            data={data}
            innerRadius={45}
            outerRadius={51}
            focused={focused}
            index={index}
          />
          <Typography className={classes.dataSample}>
            {"Sample: " + data.sample.toString()}
          </Typography>
        </Grid>
      </Paper>
    </Box>
  );
}

export default withStyles(cardStyle)(Card);
