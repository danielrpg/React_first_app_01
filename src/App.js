import React from 'react';
import SearchComponent from './components/search/SearchComponent';
import ItemListComponent from './components/listItem/ItemListComponent';
class App extends React.Component {

  render() {
    let buttonPropRed = {
      backgroundColor: "#ffff58"
    };
    // let buttonPropGreen = {
    //   backgroundColor: "#ff0057"
    // };
    // let buttonPropYellow = {
    //   backgroundColor: "#000056",
    //   color: "#FFF"
    // };
    return (
        <>
          <SearchComponent buttonProp={buttonPropRed}/>
          <ItemListComponent />        
        </>
    );
  }
}

export default App;
