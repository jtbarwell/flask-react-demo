import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './globalCSS/Table.css';
import './globalCSS/App.css';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/my-roster', label: 'My Roster' },
    {
        label: 'Batting',
        dropdown: true,
        items: [
            { path: '/batting', label: 'All Stats' },
            { path: '/batting/leaderboard', label: 'Leaderboard' },
            {
                label: 'Teams',
                dropdown: true,
                items: [
                    { path: '/batting/teams/TOR', label: 'Toronto Blue Jays' },
                    { path: '/batting/teams/NYY', label: 'New York Yankees' },
                    { path: '/batting/teams/ALEast/BOS', label: 'Boston Red Sox' },
                    { path: '/batting/teams/ALEast/TBR', label: 'Tampa Bay Rays' },
                    { path: '/batting/teams/ALEast/BAL', label: 'Baltimore Orioles' },
                ]
            }
        ]
    },
    { path: '/pitching', label: 'Pitching' },
    { path: '/fielding', label: 'Fielding' }
];


function Header() {
    const location = useLocation(); // for highlighting active nav




    useEffect(() => {
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();  // <== THIS prevents parent dropdown from closing

            const submenu = e.currentTarget.nextElementSibling;
            const isShown = submenu.classList.contains('show');

            // Close other open submenus
            document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(el => {
                el.classList.remove('show');
            });

            if (!isShown) submenu.classList.add('show');
        }

        const submenuToggles = document.querySelectorAll('.dropdown-submenu > a');

        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', handleClick);
        });

        return () => {
            submenuToggles.forEach(toggle => {
            toggle.removeEventListener('click', handleClick);
            });
        };
    }, []);





    return (
        <header className="d-flex py-3 mb-4 border-bottom bg-light">
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-3">Fantasy Baseball Dashboard</span>
                </Link>

                <ul className="nav nav-pills">
                    {navItems.map((item, index) => {
                        if (!item.dropdown) {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>{item.label}</Link>
                                </li>
                            );
                        } else {
                            return (
                                <li className="nav-item dropdown" key={index}>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{item.label}</a>
                                    <ul className="dropdown-menu">
                                        {item.items.map((subItem, subIndex) => {
                                            if (!subItem.dropdown) {
                                                return (
                                                    <li key={subIndex}>
                                                        <Link className="dropdown-item" to={subItem.path}>{subItem.label}</Link>
                                                    </li>
                                                );
                                            } else {
                                                return (
                                                    <li className="dropdown-submenu" key={subIndex}>
                                                        <a className="dropdown-item dropdown-toggle" href="#">{subItem.label}</a>
                                                        <ul className="dropdown-menu">
                                                            {subItem.items.map((deepItem, deepIndex) => (
                                                                <li key={deepIndex}>
                                                                    <Link className="dropdown-item" to={deepItem.path}>{deepItem.label}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </header>

    );
}
export default Header;