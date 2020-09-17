import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}><ContactsIcon style={{color:"#9c27b0"}} fontSize="large"/>&nbsp;Contact</h2>
        </GridItem>
      </GridContainer>
      <center>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Whatsapp"
              description="Muhammad Shidqi : 0856-0927-1349"
              icon={WhatsAppIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Instagram"
              description="@rafatech_"
              icon={InstagramIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Email Address"
              description="rafatech.uin@gmail.com"
              icon={EmailRoundedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </center>
    </div>
  );
}
