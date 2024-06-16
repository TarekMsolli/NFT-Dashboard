import React from 'react';
import { FaHome, FaCompass, FaGift, FaChartBar, FaBookmark, FaCog, FaBell } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import pfp from '../assets/pfp.png';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const selected = location.pathname.substring(1);

  const icons = [
    { name: 'home', icon: <FaHome />, route: '/home' },
    { name: 'explore', icon: <FaCompass />, route: '/explore' },
    { name: 'gift', icon: <FaGift />, route: '/gift' },
    { name: 'stats', icon: <FaChartBar />, route: '/stats' },
    { name: 'bookmarks', icon: <FaBookmark />, route: '/bookmarks' },
    { name: 'settings', icon: <FaCog />, route: '/settings' },
  ];

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="icon-container">
        {icons.map(item => (
          <Link to={item.route} key={item.name} className="link-wrapper">
            <div className={`icon-wrapper ${selected === item.name ? 'selected' : ''}`}>
              {React.cloneElement(item.icon, {
                className: `icon ${selected === item.name ? 'selected' : ''}`,
                size: 24,
              })}
            </div>
          </Link>
        ))}
      </div>
      <div className="bottom-icons">
        <Link to="/notifications" className="link-wrapper">
          <div className={`icon-wrapper ${selected === 'notifications' ? 'selected' : ''}`}>
            <FaBell className={`icon ${selected === 'notifications' ? 'selected' : ''}`} size="100%" />
          </div>
        </Link>
        <Link to="/profile" className="link-wrapper">
          <div className={`profile-pic-wrapper ${selected === 'profile' ? 'selected' : ''}`}>
            <img src={pfp} alt="Profile" className={`profile-pic ${selected === 'profile' ? 'selected' : ''}`} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
