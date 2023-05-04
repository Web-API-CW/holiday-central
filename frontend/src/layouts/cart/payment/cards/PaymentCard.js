import * as React from 'react';
import Card from '@mui/material/Card';
import {Box, Grid } from '@mui/material';

import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from 'components/MDButton';
import PaymentInput from './PaymentInput';

function PaymentCard(props) {
  return (
<MDBox margin={12.5}>
    <Card sx={{ maxWidth: "1000", backgroundColor:"white" , borderRadius:0}}>  
      <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={7}>
          <MDBox pl={5} pt={5} pb={5}>
          <Paper 
      sx={{ p: 1, margin: '10.5', maxWidth: 1500, flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>  
      <MDTypography fontSize={25} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
      Payment Method 
     </MDTypography>
     <img src="/visa.svg" alt="React Logo" width={60}/><img src="/mastercard.svg" alt="React Logo" width={60}/>
        <PaymentInput/>
        </Paper>
        &nbsp;
        <MDTypography fontSize={25} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
      Order Overview
     </MDTypography>
     add Overview here 
        {/* add Overview here */}
        </MDBox>
        </Grid>

        <Grid item xs={12} md={12} lg={5} mt={5}>        
        <Paper
              sx={{
                p: 1, margin: '10.5', maxWidth: 1500, flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}>
              <MDBox>
                <Grid container spacing={3}>
                  <Grid item sx={8}>
                    <MDBox pr={10}>
                      <MDTypography fontSize={30} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
                        Summary
                      </MDTypography>
                    </MDBox>
                  </Grid>
                 
                </Grid>
              </MDBox>
              <MDBox>
                <Grid container spacing={3}>
                  <Grid item sx={8}>
                    <MDBox pr={25}>
                      <MDTypography fontSize={20} fontStyle={"inherit"} color={"black"} fontFamily={"revert"} pt={2}>
                        Sub Total
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item sx={4}>
                    <MDBox p={2}>
                      <MDTypography fontSize={20} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="medium" pt={0}>
                       
                      </MDTypography>
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox>
                <Grid container spacing={3}>
                  <Grid item sx={8}>
                    <MDBox pr={23}>
                      <MDTypography fontSize={20} fontStyle={"inherit"} color={"black"} fontFamily={"revert"} pt={0}>
                        Saved Amount
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item sx={4}>
                    <MDBox p={1}>
                      <MDTypography fontSize={15} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="medium" pt={0}>
                       
                      </MDTypography>
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox>
                <Grid container spacing={3}>
                  <Grid item sx={8}>
                    <MDBox pr={32}>
                      <MDTypography fontSize={25} fontStyle={"inherit"} color={"black"} fontFamily={"revert"} fontWeight="bold" pt={0}>
                        Total
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid item sx={4}>
                    <MDBox p={1}>
                      <MDTypography fontSize={16} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="medium" pt={0}>
                        
                      </MDTypography>
                    </MDBox>
                  </Grid>
                </Grid>
              </MDBox>
              <Divider variant="middle" />
              <Box
                sx={{
                  flexGrow: 4,
                  width: 600,
                  maxWidth: '100%',
                }}
              >
                <TextField fullWidth id="fullWidth" placeholder='Promotions enter coupon' />
              </Box>

              <MDButton href="#" sx={{ my: 2, color: 'Black', display: 'block' }}
                size="large" color="info" fullWidth
              >
                Purchase
              </MDButton>
            </Paper>
        </Grid>
      </Grid>
    </Card>
    </MDBox>
  );
}

PaymentCard.propTypes = {
  image: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
  // add additional PropTypes as needed
}

export default PaymentCard;
