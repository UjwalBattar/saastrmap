import locations from './FoodList/locations.json';

export const TAB_LIST = 'list';
export const TAB_MAP = 'map';
export const TAB_HEART = 'heart';

export const getAllRestaurants = () => {
    let restaurants = [];
    ['Lunch', 'Dinner', 'Drinks'].forEach(type => {
       restaurants.push(...locations[type]);
    });
    return restaurants;
}
