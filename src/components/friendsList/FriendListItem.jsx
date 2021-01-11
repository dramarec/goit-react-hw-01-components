import React from 'react';

import styles from './Friends.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
    const statusClass = isOnline ? styles.available : styles.notAvailable;
    return (
        <li key={id} className={styles.item}>
            <span className={statusClass}></span>
            <img className={styles.avata} src={avatar} alt="" width="48" />
            <p className={styles.names}>{name}</p>
        </li>
    );
};

export default FriendListItem;

FriendListItem.defaultProps = {
    isOnline: true,
};

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
