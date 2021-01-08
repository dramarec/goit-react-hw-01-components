import React from 'react';
import styles from './profile.module.css';

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

export default Profile;
