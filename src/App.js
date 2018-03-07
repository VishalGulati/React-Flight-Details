import React, { Component } from 'react';
import './App.css';
import TabsContainer from './components/TabsContainer/TabsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mmt-app-body">
          <TabsContainer />
        </div>
      </div>
    );
  }
}

export default App;
