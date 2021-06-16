import React from 'react'
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import GamesHub from "./components/gamesHub/GamesHub";
import SubscribeBlock from "./components/subscribeBlock/SubscribeBlock";
import FooterNav from "./components/footerNav/FooterNav";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <Slider/>
            <GamesHub/>
            <SubscribeBlock/>
            <FooterNav/>
            <Footer/>
        </div>
    );
}

export default App;
