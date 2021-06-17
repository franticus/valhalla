import React from 'react';
import classes from './Header.module.css'
import avatar from "../../assets/img/group-3.png";
import searchImg from "../../assets/img/icn-search.png";
import iconProfile from "../../assets/img/icn-profile.png";
import wallet from "../../assets/img/wallet.png";
import bell from "../../assets/img/bell.png";
import heart from "../../assets/img/path-copy-3.png";
import shopping from "../../assets/img/inc-shopping.png";
import icnHome from "../../assets/img/icn-home.png";
import icnSocial from "../../assets/img/inc-games.png";
import icnMarket from "../../assets/img/shape-copy.png";
import icnTourn from "../../assets/img/tourn.png";

const Header = () => {
    return (
        <header className={classes.headerWrapper}>
            <img src={avatar} alt="avatar"/>
            <div>
                <div className={classes.searchWrapper}>
                    <div className={classes.searchGames}>
                        <input id="search"
                               className={classes.searchInput}
                               type="search"
                               placeholder="Search games, gears, accessories.."/>
                        <button type="submit" className={classes.searchBtn}>
                            <img src={searchImg} alt="Search"/>
                        </button>
                    </div>

                    <ul className={classes.headerLinks}>
                        <li className={classes.headerLinksItem}>
                            <img src={iconProfile} alt="link"/>
                        </li>
                        <li className={classes.headerLinksItem}>
                            <img src={wallet} alt="link"/>
                        </li>
                        <li className={classes.headerLinksItem}>
                            <img src={bell} alt="link"/>
                        </li>
                        <li className={classes.headerLinksItem}>
                            <img src={heart} alt="link"/>
                        </li>
                        <li className={classes.headerLinksItem}>
                            <img src={shopping} alt="link"/>
                        </li>
                    </ul>
                </div>
                <div>
                    <nav className={classes.navBar} role={'navigation'}>
                        <a href="/home" className={classes.active}>
                            <img src={icnHome} alt="home"/>Home</a>
                        <a href="/social">
                            <img src={icnSocial} alt="social"/>Social</a>
                        <a href="/market">
                            <img src={icnMarket} alt="market"/>Market</a>
                        <a href="/tournaments">
                            <img src={icnTourn} alt="tournaments"/>Tournaments</a>
                    </nav>
                </div>
            </div>


        </header>
    );
};

export default Header;
