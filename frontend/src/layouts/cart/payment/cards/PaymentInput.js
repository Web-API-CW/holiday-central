import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from 'components/MDButton';

 function PaymentInput() {
  return (
    <Box
      component="form"  sx={{'& > :not(style)': { m: 1 },}} noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
      <MDTypography fontSize={17} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
      Name on card
      </MDTypography>
        <Box  sx={{ flexGrow: 4,  width: 600,  maxWidth: '100%' }}  >
            <TextField fullWidth  id="fullWidth" placeholder='Name on card'/>
        </Box>

        <MDTypography fontSize={17} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
           Card number
        </MDTypography>
        <Box  sx={{ flexGrow: 4,  width: 600,  maxWidth: '100%' }}  >
            <TextField fullWidth  id="fullWidth" placeholder='Card number'/>
        </Box>

        <MDTypography fontSize={17} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
        Expiry date
        </MDTypography>
        <Box  sx={{ flexGrow: 4,  width: 600,  maxWidth: '100%' }}  >
            <TextField   id="fullWidth" placeholder='MM/YY'/>
        </Box>

        <MDTypography fontSize={17} fontStyle={"inherit"} color={"black"} fontFamily={"unset"} fontWeight="bold" pt={0}>
        CVC/CVV
        </MDTypography>
        <Box  sx={{ flexGrow: 4,  width: 600,  maxWidth: '100%' }}  >
            <TextField  id="fullWidth" placeholder='CVC'/> &nbsp;<img src="/code.svg" alt="React Logo" width={60}/>
        </Box> 
      </FormControl>
      
    </Box>
  );
}
export default PaymentInput;