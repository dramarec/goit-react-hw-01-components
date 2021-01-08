import React from 'react';
import styles from './transaction.module.css';
import Type from './type';

const TransactionHistory = ({ items }) => {
    const elements = items.map(item => {
        return (
            <tr key={item.id} className={styles.table}>
                <Type type={item.type} />
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
        );
    });
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
                <tbody className={styles.tbody}>{elements}</tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;
