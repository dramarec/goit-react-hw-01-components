import React from 'react';
import styles from './Friends.module.css';

const Friends = ({ friends }) => {
    const elements = friends.map(({ id, isOnline, avatar, name }) => {
        const statusClass = isOnline ? styles.available : styles.notAvailable;
        return (
            <li key={id} className={styles.item}>
                <span className={statusClass}>{isOnline}</span>
                <img className={styles.avata} src={avatar} alt="" width="48" />
                <p className={styles.names}>{name}</p>
            </li>
        );
    });
    return (
        <div>
            <ul className={styles.friendList}>{elements}</ul>
        </div>
    );
};

export default Friends;
