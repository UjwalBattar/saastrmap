import { useState } from 'react';
import { getComponentForTab, TAB_LIST, TAB_MAP } from './constants';
import Footer from './Footer';

const App = (props) => {
  const [currentTab, setCurrentTab] = useState(TAB_LIST);
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