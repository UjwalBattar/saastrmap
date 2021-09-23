import { useState } from 'react';
import './App.css';
import { getComponentForTab, TAB_LIST, TAB_MAP } from './constants';
import Footer from './Footer';

const App = (props) => {
  const [currentTab, setCurrentTab] = useState(TAB_MAP);
  const CurrentComponent = getComponentForTab(currentTab);

  const changeTabs = (tab) => {
    setCurrentTab(tab);
  }

  return (
    <div className="App">
      {CurrentComponent && <CurrentComponent />}
      <Footer onClick={changeTabs} currentTab={currentTab}/>
    </div>
  );
}

export default App;