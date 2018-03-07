import React, { Component } from 'react';
import '../DepartureFlight/DepartureFlight.css';
import jet from '../../images/jet.jpg';

class ReturnFlight extends Component {
    render() {
        return (
            <div className="DepartureFlight col-xs-6">
                <div className="flight-info col-xs-12">
                    <span className="glyphicon glyphicon-arrow-left"></span>
                    <h4 className="flight-type">Return</h4>
                </div>
                <div className="flight-place col-xs-12">
                    <span>New Delhi to Paris, 9 July</span>
                    <span className="flight-duration">(20h 10m)</span>
                </div>
                <div className="flight-logo col-xs-12">
                    <img src={ jet } alt="flight logo" />
                    <p className="flight-code">JET AIRWAYS JET-1290</p>
                </div>
                <div className="flight-timings col-xs-12">
                    <div className="col-xs-4">
                        <p>
                            <span className="start-place">DEL</span>
                            <span className="start-time"> 21:00</span>
                        </p>
                        <p className="start-date">
                            12 July'16, Fri
                        </p>
                        <p className="start-city">
                            Thiruvananthapuram
                        </p>
                        <p className="start-state">
                            Kerala
                        </p>
                    </div>
                    <div className="col-xs-4 col-middle">
                        <span className="glyphicon glyphicon-arrow-left left-major"></span>
                        <span className="time-travel"> 4h 30min </span>
                        <span className="glyphicon glyphicon-arrow-right right-major"></span>
                    </div>
                    <div className="col-xs-4">
                        <p>
                            <span className="start-place">BKK</span>
                            <span className="start-time"> 21:00</span>
                        </p>
                        <p className="start-date">
                            12 July'16, Fri
                        </p>
                        <p className="start-city">
                            Thiruvananthapuram
                        </p>
                        <p className="start-state">
                            Kerala
                        </p>
                    </div>
                </div>
                <div className="baggage-info col-xs-12">
                    BAGGAGE ALLOWANCE FOR ADULT
                </div>
                <div className="baggage-warning col-xs-12">
                    <p>Baggage warning in case of multiple airline</p>
                    <div className="col-xs-6">
                        <span className="glyphicon glyphicon-lock"></span>
                        <span className="checkin-info">Check-in 15kgs for adults</span>
                    </div>
                    <div className="col-xs-6">
                        <span className="glyphicon glyphicon-lock"></span>
                        <span className="checkin-info">Check-in 15kgs for adults</span>
                    </div>
                    <div className="col-xs-6">
                        <span className="glyphicon glyphicon-lock"></span>
                        <span className="checkin-info">Check-in 15kgs for adults</span>
                    </div>
                </div>
                <div className="dummy-info text-center col-xs-12">
                Includes over 250 glyphs in font format from the Glyphicon Halflings set. Glyphicons Halflings are normally not available for free.
                </div>
                <div className="col-xs-12">
                    <div className="radio">
                        <label>
                            <input type="radio" name="optradio" />
                            <span className="origin-radio">BKK</span>
                            <span className="time-radio">03:35</span>
                            <span className="glyphicon glyphicon-arrow-left"></span>
                            <span className="transit-radio">4h 30min | Non stop</span>
                            <span className="glyphicon glyphicon-arrow-right"></span>
                            <span className="origin-radio">BKK</span>
                            <span className="time-radio">06:35</span>
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="optradio" />
                            <span className="origin-radio">BKK</span>
                            <span className="time-radio">03:35</span>
                            <span className="glyphicon glyphicon-arrow-left"></span>
                            <span className="transit-radio">4h 30min | Non stop</span>
                            <span className="glyphicon glyphicon-arrow-right"></span>
                            <span className="origin-radio">BKK</span>
                            <span className="time-radio">06:35</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReturnFlight;