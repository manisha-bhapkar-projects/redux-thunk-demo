import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import RadioWidget from './components/RadioWidget';
import './App.css';
import { fetchStation } from './store/actions/station-action-thunk';

const App = (props: any) => {

  useEffect(() => {
    props.dispatch(fetchStation())
  }, [])

  const getSelectedStation = (selectedStation) => {
    console.log(selectedStation);
  }
  const handlePlusButton = () => {
    console.log("Plus Action");
  }
  const handleMinusButton = () => {
    console.log("Minus Action");
  }
  const handleBackButton = () => { console.log("Back Action"); }
  const handleSwitchButton = () => { console.log("Switch Action"); }

  return (
    <div className="App">
      <div className="bg-dark height-100">
        <RadioWidget
          stationList={props.station}
          loading={props.loading}
          getSelectedStation={getSelectedStation}
          handlePlusButton={handlePlusButton}
          handleMinusButton={handleMinusButton}
          handleBackButton={handleBackButton}
          handleSwitchButton={handleSwitchButton}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  station: state.stationReducer.station_data,
  loading: state.stationReducer.loading
})

export default connect(mapStateToProps, null)(App)


