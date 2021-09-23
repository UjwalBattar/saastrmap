import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import locations from '../FoodList/locations.json';
import { getAllRestaurants } from '../utils';

const FoodMap = (props) => {
    const { shouldShow } = props;
    const coords = { lat: 40.774632, lng: -73.946838 };
    const style = {
        width: '100%',
        minWidth: '375px',
        height: '100%',
    };

    const [currentMarker, setCurrentMarker] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const onMarkerClick = (markerProps, marker, e) => {
        setCurrentMarker(marker);
        setShowInfoWindow(true);
    }

    useEffect(() => {
        setShowInfoWindow(true);
    }, [currentMarker])

    const restaurants = getAllRestaurants();
    const markers = useMemo(() => {
        return restaurants && restaurants.map(restaurant => {
            const {lat, lng, name} = restaurant;
            return (
                <Marker
                    title={name}
                    position={{lat, lng}}
                    onClick={onMarkerClick}
                />
            );
         })
    }, []);

    return (
        <div className={`mapContainer flex items-center w-screen h-92vh relative ${ !shouldShow && 'hidden'}`}>
            <Map
                style={style}
                google={props.google}
                initialCenter={coords}
            >
                { markers }
                <InfoWindow
                    marker={currentMarker}
                    visible={showInfoWindow}
                    onClose={() => setShowInfoWindow(false)}
                >
                    <div>{currentMarker && currentMarker.title}</div>
                </InfoWindow>
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
  