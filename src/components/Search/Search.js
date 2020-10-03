import React, { useState } from 'react';
import styles from './Search.scss'
import moment from 'moment';

export default function Search(props) {
    function closeSearch() {
        props.closeSearch()
    }
    return (

        <div className="view white-bg pt-1 pb-2 color popup-View" >
            <div className="top-header">
                <div className="container">
                    {/* <div clas></div> */}
                    <div className="row top-box">
                        <div className="col-2 p-3">
                            <div className="pt-2">
                                <h4>{props.origin}</h4>
                                <p>{props.originLabel}</p>
                                <p>{moment(props.startDate).format('Do MMM')}</p>
                            </div>
                        </div>
                        <div className="col-2 p-3">
                            <i className="fa fa-exchange pt-3 fa-3x" aria-hidden="true"></i>
                        </div>
                        <div className="col-2 p-3">
                            <div className="pt-2">
                                <h4>{props.dest}</h4>
                                <p>{props.destLabel}</p>
                                <p>{moment(props.endDate).format('Do MMM')}</p>
                            </div>
                        </div>
                        <div className="col-2 p-3">
                            <div className="pt-2">
                                <h4>Class</h4>
                                <h6>Econamy</h6>
                            </div>
                        </div>
                        <div className="col-2 p-3">
                            <div className="pt-2">
                                <h4>Passenger</h4>
                                <h6>1 Adult</h6>
                            </div>
                        </div>
                        <div className="col-2 p-3">
                            <div className="pt-3">
                                <button className="btn btn-outline-primary" onClick={closeSearch}>Change</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className={`col-${props.idRound == "true" ? "6" : "12"}`}>
                        <div className="row mid-box">
                            <div className="col-12">
                                <div className="row p-5">
                                    <div className="col-4">
                                        <div className="m-2 p-2 border-box">
                                            <p>{moment(props.startDate).format('ddd,MMM DD')}</p>
                                            <p><i className="fa fa-inr" aria-hidden="true"></i> 2,500</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="m-2 p-2 border-box">
                                            <p>{moment(props.startDate).format('ddd,MMM DD')}</p>
                                            <p><i className="fa fa-inr" aria-hidden="true"></i> 2,500</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="m-2 p-2 border-box">
                                            <p>{moment(props.startDate).format('ddd,MMM DD')}</p>
                                            <p><i className="fa fa-inr" aria-hidden="true"></i> 2,500</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row bottom-box">
                            <div className="col-12">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Flight No.</th>
                                            <th scope="col">Departure</th>
                                            <th scope="col">Arrival</th>
                                            <th scope="col">Duration</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <i className="fa fa-circle-thin pr-2" aria-hidden="true"></i>121221</td>
                                            <td>{props.origin}(22.33)</td>
                                            <td>{props.dest}(22.33)</td>
                                            <td>2h 10m</td>
                                            <td>2500</td>
                                        </tr>
                                        <tr>
                                            <td> <i className="fa fa-circle-thin pr-2" aria-hidden="true"></i>121221</td>
                                            <td>{props.origin}(22.33)</td>
                                            <td>{props.dest}(22.33)</td>
                                            <td>2h 10m</td>
                                            <td>2500</td>
                                        </tr>
                                        <tr>
                                            <td> <i className="fa fa-circle-thin pr-2" aria-hidden="true"></i>121221</td>
                                            <td>{props.origin}(22.33)</td>
                                            <td>{props.dest}(22.33)</td>
                                            <td>2h 10m</td>
                                            <td>2500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                    {
                        props.idRound == "true" && (
                            <div className="col-6 border-left">
                                <div className="row mid-box">
                                    <div className="col-12">
                                        <div className="row p-5">
                                            <div className="col-4">
                                                <div className="m-2 p-2 border-box">
                                                    <p>{moment(props.endDate).format('ddd,MMM DD')}</p>
                                                    <p><i className="fa fa-inr" aria-hidden="true"></i> 2,500</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="m-2 p-2 border-box">
                                                    <p>{moment(props.endDate).format('ddd,MMM DD')}</p>
                                                    <p><i className="fa fa-inr" aria-hidden="true"></i> 2,500</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="m-2 p-2 border-box">
                                                    <p>{moment(props.endDate).format('ddd,MMM DD')}</p>
                                                    <p><i className="fa fa-inr" aria-hidden="true"></i> 2,500</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="row bottom-box">
                                    <div className="col-12">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Flight No.</th>
                                                    <th scope="col">Departure</th>
                                                    <th scope="col">Arrival</th>
                                                    <th scope="col">Duration</th>
                                                    <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> <i className="fa fa-circle-thin pr-2" aria-hidden="true"></i>121221</td>
                                                    <td>{props.dist}(22.33)</td>
                                                    <td>{props.origin}(22.33)</td>
                                                    <td>2h 10m</td>
                                                    <td>2500</td>
                                                </tr>
                                                <tr>
                                                    <td> <i className="fa fa-circle-thin pr-2" aria-hidden="true"></i>121221</td>
                                                    <td>{props.dest}(22.33)</td>
                                                    <td>{props.origin}(22.33)</td>
                                                    <td>2h 10m</td>
                                                    <td>2500</td>
                                                </tr>
                                                <tr>
                                                    <td> <i className="fa fa-circle-thin pr-2" aria-hidden="true"></i>121221</td>
                                                    <td>{props.dist}(22.33)</td>
                                                    <td>{props.origin}(22.33)</td>
                                                    <td>2h 10m</td>
                                                    <td>2500</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </div>

                        )
                    }

                </div>
            </div>

            <div className="container p-3">
                <div className="row">
                    <div className={`pt-3 col-${props.idRound == "true" ? "5" : "10"}`}>
                        <div className="row">
                            <div className="col-9">
                                <h6>{props.origin} (22.33) <i className="fa fa-exchange pl-4 pr-4" aria-hidden="true"></i>  {props.dest} (22.33)</h6>
                            </div>
                            <div className="col-3">
                                <h6>2h 34m</h6>
                            </div>
                        </div>
                    </div>
                    {
                        props.idRound =="true" && (
                            <div className="col-5 pt-3 border-bold-left">
                                <div className="row">
                                    <div className="col-9">
                                        <h6>{props.dest} (22.33) <i className="fa fa-exchange pl-4 pr-4" aria-hidden="true"></i>  {props.origin} (22.33)</h6>
                                    </div>
                                    <div className="col-3">
                                        <h6>2h 10m</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    <div className="col-2">
                        <h5><i className="fa fa-inr fa-2x" aria-hidden="true" style={{ marginTop: "-15px" }}></i> <span style={{ fontSize: "30px" }}> {props.idRound =="true"?"5000":"2500"}</span></h5>
                    </div>
                </div>


            </div>

        </div>
    )
}