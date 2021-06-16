import React from 'react';
import classes from './gamesHub.module.css'
import LatestPostsItem from "../latestPostsItem/LatestPostsItem";
import channelsData from "../ChannelsData";
import ChanelItem from "../chanelItem/ChanelItem";
import FollowItem from "../followItem/FollowItem";
import followersData from "../FollowersData";
import postsData from "../PostsData";
import PreorderData from "../PreorderData";
import PreorderCards from "../preorderCards/PreorderCards";

const GamesHub = () => {
    return (
        <section className={classes.gamesHubWrapper}>
            <div className={classes.gamesHub}>
                <p className={classes.gamesHubTitle}>Games Hub</p>
                <p className={classes.gamesHubText}>The best offers, new games, AAA titles and high-quality video
                    games..</p>
                <button className={classes.discoverAll}>Discover All</button>
            </div>
            <section className={classes.hubSections}>
                <div className={classes.latestPosts}>
                    <p>Latest posts</p>
                    {postsData.map((e, index) => {
                        return <LatestPostsItem key={index}
                                                imgSrc={e.imgSrc}
                                                name={e.name}
                                                linkName={e.linkName}
                                                wasOnline={e.wasOnline}
                                                postText={e.postText}
                                                followersCount={e.followersCount}
                                                commentsCount={e.commentsCount}
                        />
                    })}
                </div>
                <div className={classes.channels}>
                    <p>Channels</p>
                    {channelsData.map((e, index) => {
                        return <ChanelItem key={index}
                                           imgSrc={e.imgSrc}
                                           title={e.title}
                                           usersCount={e.usersCount}
                        />
                    })}
                    <button className={classes.findMore}>Find more</button>
                </div>
                <div className={classes.whoToFollow}>
                    <p>Who to follow</p>
                    {followersData.map((e, index) => {
                        return <FollowItem key={index}
                                           imgSrc={e.imgSrc}
                                           title={e.title}
                                           followersCount={e.followersCount}
                        />
                    })}
                    <button className={classes.findMore}>Find more</button>
                </div>
            </section>
            <div className={classes.gamesHub}>
                <p className={classes.gamesHubTitle}>Upcoming Games</p>
                <p className={classes.gamesHubText}>Pre-order an upcoming game to start playing on Day 1. </p>
                <button className={classes.discoverAll}>Discover All</button>
            </div>
            <div className={classes.preorderCardsWrapper}>
                {PreorderData.map((e, index) => {
                    return <PreorderCards key={index}
                                          title={e.title}
                                          imgSrc={e.imgSrc}
                                          curPrice={e.curPrice}
                                          discount={e.discount}/>
                })}
            </div>
            <div className={classes.loadMoreBtn}>
                <button className={classes.loadMore}>LOAD MORE</button>
            </div>
        </section>
    );
};

export default GamesHub;
