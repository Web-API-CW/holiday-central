import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import { useEffect, useState } from "react";


import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import AfterLogLayout from 'layouts/authentication/components/AfterLogLayout';
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import PaymentCard from './cards/PaymentCard';

function Payment() {


  return (
    <AfterLogLayout image={bgImage}>
    <PaymentCard/>
    </AfterLogLayout>
  );
}

export default Payment;
