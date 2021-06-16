import React from 'react';
import classes from './FollowItem.module.css'
import icnFollowBtn from '../../assets/img/followIcn.png'

const FollowItem = ({title, imgSrc, followersCount}) => {
    return (
            <div className={classes.FollowItem}>
                <div className={classes.followAvatar}>
                    <img src={imgSrc} alt={title}/>
                </div>
                <div className={classes.followDescription}>
                    <span>{title}</span>
                    <span className={classes.followersCount}>{followersCount}</span>
                </div>
                <div className={classes.followBtn}>
                    <img src={icnFollowBtn} alt="follow"/>
                </div>
            </div>
    );
};

export default FollowItem;
