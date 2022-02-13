import React from 'react';
import Header from './Header';
import Profile from './Profile';
import avatar from '../../images/avatar.jpg';
import { useGlobalContext } from '../../context';

function Home() {
    const { info } = useGlobalContext();
    const { role, author } = info;

    return (
        <div id="home" className="home-container home-on-tablet home-on-mobile">
            <Header>portfolio</Header>
            <Profile img={avatar} role={role}>
                {author}
            </Profile>
        </div>
    );
}

export default Home;
