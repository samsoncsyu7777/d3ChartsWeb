import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Card from "../components/Card";
import SideBar from "../components/sideBar";
import Heading from "../components/Heading";
import Filters from "../components/Filters";
import QualityButtons from "../components/QualityButtons";
import AreaChart from "../components/AreaChart";
import data from "../data/data";
import { RiPushpin2Line } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { withStyles } from "@material-ui/core/styles";
import { colors } from "../themes/colors";

const dashBoardStyle = (theme) => ({
  row: {
    display: "flex",
  },
  wholePage: {
    flex: 1,
  },
  contentLeftPadding: {
    paddingLeft: "16vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5vw",
    },
  },
  contentColumn: {
    flex: 1,
  },
  contentTitle: {
    fontSize: "22px",
    fontWeight: 100,
    paddingBottom: "10px",
  },
  shadow: {
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    height: "50px",
  },
  globalIcon: {
    width: "30px",
    height: "30px",
  },
  contentSubTitle: {
    fontSize: "22px",
    fontWeight: 100,
    paddingLeft: "10px",
  },
  paddingTop: {
    paddingTop: "30px",
  },
  filters: {
    fontSize: "14px",
    fontWeight: 600,
    paddingBottom: "5px",
  },
  donutsGrid: {
    maxWidth: "450px",
    minWidth: "350px",
  },
  gaugeGrid: {
    margin: "0px 28px 14px 0px",
  },
  contentRightColumn: {
    maxWidth: "700px",
    minWidth: "350px",
  },
  qualityRow: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    marginBottom: "120px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  qualityText: {
    fontSize: "20px",
    fontWeight: 100,
  },
  shadowThumbtack: {
    height: "20px",
    width: "20px",
    paddingLeft: "880px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "100px",
    },
  },
});

function Dashboard(props) {
  const [sideIconFocusedIndex, setSideIconFocusedIndex] = useState(0);
  const [gaugeIndex, setGaugeIndex] = useState(0);
  const [cqaIndex, setCqaIndex] = useState(0);
  const [qualityFocusedIndex, setQualityFocusedIndex] = useState(2);
  let qualityEnableArray = ["Week", "Month", "Quarter", "Half", "Year"];

  const handleCardClick = (index) => {
    setGaugeIndex(index);
  };
  const handleSideIconClick = (index) => {
    setSideIconFocusedIndex(index);
  };
  const handleHeadingIconClick = (index) => {};
  const handleCqaClick = (index) => {
    setCqaIndex(index);
  };
  const handleQualityClick = (index) => {
    setQualityFocusedIndex(index);
  };

  const { classes } = props;

  return (
    <Grid className={`${classes.row} ${classes.wholePage}`}>
      <SideBar
        handleSideIconClick={handleSideIconClick}
        sideIconFocusedIndex={sideIconFocusedIndex}
      />
      <Grid className={classes.wholePage}>
        <Heading handleHeadingIconClick={handleHeadingIconClick} />
        <Grid className={classes.contentColumn}>
          <Typography
            className={`${classes.contentTitle} ${classes.contentLeftPadding} ${classes.paddingTop}`}
          >
            PERFORMANCE MANAGEMENT
          </Typography>
          <Grid
            className={`${classes.row} ${classes.wholePage} ${classes.shadow}`}
          >
            <AiOutlineGlobal
              className={`${classes.globalIcon} ${classes.contentLeftPadding}`}
            />
            <Typography className={classes.contentSubTitle}>
              Diagnostic Tool
            </Typography>
            <RiPushpin2Line className={classes.shadowThumbtack} />
          </Grid>
          <Grid
            container
            className={`${classes.row} ${classes.contentLeftPadding} ${classes.wholePage} ${classes.paddingTop}`}
          >
            <Grid>
              <Typography className={classes.filters}>Filters</Typography>
              <Filters handleCqaClick={handleCqaClick} cqaIndex={cqaIndex} />
              <Grid
                container
                className={`${classes.row} ${classes.donutsGrid}`}
              >
                {data.gaugeData.map((gauge, index) => {
                  return (
                    <Grid
                      key={index}
                      className={classes.gaugeGrid}
                      onClick={() => handleCardClick(index)}
                    >
                      <Card
                        data={gauge}
                        focused={index === gaugeIndex}
                        index={index}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid className={classes.contentRightColumn}>
              <Grid
                container
                className={`${classes.row} ${classes.qualityRow}`}
              >
                <Typography className={classes.qualityText}>
                  QUALITY SCORE TREND
                </Typography>
                <QualityButtons
                  handleQualityClick={handleQualityClick}
                  qualityFocusedIndex={qualityFocusedIndex}
                  qualityEnableArray={qualityEnableArray}
                />
              </Grid>
              <AreaChart
                svgProps={{
                  margin: { top: 40, bottom: 40, left: 40, right: 40 },
                  width: 500,
                  height: 150,
                }}
                data={data.areaData[data.gaugeData[gaugeIndex].name]}
                strokeWidth={4}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(dashBoardStyle)(Dashboard);
