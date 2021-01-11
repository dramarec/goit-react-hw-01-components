import React from 'react';

import Profile from './socialProfile/Profile';
import Statistics from './statistic/Statistics';
import Friends from './friendsList/FriendList';
import TransactionHistory from './transactionHistory/TransictionHistory';
import Section from './section/Section';
import Header from './header/Header';
import Main from './main/Main';
import data from '../data';

const App = () => {
    return (
        <>
            <Header title="Home Work #1" />
            <Main>
                <Section title="Social Profile">
                    <Profile {...data.user} />
                </Section>
                <Section title="Statistics">
                    <Statistics stats={data.statisticalData} />

                    <Statistics
                        title="Upload stats"
                        stats={data.statisticalData}
                    />
                </Section>
                <Section title="Friend List">
                    <Friends friends={data.friends} />
                </Section>
                <Section title="Transaction History">
                    <TransactionHistory items={data.transictions} />
                </Section>
            </Main>
        </>
    );
};

export default App;
