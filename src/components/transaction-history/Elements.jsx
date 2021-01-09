import React from 'react';
import styles from './transaction.module.css';
import Type from './Type';
import PropTypes from 'prop-types';

const Elements = ({ items }) => {
    return (
        <tr key={items.id} className={styles.table}>
            <Type type={items.type} />
            <td>{items.amount}</td>
            <td>{items.currency}</td>
        </tr>
    );
};
Elements.propTypes = {
    items: PropTypes.object,
};
export default Elements;
