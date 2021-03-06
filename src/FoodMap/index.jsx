import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import PropTypes from 'prop-types';
import { createRef, useEffect, useState } from 'react';
import RestaurantInfo from '../RestaurantInfo';
import { getAllRestaurants, TYPE_FEATURED, TYPE_RESTAURANT } from '../utils';
import mapStyle from './mapStyle.json';

const FoodMap = (props) => {
    const { shouldShow, selectedResturantId } = props;
    const coords = { lat: 37.546623, lng: -122.301694 };
    const style = {
        width: '100%',
        minWidth: '375px',
        height: '100%',
    };

    const [currentRestaurant, setCurrentRestaurant] = useState(null);
    const [currentMarker, setCurrentMarker] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [restaurants, setRestaurants] = useState(null);
    const [markers, setMarkers] = useState([]);

    const onMarkerClick = (markerProps, marker, e) => {
        setCurrentRestaurant(markerProps.restaurant);
        setCurrentMarker(marker);
        setShowInfoWindow(true);
    }

    useEffect(() => {
        setRestaurants(getAllRestaurants());
    }, []);

    useEffect(() => {
        let newMarkers = restaurants && restaurants.map(restaurant => {
            const {lat, lng, name, id, type} = restaurant;
            const markerProps = {
                key: id,
                title: name,
                restaurant,
                position: {lat, lng},
                onClick: onMarkerClick,
            };
            if (type !== TYPE_RESTAURANT) {
                markerProps.icon = {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                };
            }
            return (
                <Marker
                    {...markerProps}
                    ref={createRef()}
                />
            );
         });
         setMarkers(newMarkers);
    }, [restaurants]);

    useEffect(() => {
        if (!selectedResturantId) {
            return;
        }
        setShowInfoWindow(true);
        const selectedMarker = markers.find(marker => marker.props.restaurant.id === selectedResturantId);
        setCurrentMarker(selectedMarker.ref.current.marker);
        setCurrentRestaurant(selectedMarker.props.restaurant);
    }, [selectedResturantId, markers]);

    const mapLoaded = (mapProps, map) => {
        map.setOptions({
            styles: mapStyle
        });
    }

    return (
        <div className={`mapContainer flex items-center w-screen h-92vh relative ${ !shouldShow && 'hidden'}`}>
            <Map
                style={style}
                google={props.google}
                initialCenter={coords}
                onReady={(mapProps, map) => mapLoaded(mapProps, map)}
            >
                { markers }
                <InfoWindow
                    marker={currentMarker}
                    visible={showInfoWindow}
                    onClose={() => setShowInfoWindow(false)}
                >
                    {currentRestaurant && currentRestaurant.type === TYPE_RESTAURANT && <RestaurantInfo {...currentRestaurant} />}
                    {currentRestaurant && currentRestaurant.type === TYPE_FEATURED && (
                        <div>
                            <h3 className='text-sm text-gray-700 font-semibold'>{currentRestaurant.name}</h3>
                            <p className='text-gray-600 text-xs'>{currentRestaurant.address}</p>
                        </div>
                    )}
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
  