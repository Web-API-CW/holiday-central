/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useParams } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';


// Authentication layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import AfterLogLayout from "layouts/authentication/components/AfterLogLayout";
import { Dialog, TextField } from "@mui/material";


function Cart() {
  const {id}=useParams()
useEffect(() => {
    console.log(id)
  });

  return (
    <AfterLogLayout image={bgImage}>
      <MDBox margin={12.5}>
      <Card sx={{ maxWidth: "1000", backgroundColor: "white", borderRadius: 0 }} >
        <Grid container spacing={3} pb={4}>

            <Grid item xs={7}>
            <MDBox px={2} py={5}>
            {/* packages */}
            </MDBox>
            </Grid>

            <Grid item xs={5}>
            <MDBox px={2} py={5} >

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
                        <MDTypography variant="overline" fontSize={30} fontStyle={"inherit"} color={"purple"} fontFamily={"unset"} fontWeight="bold" pt={0}>
                        Order Summary
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
                

                <MDButton href="/payment" sx={{ my: 2, color: 'Black', display: 'block', backgroundColor:"orange" }}
                    size="large" fullWidth
                >
                    Checkout
                </MDButton>
                </Paper>
            </MDBox>
            </Grid>
        </Grid>
        </Card>
      </MDBox>
    </AfterLogLayout>
  );
}

export default Cart;
