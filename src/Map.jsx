import { Map, GoogleApiWrapper } from 'google-maps-react';

const FoodMap = (props) => {
    const coords = { lat: 40.774632, lng: -73.946838 };
    const style = {
        width: '100%',
        minWidth: '375px',
        height: '100%',
    };
    return (
        <div className='mapContainer flex items-center w-screen h-92vh relative'>
            <Map
                style={style}
                google={props.google}
                initialCenter={coords}
            >
            </Map>
        </div>
    );

}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(FoodMap);
  