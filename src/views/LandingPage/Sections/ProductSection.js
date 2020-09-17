import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import moment from 'moment'
import "../../../components/Timer/styles.css";
import Timer from "../../../components/Timer/Timer.js";

// @material-ui/icons
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import VideogameAssetRoundedIcon from '@material-ui/icons/VideogameAssetRounded';
import PersonalVideoRoundedIcon from '@material-ui/icons/PersonalVideoRounded';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
const end = moment("20201017 08:30:00", "YYYYMMDD HH:mm:ss");
const timeLeft = moment(end.diff(moment(), true));
const startDate = new Date().getTime() + Math.round(timeLeft);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Timer startDate={startDate} />
          <br/>
          <br/>
          <h2 className={classes.title}><WhatshotRoundedIcon style={{color:"#00acc1"}} fontSize="large"/>&nbsp;Apa itu Rafatech?</h2>
          <h5 className={classes.description}>
            Rafatech adalah singkatan dari Raden Fatah Technology yaitu acara tahunan Mahasiwa Jurusan Sistem Informasi 
            Fakultas Sains dan Teknologi UIN Raden Fatah Palembang yang terdiri dari Workshop, 
            Berbagai Macam Lomba hingga Seminar Utama.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Workshop"
              description="17 Oktober 2020"
              icon={SupervisedUserCircleRoundedIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Lomba"
              description="23-24 Oktober 2020"
              icon={VideogameAssetRoundedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Seminar Utama"
              description="26 Oktober 2020"
              icon={PersonalVideoRoundedIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
