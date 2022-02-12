import React from 'react';
import { Home, About, Projects, Contact, Footer, Bar } from './components';

function App() {
    return (
        <div className="App">
            <div className="bar on-bar">
                <Bar />
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
