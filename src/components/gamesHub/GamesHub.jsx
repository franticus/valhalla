import React from 'react';
import classes from './gamesHub.module.css'
import PreorderData from "../../mockData/PreorderData";
import PreorderCards from "../preorderCards/PreorderCards";
import HubSections from "./hubSections/HubSections";

const GamesHub = () => {
    return (
        <section className={classes.gamesHubWrapper}>
            <div className={classes.gamesHub}>
                <p className={classes.gamesHubTitle}>Games Hub</p>
                <p className={classes.gamesHubText}>The best offers, new games, AAA titles and high-quality video
                    games..</p>
                <button className={classes.discoverAll}>Discover All</button>
            </div>
            <HubSections/>
            <div className={classes.gamesHub}>
                <p className={classes.gamesHubTitle}>Upcoming Games</p>
                <p className={classes.gamesHubText}>Pre-order an upcoming game to start playing on Day 1. </p>
                <button className={classes.discoverAll}>Discover All</button>
            </div>
            <div className={classes.preorderCardsWrapper}>
                {PreorderData.map((e, index) => (
                    <PreorderCards key={index}
                                   title={e.title}
                                   imgSrc={e.imgSrc}
                                   curPrice={e.curPrice}
                                   discount={e.discount}/>
                ))}
            </div>
            <div className={classes.loadMoreBtn}>
                <button className={classes.loadMore}>LOAD MORE</button>
            </div>
        </section>
    );
};

export default GamesHub;
