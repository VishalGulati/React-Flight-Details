import React, { Component } from 'react';
import DepartureFlight from '../DepartureFlight/DepartureFlight';
import ReturnFlight from '../ReturnFlight/ReturnFlight';

class FlightDetails extends Component {
    render () {
        return (
            <div className="FlightDetails row">
                <DepartureFlight />
                <ReturnFlight />
            </div>
        );
    }
}

export default FlightDetails;