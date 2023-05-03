import React, { Component } from 'react';  
import DatePicker from 'react-datepicker';  
import addDays from 'date-fns/addDays'  
import "react-datepicker/dist/react-datepicker.css"; 
  
  
function DatePickerCode() {  
    
    return (  
      
          <DatePicker  
          sx={{}}
              selected={new Date()}
              //onChange={ this.handleChange }
              minDate={new Date()}  
              //maxDate={addDays(new Date(), 7)}  
          />  
        
    );      
}  
export default DatePickerCode;    