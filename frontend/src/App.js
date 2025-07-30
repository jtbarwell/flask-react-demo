import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './globalCSS/Table.css';

import HomePage from './HomePageFolder/HomePage';
import MyRosterPage from './MyRosterPageFolder/MyRosterPage';
import BattingPage from './BattingPage';
import PitchingPage from './PitchingPage';
import FieldingPage from './FieldingPage';

function App() {

    return (
        <Router>
            <ul>
                <nav>
                    <Link to="/"            className="btn btn-primary px-4 py-2">Home</Link>
                    <Link to="/my-roster"   className="btn btn-primary px-4 py-2">My Roster</Link>
                    <Link to="/batting"     className="btn btn-primary px-4 py-2">Batting</Link>
                    <Link to="/pitching"    className="btn btn-primary px-4 py-2">Pitching</Link>
                    <Link to="/fielding"    className="btn btn-primary px-4 py-2">Fielding</Link>
                </nav>
            </ul>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-roster" element={<MyRosterPage />} />
                <Route path="/batting" element={<BattingPage />} />
                <Route path="/pitching" element={<PitchingPage />} />
                <Route path="/fielding" element={<FieldingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
 