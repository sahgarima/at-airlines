import React, { Component } from 'react';
import styles from './Dashboard.scss'
import { connect } from 'react-redux';
import { startSearch, getList, changeTripType } from '../../Redux/actions';
import Navigation from '../Navigation/Navigation'
import Search from '../Search/Search';
import Dropdown from './Dropdown'
import DatePickerCom from './DatePicker'

// import Background from process.env.PUBLIC_URL + '/Banner.png';

const mStateToProps = (state) => {
    return state
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' })
    }
}
class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.goToSearch = this.goToSearch.bind(this)
        this.closeSearch = this.closeSearch.bind(this)
        this.changeTrip = this.changeTrip.bind(this)
    }
    // componentDidMount() {
    //     this.props.dispatch(startSearch())
    // }
    changeTrip(event) {
        this.props.dispatch(changeTripType(event.target.value))

    }
    checkVal(keyName) {
        if (this.props[keyName] == "") return true
        else return false
        
    }
    goToSearch() {
        if (this.checkVal("origin") || this.checkVal("dest") || this.props.origin == this.props.dest) {
            alert("Please Correct Filter")
        } else {
            // this.props.dispatch(getList(true))
            this.props.dispatch(startSearch(true))
        }

    }
    closeSearch() {
        this.props.dispatch(startSearch(false))

    }
    render() {
        return (
            <div className="userSection" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Banner.png)` }}>
                <Navigation></Navigation>
                {/* <div className="view" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Banner.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}> */}

                {
                    this.props.display && <Search destLabel ={this.props.destLabel} originLabel ={this.props.originLabel} idRound={this.props.idRound} closeSearch= {this.closeSearch} origin ={this.props.origin} dest={this.props.dest} endDate={this.props.endDate} startDate = { this.props.startDate}></Search>
                }
                {
                    !this.props.display && (
<div className="view" >
                    <main>
                        <div className="container pt-top outer-container ">
                            <div className="row py-5">
                                <div className="col">
                                    <div className="col-8">
                                        <div className="row">
                                            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ width: "100%", marginLeft: "-15px",borderRadius:"3px" }}>
                                                <ul className="nav nav-pills nav-fill" style={{ width: "100%" }}>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">Flight Book</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Check in</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Flight Status</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Manage Booking</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                    <div className="row white-bg gap-top shadow-lg rounded">
                                        <div className="col">

                                            <div className="inner-container">
                                                <div className="padding-20 margin-inner">
                                                    <div className="row">
                                                        <div className="col-8"></div>
                                                        <div className="col-4">
                                                            <div>

                                                                <label className="radio-inline col-6">
                                                                    <input type="radio" className="mr-2" onChange={this.changeTrip} value="false" name="optradio" checked={this.props.idRound == "false"} />One Way
             </label>
                                                                <label className="radio-inline  col-6">
                                                                    <input type="radio" className="mr-2" onChange={this.changeTrip} value="true" name="optradio" checked={this.props.idRound == "true"} />Round Trip
    </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row gap-top">
                                                        <div className="col-3">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="input-group">
                                                                        <Dropdown to="Origin" keyOf= "origin" labelOf="originLabel"></Dropdown>
                                                                        {/* <input className="form-control py-2 border-right-0 border" type="search" placeholder="origin" id="example-search-input" /> */}
                                                                        {/* <span className="input-group-append">
                                                                    <div className="input-group-text bg-transparent"><svg style={{ height: "100%" }} xmlns="http://www.w3.org/2000/svg" width="14.148" height="18.857" viewBox="0 0 14.148 18.857">
                                                                        <g id="placeholder-filled-point" transform="translate(0.5 0.5)">
                                                                            <path id="Path_1135" data-name="Path 1135" d="M19.457,0a6.582,6.582,0,0,0-6.574,6.574,6.413,6.413,0,0,0,.575,2.684A41.452,41.452,0,0,0,19.18,17.73a.366.366,0,0,0,.554,0,41.473,41.473,0,0,0,5.722-8.472,6.41,6.41,0,0,0,.575-2.684A6.582,6.582,0,0,0,19.457,0Zm0,9.989a3.415,3.415,0,1,1,3.415-3.415A3.419,3.419,0,0,1,19.457,9.989Z" transform="translate(-12.883 0)" fill="none" stroke="#707070" strokeWidth="1" />
                                                                        </g>
                                                                    </svg></div>
                                                                </span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="row">
                                                                {/* <div className="col-1">  <img src={ `${process.env.PUBLIC_URL}/arrows.png`}/></div> */}
                                                                <div className="col-12">
                                                                    <img className="col-1 map-img" src={`${process.env.PUBLIC_URL}/arrows.png`} />
                                                                    <div className="input-group col-11 map-left">

                                                                        <Dropdown to="Destination"  keyOf="dest"  labelOf="destLabel"></Dropdown>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="row hight-full">
                                                                <div className="col-12">
                                                                    <div className="date-picker-height">
                                                                        <DatePickerCom keyOf="startDate"></DatePickerCom>
                                                                        {/* <input className="form-control py-2 border-right-0 border" type="search" placeholder="Depart" id="example-search-input" />
                                                                    <span className="input-group-append">
                                                                        <div className="input-group-text bg-transparent"><svg style={{ height: "100%" }} xmlns="http://www.w3.org/2000/svg" width="15.491" height="16.598" viewBox="0 0 15.491 16.598">
                                                                            <g id="calendar_2_" data-name="calendar (2)" transform="translate(0 0)">
                                                                                <path id="Path_23" data-name="Path 23" d="M17.215,1.107H15.278V.277A.276.276,0,0,0,15,0H13.065a.276.276,0,0,0-.277.277v.83H6.7V.277A.276.276,0,0,0,6.426,0H4.49a.276.276,0,0,0-.277.277v.83H2.277A.276.276,0,0,0,2,1.383V16.321a.276.276,0,0,0,.277.277H17.215a.276.276,0,0,0,.277-.277V1.383A.276.276,0,0,0,17.215,1.107ZM13.342.553h1.383v1.66H13.342V.553Zm-8.575,0H6.149v1.66H4.766V.553ZM2.553,1.66h1.66v.83a.276.276,0,0,0,.277.277H6.426A.276.276,0,0,0,6.7,2.49V1.66h6.086v.83a.276.276,0,0,0,.277.277H15a.276.276,0,0,0,.277-.277V1.66h1.66v2.49H2.553Zm0,14.385V4.7H16.938V16.044Z" transform="translate(-2)" fill="#8e8e8e" />
                                                                                <path id="Path_24" data-name="Path 24" d="M18.469,23H11v8.022H21.512V23H18.469Zm-1.936.553h1.936V25.49H16.533Zm1.936,4.426H16.533V26.043h1.936Zm-4.426-1.936h1.936v1.936H14.043Zm0-2.49h1.936V25.49H14.043Zm-2.49,0H13.49V25.49H11.553Zm0,2.49H13.49v1.936H11.553Zm1.936,4.426H11.553V28.533H13.49Zm2.49,0H14.043V28.533h1.936Zm2.49,0H16.533V28.533h1.936Zm2.49,0H19.022V28.533h1.936Zm0-2.49H19.022V26.043h1.936Zm0-4.426V25.49H19.022V23.553Z" transform="translate(-8.51 -16.638)" fill="#8e8e8e" />
                                                                                <path id="Path_25" data-name="Path 25" d="M17.215,1.107H15.278V.277A.276.276,0,0,0,15,0H13.065a.276.276,0,0,0-.277.277v.83H6.7V.277A.276.276,0,0,0,6.426,0H4.49a.276.276,0,0,0-.277.277v.83H2.277A.276.276,0,0,0,2,1.383V16.321a.276.276,0,0,0,.277.277H17.215a.276.276,0,0,0,.277-.277V1.383A.276.276,0,0,0,17.215,1.107ZM13.342.553h1.383v1.66H13.342V.553Zm-8.575,0H6.149v1.66H4.766V.553ZM2.553,1.66h1.66v.83a.276.276,0,0,0,.277.277H6.426A.276.276,0,0,0,6.7,2.49V1.66h6.086v.83a.276.276,0,0,0,.277.277H15a.276.276,0,0,0,.277-.277V1.66h1.66v2.49H2.553Zm0,14.385V4.7H16.938V16.044Z" transform="translate(-2)" fill="#8e8e8e" />
                                                                            </g>
                                                                        </svg>
                                                                        </div>
                                                                    </span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="row hight-full">
                                                                <div className="col-12">
                                                                    <div className="date-picker-height">
                                                                        <DatePickerCom keyOf="endDate"></DatePickerCom>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row gap-top">
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="input-group">
                                                                        <input className="form-control py-2 border-right-0 border" type="search" placeholder="Passenger" id="example-search-input" />
                                                                        <span className="input-group-append">
                                                                            <div className="input-group-text bg-transparent"><svg style={{ height: "100%" }} xmlns="http://www.w3.org/2000/svg" width="15.591" height="16.192" viewBox="0 0 15.591 16.192">
                                                                                <path id="Path_530" data-name="Path 530" d="M15.518,12.916a8.055,8.055,0,0,0-4.57-5.229,4.56,4.56,0,0,0,1.335-3.133,4.4,4.4,0,0,0-1.4-3.228A4.34,4.34,0,0,0,4.8,1.313,4.41,4.41,0,0,0,3.394,4.551,4.547,4.547,0,0,0,4.729,7.687a8.121,8.121,0,0,0-4.266,4.34,4.355,4.355,0,0,0-.419,1.562A2.556,2.556,0,0,0,.75,15.465a2.589,2.589,0,0,0,1.879.8c.456,0,.95,0,1.562,0H8.48c1.48,0,3.008,0,4.512,0a2.646,2.646,0,0,0,2.146-1.044A2.6,2.6,0,0,0,15.518,12.916ZM6.287,8.6c.375-.1.568-.287.605-.591a.689.689,0,0,0-.46-.754,3,3,0,0,1-1.663-2.38A3.069,3.069,0,0,1,7.781,1.411a3.47,3.47,0,0,1,1.4.318,2.836,2.836,0,0,1,1.724,2.724A2.934,2.934,0,0,1,9.2,7.272a.692.692,0,0,0,.155,1.322,6.805,6.805,0,0,1,3.12,1.707,7.029,7.029,0,0,1,1.758,3.1,1.137,1.137,0,0,1-.22,1.011,1.188,1.188,0,0,1-.923.49h-.014c-1.247-.02-2.5-.017-3.718-.014h-.01c-.5,0-1.014,0-1.518,0s-1.038,0-1.507-.007c-1.2-.007-2.447-.014-3.671.02a1.228,1.228,0,0,1-1-.5,1.189,1.189,0,0,1-.21-1.075,7.112,7.112,0,0,1,1.761-3.042A6.877,6.877,0,0,1,6.287,8.6Z" transform="translate(-0.042 -0.075)" fill="#727272" />
                                                                            </svg>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div className="input-group">
                                                                        <input className="form-control py-2 border text-center" type="search" placeholder="Passcord" id="example-search-input" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <button type="button" className="btn search-btn shadow-lg rounded " onClick={this.goToSearch}> Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            
                    )
                }
                
            </div >
        );
    }
}

export default connect(mStateToProps)(Dashboard)
