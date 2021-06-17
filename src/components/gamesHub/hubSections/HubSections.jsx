import React from 'react';
import classes from "../gamesHub.module.css";
import postsData from "../../../mockData/PostsData";
import LatestPostsItem from "../../latestPostsItem/LatestPostsItem";
import channelsData from "../../../mockData/ChannelsData";
import ChanelItem from "../../chanelItem/ChanelItem";
import followersData from "../../../mockData/FollowersData";
import FollowItem from "../../followItem/FollowItem";

const HubSections = () => {
    return (
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
    );
};

export default HubSections;
