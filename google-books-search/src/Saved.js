import React from 'react';
import './App.css';
import NavbarComp from './components/navbarComp';
import JumbotronComp from './components/jumbotronComp';
import SavedBox from './components/savedBox';
import FooterComp from './components/footerComp';

function App() {
    return (
        <div className="App">
            <NavbarComp />
            <JumbotronComp />
            <SavedBox />
            <FooterComp />
        </div>
    );
}

export default App;