import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './globalCSS/Table.css';
import './globalCSS/App.css';

import HomePage from './HomePageFolder/HomePage';
import MyRosterPage from './MyRosterPageFolder/MyRosterPage';
import BattingPage from './BattingPageFolder/BattingPage';
import PitchingPage from './PitchingPageFolder/PitchingPage';
import FieldingPage from './FieldingPageFolder/FieldingPage';

function Header() {
    const location = useLocation(); // for highlighting active nav

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/my-roster', label: 'My Roster' },
        { path: '/batting', label: 'Batting' },
        { path: '/pitching', label: 'Pitching' },
        { path: '/fielding', label: 'Fielding' },
    ];

    return (
        <header className="d-flex py-3 mb-4 border-bottom bg-light">
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-3">Fantasy Baseball Dashboard</span>
                </Link>

                <ul className="nav nav-pills">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.path}>
                            <Link
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>

    );
}

function App() {
    return (
        <Router>
            <Header />
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
 