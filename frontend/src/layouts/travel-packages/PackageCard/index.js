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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { Card, Grid, Rating } from "@mui/material";

function PackageCard(props) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      //bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={1}
      mt={2}
      bgColor="#ebf0fc"
    >
      <MDBox width="100%" >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <MDTypography sx={{ fontSize: 20, color: "#800080" }} variant="button" fontWeight="medium" textTransform="capitalize">
            {props.destination}
          </MDTypography>
          <Rating name="read-only" value={props.rating} readOnly />

        </MDBox>
        {/* <MDBox> */}
        <MDTypography sx={{ fontSize: 18, color: "#AA336A" }} fontWeight="regular" textTransform="capitalize">
          {props.packageName} - {props.specialty}
        </MDTypography>
        {/* </MDBox> */}
        <MDBox
          display="flex"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <MDTypography sx={{ fontSize: 15 }} variant="button" fontWeight="medium" textTransform="capitalize">
            {props.duration} Days |
          </MDTypography>
          <MDTypography sx={{ fontSize: 15, paddingLeft: 2 }} variant="overline" fontWeight="medium" textTransform="capitalize">
            min: {props.numTravelers} members
          </MDTypography>
        </MDBox>

        <MDBox p={2} sx={{ alignItems: "center" }}>
          <Grid container spacing={3}>
            <Grid item sx={4}>
              <MDBox sx={{ padding: 1, width: 500, height: 200, borderRadius: 2 }} bgColor="#cad8fa">
                <MDTypography sx={{ fontSize: 15, color: "darkblue" }} variant="overline" fontWeight="bold" textTransform="capitalize">
                  Flight Details
                </MDTypography>
                <MDBox>
                  <MDBox
                    display="flex"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                  >
                    <MDTypography sx={{ fontSize: 13, xs: "flex-end" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.departure_destination}
                    </MDTypography>
                    <MDTypography sx={{ fontSize: 12, xs: "flex-end", paddingLeft: 2, paddingX: 2 }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.departure_time}
                    </MDTypography>
                    <Icon>flight</Icon>
                    <MDTypography sx={{ fontSize: 13, xs: "flex-end", paddingLeft: 2 }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.arrival_destination}
                    </MDTypography>

                    <MDTypography sx={{ fontSize: 12, xs: "flex-end", paddingLeft: 2 }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.arrival_time}
                    </MDTypography>
                  </MDBox>
                  <MDBox
                    display="flex"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                  >
                  </MDBox>
                  <MDBox
                  >
                    <MDTypography sx={{ fontSize: 13, paddingRight: 2, color: "purple" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                    {props.airline}
                    </MDTypography>
                  </MDBox>
                  <MDBox
                  >
                    <MDTypography sx={{ fontSize: 13, color: "blue" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      Flight Duration(hrs. and mins): {props.flight_duration} | Transit: {props.transit_state}
                    </MDTypography>

                  </MDBox>

                </MDBox>
              </MDBox>
            </Grid>
            <Grid item sx={4}>
              <MDBox sx={{ padding: 1, width: 500, height: 200, borderRadius: 2 }} bgColor="#cad8fa">
                <MDTypography sx={{ fontSize: 15, color: "darkblue" }} variant="overline" fontWeight="bold" textTransform="capitalize">
                  Hotel Details
                </MDTypography>
                <MDBox>
                  <MDBox
                    display="flex"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                  >
                    <MDTypography sx={{ fontSize: 13, xs: "flex-end" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.hotel_name}
                    </MDTypography>


                  </MDBox>
                  <MDBox
                    display="flex"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                  >
                  </MDBox>
                  <MDBox
                  >
                    <MDTypography sx={{ fontSize: 13, paddingRight: 2, color: "purple" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.hotel_address}
                    </MDTypography>
                  </MDBox>
                  <MDBox
                    display="flex"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    flexDirection={{ xs: "column", sm: "row" }}
                  >
                    <MDTypography sx={{ fontSize: 13, xs: "flex-end", color: "brown" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.facilities}
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Grid>
            <Grid item sx={4}>
              <MDBox pl={10}>
                {/* <MDBox bgColor="green" sx={{ paddingY: 1, width: 150, height: 50, borderRadius: 2, textAlign: "center" }}>
                <MDTypography style={{ fontSize: 12, color: "white" }} variant="overline" fontWeight="regular" textTransform="capitalize">
                  Bundle Saving &nbsp;&nbsp;
                </MDTypography>
                <MDTypography style={{ fontSize: 12, color: "white" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                  $900
                </MDTypography>

              </MDBox>&nbsp; */}
                <MDBox p={1} bgColor="#e88795" sx={{ width: "80", height: "75", textAlign: "center" }}>
                  <MDBox>
                    <MDTypography style={{ fontSize: 12, color: "white" }} variant="overline" fontWeight="regular" textTransform="capitalize">
                      Bundle Saving &nbsp;&nbsp;
                    </MDTypography>
                    <MDTypography style={{ fontSize: 12, color: "white" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                      {props.saving_price}
                    </MDTypography>
                  </MDBox>

                  <MDBox>
                    <MDTypography style={{ fontSize: 15, color: "white" }} variant="overline" fontWeight="bold" textTransform="capitalize">
                      Price $ {props.final_price} &nbsp;&nbsp;
                    </MDTypography>
                    <MDBox>
                      <MDTypography style={{ fontSize: 12, color: "white" }} variant="overline" fontWeight="medium" textTransform="capitalize">
                        (per person Flight+Hotel)
                      </MDTypography>
                    </MDBox>

                  </MDBox>

                </MDBox>


                <MDBox pt={2} pl={3}>
                  <MDButton size="medium" style={{ backgroundColor: "purple", color: "white" }}>Book Now</MDButton>
                </MDBox>

              </MDBox>

            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the Bill
PackageCard.propTypes = {

  packageName: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  numTravelers: PropTypes.number.isRequired,
  specialty:PropTypes.string.isRequired,
  departure_destination: PropTypes.string.isRequired,
  departure_time: PropTypes.string.isRequired,
  arrival_destination: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  airline: PropTypes.string.isRequired,
  flight_duration: PropTypes.string.isRequired,
  transit_state: PropTypes.string.isRequired,
  hotel_name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  hotel_address: PropTypes.string.isRequired,
  facilities: PropTypes.string.isRequired,
  saving_price: PropTypes.string.isRequired,
  final_price: PropTypes.number.isRequired
};

export default PackageCard;
