import React from 'react';
import classes from './SubscribeBlock.module.css'

const SubscribeBlock = () => {
    return (
        <section className={classes.subscribeWrapper}>
            <span>Get your best games deals first</span>
            <div className={classes.searchGames}>
                <input id="search"
                       className={classes.searchInput}
                       type="search"
                       placeholder="Enter your email"/>
                <button type="submit" className={classes.searchBtn}>
                    {/*<img src={searchImg} alt="Search" className={'icnSearch'}/>*/}
                </button>
            </div>
            <button type='submit'>Subscribe</button>
        </section>
    );
};

export default SubscribeBlock;
