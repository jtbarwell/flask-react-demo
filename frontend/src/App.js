import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './globalCSS/Table.css';
import './globalCSS/App.css';
import Header from './Header';

//  Home
import HomePage from './HomePageFolder/HomePage';

// Roster
import MyRosterPage from './MyRosterPageFolder/MyRosterPage';

// Batting
import AllStatsBattingPage from './BattingPageFolder/AllStatsBattingPage';
import LeaderboardBattingPage from './BattingPageFolder/LeaderboardBattingPage';
import TORBattingPage from './BattingPageFolder/TeamsPageFolder/TORBattingPage';
import NYYBattingPage from './BattingPageFolder/TeamsPageFolder/NYYBattingPage';
import BOSBattingPage from './BattingPageFolder/TeamsPageFolder/BOSBattingPage';

// Pitching
import PitchingPage from './PitchingPageFolder/PitchingPage';

// Fielding
import FieldingPage from './FieldingPageFolder/FieldingPage';



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-roster" element={<MyRosterPage />} />

                <Route path="/batting/all-stats" element={<AllStatsBattingPage />} />
                <Route path="/batting/leaderboard" element={<LeaderboardBattingPage />} />
                <Route path="/batting/teams/ALEast/TOR" element={<TORBattingPage />} />
                <Route path="/batting/teams/ALEast/NYY" element={<NYYBattingPage />} />
                <Route path="/batting/teams/ALEast/BOS" element={<BOSBattingPage />} />

                <Route path="/pitching" element={<PitchingPage />} />
                <Route path="/fielding" element={<FieldingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
 