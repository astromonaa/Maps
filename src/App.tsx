import React from 'react';
import Locations from './components/Locations';
import Map from './components/Map';

const App = () => {
  return (
    <>
      <div className="container">
        <Locations />
        <Map />
      </div>
      <span className='desc' >List items are draggable</span>
    </>
  );
};

export default App;