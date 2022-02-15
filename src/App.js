import React from 'react';
import { Home, About, Projects, Contact, Footer, Bar } from './components';
import { BsList } from 'react-icons/bs';
import { useGlobalContext } from './context';

function App() {
    const { isBarOpen, toggleBar } = useGlobalContext();

    return (
        <div className="App">
            <div className={`bar on-bar ${!isBarOpen && 'notActive'}`}>
                <BsList
                    className="bar__icon"
                    onClick={() => toggleBar(!isBarOpen)}
                />
                {isBarOpen && <Bar />}
            </div>
            <div className="portfolio-container">
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
