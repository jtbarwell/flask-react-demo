import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
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

import TORBattingPage from './BattingPageFolder/TeamsPageFolder/ALEastFolder/TORBattingPage';
import NYYBattingPage from './BattingPageFolder/TeamsPageFolder/ALEastFolder/NYYBattingPage';
import BOSBattingPage from './BattingPageFolder/TeamsPageFolder/ALEastFolder/BOSBattingPage';
import TBRBattingPage from './BattingPageFolder/TeamsPageFolder/ALEastFolder/TBRBattingPage';
import BALBattingPage from './BattingPageFolder/TeamsPageFolder/ALEastFolder/BALBattingPage';

import ATHBattingPage from './BattingPageFolder/TeamsPageFolder/ALWestFolder/ATHBattingPage';
import HOUBattingPage from './BattingPageFolder/TeamsPageFolder/ALWestFolder/HOUBattingPage';
import LAABattingPage from './BattingPageFolder/TeamsPageFolder/ALWestFolder/LAABattingPage';
import SEABattingPage from './BattingPageFolder/TeamsPageFolder/ALWestFolder/SEABattingPage';
import TEXBattingPage from './BattingPageFolder/TeamsPageFolder/ALWestFolder/TEXBattingPage';

import CHWBattingPage from './BattingPageFolder/TeamsPageFolder/ALCentralFolder/CHWBattingPage';
import CLEBattingPage from './BattingPageFolder/TeamsPageFolder/ALCentralFolder/CLEBattingPage';
import DETBattingPage from './BattingPageFolder/TeamsPageFolder/ALCentralFolder/DETBattingPage';
import KCRBattingPage from './BattingPageFolder/TeamsPageFolder/ALCentralFolder/KCRBattingPage';
import MINBattingPage from './BattingPageFolder/TeamsPageFolder/ALCentralFolder/MINBattingPage';

// Pitching
import AllStatsPitchingPage from './PitchingPageFolder/AllStatsPitchingPage';

// Fielding
import FieldingPage from './FieldingPageFolder/FieldingPage';



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-roster" element={<MyRosterPage />} />

                {/* Batting */}
                <Route path="/batting/all-stats" element={<AllStatsBattingPage />} />
                <Route path="/batting/leaderboard" element={<LeaderboardBattingPage />} />

                <Route path="/batting/teams/ALEast/TOR" element={<TORBattingPage />} />
                <Route path="/batting/teams/ALEast/NYY" element={<NYYBattingPage />} />
                <Route path="/batting/teams/ALEast/BOS" element={<BOSBattingPage />} />
                <Route path="/batting/teams/ALEast/TBR" element={<TBRBattingPage />} />
                <Route path="/batting/teams/ALEast/BAL" element={<BALBattingPage />} />
                
                <Route path="/batting/teams/ALWest/ATH" element={<ATHBattingPage />} />
                <Route path="/batting/teams/ALWest/HOU" element={<HOUBattingPage />} />
                <Route path="/batting/teams/ALWest/LAA" element={<LAABattingPage />} />
                <Route path="/batting/teams/ALWest/SEA" element={<SEABattingPage />} />
                <Route path="/batting/teams/ALWest/TEX" element={<TEXBattingPage />} />

                <Route path="/pitching" element={<AllStatsPitchingPage />} />
                <Route path="/fielding" element={<FieldingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
 