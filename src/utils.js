import locations from './FoodList/locations.json';

export const TAB_LIST = 'list';
export const TAB_MAP = 'map';
export const TAB_HEART = 'heart';
export const TYPE_RESTAURANT = 'restaurant';
export const TYPE_FEATURED = 'featured';

export const getAllRestaurants = () => {
    return locations.map(location => {
        const type = location.name === 'SaaStr' ? TYPE_FEATURED : TYPE_RESTAURANT;
        return {...location, type};
    });
}
