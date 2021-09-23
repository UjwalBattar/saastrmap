import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const App = (props) => {
  const coords = { lat: 40.774632, lng: -73.946838 };
  return (
    <div className="App">
      <p>I'm in the mood for:</p>
      <select>
        <option value='food'>Food</option>
        <option value='drinks'>Drinks</option>
      </select>
      <Map
        google={props.google}
        initialCenter={coords}
      >

      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(App);
