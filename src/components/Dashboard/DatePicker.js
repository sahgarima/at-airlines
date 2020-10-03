import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import style from './DatePicker.scss'
import { connect } from 'react-redux';
import { changeOrigin } from '../../Redux/actions';


import "react-datepicker/dist/react-datepicker.css";
function CustomInput(props) {

    return (
        <div className="wrapper">
            <input onClick={props.onClick} className="dateInput" value={props.value} type="text" />
            <i onClick={props.onClick} aria-hidden="true" className="fa fa-calendar"></i>
        </div>
    )

}
function DatePickerCom(props) {
    const [startDate, setStartDate] = useState(new Date());
    function handleChange(date) {
         setStartDate(date)
        props.dispatch(changeOrigin(date, props.keyOf))
    }
    return (
        <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={date => handleChange(date)} customInput={<CustomInput />} icon={<i className="cal-icon" />}>

            <div style={{ color: "red" }}>Don't forget to check the weather!</div>
        </DatePicker>
    );
};
export default connect()(DatePickerCom)