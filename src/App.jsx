import { useState } from 'react';
import { TAB_LIST, TAB_MAP } from './utils';
import FoodList from './FoodList';
import FoodMap from './FoodMap';
import Footer from './Footer';

const App = (props) => {
  const [currentTab, setCurrentTab] = useState(TAB_LIST);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const changeTabs = (tab) => {
    setCurrentTab(tab);
  }

  const onRestaurantClick = (restaurantId) => {
    setSelectedRestaurant(restaurantId);
    setCurrentTab(TAB_MAP);
  }

  return (
    <div className="App">
      <FoodMap shouldShow={currentTab === TAB_MAP} selectedResturantId={selectedRestaurant}/>
      <FoodList shouldShow={currentTab === TAB_LIST} onRestaurantClick={onRestaurantClick}/>
      <Footer onClick={changeTabs} currentTab={currentTab}/>
    </div>
  );
}

export default App;