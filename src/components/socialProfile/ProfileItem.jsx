import styles from './Profile.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const ProfileItem = ({ props }) => {
    return (
        <li className={styles.list}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}> {props}</span>
        </li>
    );
};

export default ProfileItem;

ProfileItem.propTypes = {
    props: PropTypes.number.isRequired,
};
