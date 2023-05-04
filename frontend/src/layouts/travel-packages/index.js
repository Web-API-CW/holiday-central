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

import { React, useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

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
import DatePicker from 'react-datepicker';

// Authentication layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import AfterLogLayout from "layouts/authentication/components/AfterLogLayout";
import { Button, Dialog, DialogActions, DialogContent, Paper, TextField } from "@mui/material";
import AgentTopNav from "examples/Navbars/AgentTopNav";
import moment from "moment/moment";
import ReactDatePicker from "react-datepicker";
import DatePickerCode from "examples/DatePickerCode";
import { Label } from "@mui/icons-material";

import Select from 'react-select';

import PackageCard from "./PackageCard";

function PacakageSearchResults() {
  const [backendData, setBackendData] = useState([{}])
  const [filteredData, setFilteredData] = useState([]);
  const [startPoint, setStartPoint] = useState()
  const [destination, setDestination] = useState()
  const [tripDuration, setTripDuration] = useState()
  const [travellers, setTravellers] = useState()
  const [specialty, setSpecialty] = useState()

  const [searchResults, setSearchResults] = useState()

  // useEffect(() => {
  //   console.log(filteredData)
  // });

  const filterCriteria = {
    price: null,
    rating: null,
    duration: null
  };

  // select
  const price = [
    { value: 'all', label: 'All' },
    { value: 'ltoh', label: 'Lowest to Highest' },
    { value: 'htol', label: 'Highest to Lowest' }
  ]
  const rating = [
    { value: 'all', label: 'All' },
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' }
  ]
  const duration = [
    { value: 'all', label: 'All' },
    { value: '2', label: '2 Days' },
    { value: '5', label: '5 Days' },
    { value: '7', label: '1 Week' },
    { value: '30', label: '1 Month' }
  ]
  const [searchable, setSearchable] = useState(false);

  //searchproducts
  const searchPackages = async (e) => {
    e.preventDefault()

    // alert(startPoint)
    // alert(destination)
    // alert(tripDuration)
    // alert(travellers)
    // alert(specialty)
    //var query = { destination: "barcelona" };
    
    const results = await fetch(`/packages/search/${destination}/${travellers}/${specialty}`
    ).then(
      response => response.json()
    ).then(
      data => {
        //alert("success")
        setBackendData(data)
        setFilteredData(data.data)
        console.log(backendData)
        // setSearchResults()
      }
    )

  }

  const filterData = (e, field) => {
    if (field) {
      filterCriteria[field] = e.value;
    }

    //filter object
    if (backendData && backendData.data) {
      //to create a new object in memory
      let tempObj = [...JSON.parse(JSON.stringify(backendData.data))];
      console.log(tempObj);

      let tempCriteria = JSON.parse(JSON.stringify(filterCriteria));
      //removing null or useless fields from search criteria
      Object.keys(tempCriteria).forEach(key => {
        if (tempCriteria[key] === null || tempCriteria[key] === "all") {
          delete tempCriteria[key];
        }
      });

      if (tempObj) {
        //filtering data from back end by exact value
        tempObj = Object.values(tempObj).filter(function (item) {
          //check each data item with search criteria+
          for (let key in tempCriteria) {
            if (item[key] !== undefined && String(item[key]) !== String(tempCriteria[key]))
              return false;
          }
          return true;
        });

        // tempObj = tempObj.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
      }

      //re render component
      setFilteredData(tempObj);
    }
  };

  return (
    <>
      <AfterLogLayout image={bgImage}>
        <MDBox pt={12} px={5} sx={{ width: "100%" }}>
          <Card sx={{ padding: 5, width: "100%" }} >
            <form onSubmit={searchPackages} >
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <MDBox px={5}>
                    <TextField onChange={(e) => setStartPoint(e.target.value)} value={startPoint} placeholder="Start Point" fullWidth required />
                  </MDBox>
                </Grid>
                <Grid item xs={4}>
                  <MDBox px={5}>
                    <TextField onChange={(e) => setDestination(e.target.value)} value={destination} placeholder="Destination" fullWidth required />
                  </MDBox>
                </Grid>

                {/* <Grid item xs={2}>
                  <MDBox px={5}>
                    <DatePicker
                      sx={{padding:2}}
                      selected={new Date()}
                      //onChange={ this.handleChange }
                      minDate={new Date()}                    
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={2}>
                  <MDBox px={5}>
                    <DatePicker
                      selected={new Date()}
                      //onChange={ this.handleChange }
                      minDate={new Date()}
                    //maxDate={addDays(new Date(), 7)}  
                    />
                  </MDBox>
                </Grid> */}
                <Grid item xs={4}>
                  <MDBox px={5}>
                    <TextField type="number" onChange={(e) => setTripDuration(e.target.value)} value={tripDuration} placeholder="Duration (In Days)" fullWidth required />
                  </MDBox>
                </Grid>
                <Grid item xs={4}>
                  <MDBox px={5}>
                    <TextField type="number" onChange={(e) => setTravellers(e.target.value)} value={travellers} placeholder="No. of Travellers" s fullWidth required />
                  </MDBox>
                </Grid>
                <Grid item xs={4}>
                  <MDBox px={5}>
                    <TextField onChange={(e) => setSpecialty(e.target.value)} value={specialty} placeholder="Specialty (optional)" fullWidth />
                  </MDBox>
                </Grid>
              </Grid>
              <MDBox sx={{ display: 'flex', justifyContent: 'flex-end' }} py={3} >
                <MDButton type="submit" color="warning" >
                  Search
                </MDButton>
              </MDBox>
            </form>
          </Card>
        </MDBox>
        {/* filter */}
        <MDBox px={5} pt={2}>
          <Card sx={{ padding: 3 }}  >
            <MDTypography sx={{ fontSize: 15 }} variant="overline" fontWeight="medium" textTransform="capitalize">
              Filter Search Results
            </MDTypography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <MDBox px={2}>
                  <MDTypography sx={{ fontSize: 15, color: "purple" }} variant="button" fontWeight="medium" textTransform="capitalize">
                    By Price
                  </MDTypography>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={price[0]}
                    isSearchable={true}
                    name="color"
                    options={price}
                    onChange={(e) => filterData(e, "price")}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox px={2}>
                  <MDTypography sx={{ fontSize: 15, color: "purple" }} variant="button" fontWeight="medium" textTransform="capitalize">
                    By Rating
                  </MDTypography>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={rating[0]}
                    isSearchable={true}
                    name="color"
                    options={rating}
                    onChange={(e) => filterData(e, "rating")}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={4}>
                <MDBox px={2}>
                  <MDTypography sx={{ fontSize: 15, color: "purple" }} variant="button" fontWeight="medium" textTransform="capitalize">
                    By Duration
                  </MDTypography>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={duration[0]}
                    isSearchable={true}
                    name="color"
                    options={duration}
                    onChange={(e) => filterData(e, "duration")}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </Card>
        </MDBox>
        <Paper sx={{ paddingY: 2, paddingX: 5 }}>
            <Card>
              <MDBox pt={3} px={2}>
                <MDTypography variant="h4" fontWeight="medium" sx={{ color: "purple" }}>
                  Package Results
                </MDTypography>
              </MDBox>
              <MDBox pt={1} pb={2} px={2}>
                <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                  {
                  (filteredData != null && filteredData.length>0)
      ? (
        filteredData.map((item, i) =>
        (
          <PackageCard
            key={i}
            packageName={item.packageName}
          destination={item.destination}
          specialty={item.specialty}
      duration={item.duration}
      numTravelers={item.numTravelers}
      departure_destination={item.departure_destination}
      departure_time={item.departure_time}
      arrival_destination={item.arrival_destination}
      arrival_time={item.arrival_time}
      airline={item.airline}
      flight_duration={item.flight_duration}
      transit_state={item.transit_state}
      hotel_name={item.hotel_name}
      rating={item.rating}
      hotel_address={item.hotel_address}
      facilities={item.facilities}
      saving_price={item.saving_price}
      final_price={item.final_price}
      packageId={item._id}
        />
      ))
      
      )
      : 
      (
           <></>      
      )
                }
                </MDBox>
              </MDBox>
            </Card>
          </Paper>
      </AfterLogLayout>
    </>

  );
}

export default PacakageSearchResults;
