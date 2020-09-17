import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();

  return (
    <div>
      <center>
      <h2 className={classes.title}><ColorLensRoundedIcon style={{color:"#e91e63"}} fontSize="large"/>&nbsp;Desain</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <img src={require('../../../assets/img/1.jpeg')} alt="" width="300px"/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src={require('../../../assets/img/2.jpeg')} alt="" width="300px"/>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img src={require('../../../assets/img/3.jpeg')} alt="" width="300px"/>
          </GridItem>
        </GridContainer>
      </div>
      </center>
    </div>
  );
}
