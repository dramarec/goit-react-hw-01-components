import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';

const Profile = ({ name, tag, location, avatar, stats }) => {
    const keys = Object.keys(stats);

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
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                {keys.map(key => (
                    <ProfileItem key={key} props={stats[key]} />
                ))}
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
    stats: PropTypes.object.isRequired,
};

export default Profile;
