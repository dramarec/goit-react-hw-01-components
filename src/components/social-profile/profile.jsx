import React from 'react';
import styles from './profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;

    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <div className={styles.wrap}>
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className={styles.avatar}
                    />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li className={styles.list}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}> {followers}</span>
                </li>
                <li className={styles.list}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}> {views}</span>
                </li>
                <li className={styles.list}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}> {likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.defaultProps = {
    avatar:
        'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};
Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;
