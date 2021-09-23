import { Map, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

const FoodMap = (props) => {
    const { shouldShow } = props;
    const coords = { lat: 40.774632, lng: -73.946838 };
    const style = {
        width: '100%',
        minWidth: '375px',
        height: '100%',
    };
    return (
        <div className={`mapContainer flex items-center w-screen h-92vh relative ${ !shouldShow && 'hidden'}`}>
            <Map
                style={style}
                google={props.google}
                initialCenter={coords}
            >
            </Map>
        </div>
    );

}

FoodMap.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(FoodMap);
  