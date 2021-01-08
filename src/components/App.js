import React from 'react';
import './style.css';

import Profile from './social-profile/profile';
import user from './social-profile/user.json';

import Statistics from './statistic/statistics';

import Friends from './friends-list/friend-list';
import friends from './friends-list/friends.json';
import transictions from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/transiction-history';
import Section from './Section';

const App = () => {
    return (
        <>
            <Section title="Social Profile">
                <Profile
                    name={user.name}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
            </Section>
            <Section title="Statistics">
                <Statistics />
            </Section>
            <Section title="Friend List">
                <Friends friends={friends} />
            </Section>
            <Section title="Transaction History">
                <TransactionHistory items={transictions} />
            </Section>
        </>
    );
};

export default App;
