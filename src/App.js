import React from 'react';
import { Home, About, Projects, Contact, Footer } from './components';

function App() {
    return (
        <div className="App">
            <div className="toastify"></div>
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
