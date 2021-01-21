import React from 'react';
import Elements from './Elements';
import styles from './Transaction.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
        <div>
            <table className={styles.transactionHistory}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {items.map(prop => {
                        return <Elements key={prop.id} items={prop} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
