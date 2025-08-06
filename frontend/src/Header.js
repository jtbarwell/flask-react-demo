import React, { useEffect, useState } from 'react';
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
                    {
                        label: 'AL East',
                        dropdown: true,
                        items: [    
                            { path: '/batting/teams/ALEastTOR', label: 'Toronto Blue Jays' },
                            { path: '/batting/teams/ALEastNYY', label: 'New York Yankees' },
                            { path: '/batting/teams/ALEast/BOS', label: 'Boston Red Sox' },
                            { path: '/batting/teams/ALEast/TBR', label: 'Tampa Bay Rays' },
                            { path: '/batting/teams/ALEast/BAL', label: 'Baltimore Orioles' },
                        ]
                    },
                    { 
                        label: 'AL West',
                        dropdown: true,
                        items: [
                            { path: '/batting/teams/ALWest/HOU', label: 'Houston Astros'},
                            { path: '/batting/teams/ALWest/SEA', label: 'Seasttle Mariners'},
                            { path: '/batting/teams/ALWest/TEX', label: 'Texas Rangers'},
                            { path: '/batting/teams/ALWest/LAA', label: 'Los Angeles Angels'},
                            { path: '/batting/teams/ALWest/ATH', label: 'Athletics'},
                        ]
                    },
                ]
            }
        ]
    },
    { path: '/pitching', label: 'Pitching' },
    { path: '/fielding', label: 'Fielding' }
];



function recurseHeader(item, parentKey = '', openSubmenus, handleSubmenuToggle) {
    return (
        <ul className="dropdown-menu">
            {item.items.map((subItem, subIndex) => {
                const key = `${parentKey}/${subItem.label}`;

                if(!subItem.dropdown) {
                    return (
                        <li key={key}>
                            <Link className="dropdown-item" to={subItem.path}>{subItem.label}</Link>
                        </li>
                    )
                } else {
                    return (
                        <li className={`dropdown-submenu ${openSubmenus[key] ? 'show' : ''}`} key={key}>
                            <a className="dropdown-item dropdown-toggle" href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleSubmenuToggle(key);
                                }}>{subItem.label}</a>
                            
                            {recurseHeader(subItem, key, openSubmenus, handleSubmenuToggle)}
                            
                        </li>
                    )
                }
            })}
        </ul>
    );
}






function Header() {
    const location = useLocation(); // for highlighting active nav

    const [openRootDropdown, setOpenRootDropdown] = useState(null);
    const [openSubmenus, setOpenSubmenus] = useState({});



    const handleRootDropdownToggle = (key) => {
        setOpenRootDropdown(prev => {
            if (prev === key) {
                // Closing the dropdown, also reset all submenus
                setOpenSubmenus({});
                return null;
            } else {
                // Opening a new root dropdown, reset submenus
                setOpenSubmenus({});
                return key;
            }
        });
    };

    const handleSubmenuToggle = (key) => {
        setOpenSubmenus(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };



    return (
        <header className="d-flex py-3 mb-4 border-bottom bg-light">
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
                    <span className="fs-3">Fantasy Baseball Dashboard</span>
                </Link>

                

                <ul className="nav">
                    {navItems.map((item, index) => {
                        if (!item.dropdown) {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>{item.label}</Link>
                                </li>
                            )
                        } else {
                            return (
                                <li className="nav-item dropdown" key={index}>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{item.label}</a>
                                    
                                    {recurseHeader(item, item.label, openSubmenus, handleSubmenuToggle)}
                                    
                                </li>
                            )
                        }
                    })}
                </ul>





            </div>
        </header>

    );
}
export default Header;