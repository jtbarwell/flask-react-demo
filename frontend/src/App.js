import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Table.css';

import HomePage from './HomePage';
import BattingPage from './BattingPage';

function App() {

    return (
        <Router>
            <nav>
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/batting">Batting</Link></li> */}
                    {/* <button class="btn btn-info mb-3"><Link to="/">Home</Link></button>
                    <button class="btn btn-info mb-3"><Link to="/batting">Batting</Link></button> */}
                    <nav>
                        <Link to="/" className="btn btn-primary mb-3 me-2">Home</Link>
                        <Link to="/batting" className="btn btn-primary mb-3">Batting</Link>
                    </nav>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/batting" element={<BattingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
