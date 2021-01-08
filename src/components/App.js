import React from 'react';
import './style.css';

import Profile from './social-profile/profile';
import user from './social-profile/user.json';

import Statistics from './statistic/statistics';

import Friends from './friends-list/friend-list';
import friends from './friends-list/friends.json';
import transictions from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/transiction-history';

const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics />
            <Friends friends={friends} />
            <TransactionHistory items={transictions} />
        </div>
    );
};

export default App;
