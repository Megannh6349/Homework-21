import React from 'react';
import './App.css';
import NavbarComp from './components/navbarComp';
import JumbotronComp from './components/jumbotronComp';
import SearchBox from './components/searchBox';
import ResultsBox from './components/resultsBox';
import FooterComp from './components/footerComp';


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <JumbotronComp />
      <SearchBox />
      <ResultsBox />
      <FooterComp />
    </div>
  );
}

export default App;
