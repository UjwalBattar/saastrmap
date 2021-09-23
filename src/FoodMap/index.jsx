import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import locations from '../FoodList/locations.json';
import { getAllRestaurants } from '../utils';

const FoodMap = (props) => {
    const { shouldShow, selectedResturantId } = props;
    const coords = { lat: 40.774632, lng: -73.946838 };
    const style = {
        width: '100%',
        minWidth: '375px',
        height: '100%',
    };

    const [currentRestaurant, setCurrentRestaurant] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const onMarkerClick = (markerProps, marker, e) => {
        setCurrentRestaurant(markerProps.restaurant);
        setShowInfoWindow(true);
    }

    const restaurants = getAllRestaurants();
    const markers = useMemo(() => {
        return restaurants && restaurants.map(restaurant => {
            const {lat, lng, name, id} = restaurant;
            return (
                <Marker
                    key={id}
                    title={name}
                    restaurant={restaurant}
                    position={{lat, lng}}
                    onClick={onMarkerClick}
                />
            );
         })
    }, []);

    useEffect(() => {
        if (!selectedResturantId) {
            return;
        }
        setShowInfoWindow(true);
        const selectedRestaurant = restaurants.find(restaurant => restaurant.id === selectedResturantId);
        setCurrentRestaurant(selectedRestaurant);
    }, [selectedResturantId]);

    const windowPosition = currentRestaurant ? {lng: currentRestaurant.lng, lat: currentRestaurant.lat + 0.003} : null; // give it some padding on the top

    return (
        <div className={`mapContainer flex items-center w-screen h-92vh relative ${ !shouldShow && 'hidden'}`}>
            <Map
                style={style}
                google={props.google}
                initialCenter={coords}
            >
                { markers }
                <InfoWindow
                    position={windowPosition}
                    visible={showInfoWindow}
                    onClose={() => setShowInfoWindow(false)}
                >
                    <div>{currentRestaurant && currentRestaurant.name}</div>
                </InfoWindow>
            </Map>
        </div>
    );

}

FoodMap.propTypes = {
    shouldShow: PropTypes.bool.isRequired,
    selectedResturantId: PropTypes.number,
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(FoodMap);
  