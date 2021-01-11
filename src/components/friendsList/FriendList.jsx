import React from 'react';
import styles from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const Friends = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} {...friend} />
            ))}
        </ul>
    );
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Friends;
