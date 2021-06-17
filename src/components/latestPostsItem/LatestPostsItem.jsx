import React from 'react';
import classes from './LatestPostsItem.module.css'
import icnRepost from '../../assets/img/repost.png'
import icnArrow from '../../assets/img/arrow.png'
import icnHands from '../../assets/img/hands.png'
import icnMessage from '../../assets/img/icn-comments.png'

const latestPostsItem = ({imgSrc, name, linkName,
                             postText, followersCount, commentsCount, wasOnline}) => {
    return (
        <div className={classes.LatestPostsItem}>
            <div className={classes.avatar}>
                <img src={imgSrc} alt={name}/>
                <div>
                    <span className={classes.name}>{name}</span><br/>
                    <span className={classes.linkName}>{linkName}</span><br/>
                    <span className={classes.followersCount}>{followersCount}</span>
                </div>
                <span className={classes.wasOnline}>{wasOnline}</span>
            </div>
            <p className={classes.postText}>{postText}</p>
            <div className="replyBtns">
                <button className={classes.reportBtn}>
                    <img src={icnRepost} alt="repost"/>
                </button>
                <button className={classes.arrowBtn}>
                    <img src={icnArrow} alt="arrow"/>
                </button>
                <button className={classes.handsBtn}>
                    <img src={icnHands} alt="hands"/>
                </button>
                <span className={classes.commentsCount}>{commentsCount}</span>
                <img src={icnMessage} alt="message"/>
            </div>
        </div>
    );
};

export default latestPostsItem;
