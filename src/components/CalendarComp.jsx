"use client"
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';

const CalendarComp = () => {
 
    const [value, onChange] = useState(new Date()); 
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChangeDate = (date) => {
        setSelectedDate(date);
        console.log(date)
    }
  
    return ( 
        <div> 
            
            <Calendar 
                onChange={handleChangeDate} 
                value={value} 
            /> 
            <div></div>
        </div> 
    ); 
  
}

export default CalendarComp;
