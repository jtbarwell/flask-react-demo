import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './globalCSS/Table.css';
import './globalCSS/App.css';
import Header from './Header';

import HomePage from './HomePageFolder/HomePage';
import MyRosterPage from './MyRosterPageFolder/MyRosterPage';
import BattingAllStatsPage from './BattingPageFolder/AllStatsBattingPage';
import PitchingPage from './PitchingPageFolder/PitchingPage';
import FieldingPage from './FieldingPageFolder/FieldingPage';



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-roster" element={<MyRosterPage />} />

                <Route path="/batting/all-stats" element={<BattingAllStatsPage />} />
                

                <Route path="/pitching" element={<PitchingPage />} />
                <Route path="/fielding" element={<FieldingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
 