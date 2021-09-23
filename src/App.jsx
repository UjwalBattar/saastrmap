import { useState } from 'react';
import { TAB_LIST, TAB_MAP } from './utils';
import FoodList from './FoodList';
import FoodMap from './FoodMap';
import Footer from './Footer';

const App = (props) => {
  const [currentTab, setCurrentTab] = useState(TAB_LIST);

  const changeTabs = (tab) => {
    setCurrentTab(tab);
  }

  return (
    <div className="App">
      <FoodMap shouldShow={currentTab === TAB_MAP}/>
      <FoodList shouldShow={currentTab === TAB_LIST}/>
      <Footer onClick={changeTabs} currentTab={currentTab}/>
    </div>
  );
}

export default App;