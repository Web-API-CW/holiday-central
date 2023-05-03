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

import { useState, useEffect } from "react";

// Material Dashboard 2 React context
import {
    useMaterialUIController,
} from "context";
import { AppBar, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function AgentTopNav() {

    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, fixedNavbar, openConfigurator } = controller;


    useEffect(() => {

    }, [dispatch, fixedNavbar]);

    return (
        <AppBar position="fixed" sx={{ bgcolor: "#3d1347", height:"12%" }} >
            <Grid container spacing={3} >
                <Grid item sx={2}>
                    <MDBox component={NavLink} to="/" display="flex" alignItems="center" p={1.5} >
                        <MDBox component="img" src="./luggage.png" alt="Brand" width="2rem" />
                        
                        <MDBox
                            width= "100%"
                            height="100%"
                            p={2}
                        >
                            <MDTypography component="h6" variant="button" fontWeight="bold" color="white">
                                Holiday Central
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </Grid>
                <Grid item sx={4}>
                    <MDBox component={NavLink} to="/" display="flex" alignItems="center" p={2.5}>
                    <MDTypography component="h6" variant="button" fontWeight="regular" color="white">
                                Packages
                    </MDTypography>
                    </MDBox>
                </Grid>
            </Grid>
        </AppBar>
    );
}
export default AgentTopNav;
