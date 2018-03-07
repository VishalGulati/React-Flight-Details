import React, { Component } from 'react';
import './TabsContainer.css';
import Qna from '../Qna/Qna';
import AnswersSection from '../AnswersSection/AnswersSection';
import FlightDetails from '../FlightDetails/FlightDetails';
import { Tabs, Tab } from 'react-bootstrap';

class TabsContainer extends Component {
    render() {
        return (

            <div className="container">
                <Tabs defaultActiveKey={1} id="react-bootstrap-tabs">
                    <Tab eventKey={2} title="Tab 2">
                        <FlightDetails />
                    </Tab>
                    <Tab eventKey={1} title="Tab 1">
                        <Qna />
                        <AnswersSection />
                    </Tab>
                </Tabs>;
            </div>

        );
    }
}

export default TabsContainer;