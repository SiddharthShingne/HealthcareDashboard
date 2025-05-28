import React from 'react';
import '../style/dashboard.css';
import Schedule from './Schedule';
import Calendar from './Calendar';
import Activity from './Activity';
import Sidebar from './SideBar';
import Appointment from './Appointment';

import dashIcon from "../../public/assets/dash.jpeg";
import historyIcon from "../../public/assets/history.jpeg";
import calendarIcon from "../../public/assets/calendar.jpeg";
import appointmentIcon from "../../public/assets/appointment.png";
import statisticsIcon from "../../public/assets/statistics.jpeg";
import chatIcon from "../../public/assets/chat.png";
import supportIcon from "../../public/assets/support.png";
import settingsIcon from "../../public/assets/settings.jpeg";



const Dashboard = () => {
  const generalItems = [
    { label: 'Dashboard', icon: dashIcon },
    { label: 'History', icon: historyIcon },
    { label: 'Calendar', icon: calendarIcon },
    { label: 'Appointments', icon: appointmentIcon },
    { label: 'Statistics', icon: statisticsIcon }
  ];

  const toolsItems = [
    { label: 'Chat', icon: chatIcon },
    { label: 'Support', icon: supportIcon }
  ];

  const settingItem = { label: 'Setting', icon: settingsIcon };

  return (
    <div className="dashboard-container gray">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <div>
            <p className="sidebar-label">General</p>
            <ul>
              {generalItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <img src={item.icon} alt={`${item.label} icon`} className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </li>
              ))}
            </ul>

            <p className="sidebar-label">Tools</p>
            <ul>
              {toolsItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <img src={item.icon} alt={`${item.label} icon`} className="nav-icon" />
                  <span className="nav-text">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="setting-item">
            <img src={settingItem.icon} alt="Setting icon" className="nav-icon" />
            <span className="nav-text">{settingItem.label}</span>
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <div className="dashboard-overview">
          {/* LEFT SIDE: Anatomy + Activity */}
          <div className="overview-left">
            {/* Anatomy Section */}
            <Sidebar />

            {/* Activity Section Below Anatomy */}
            <div className="activity-wrapper">
              <Activity />
            </div>
          </div>

          {/* RIGHT SIDE: Calendar + Schedule stacked vertically */}
          <div className="overview-right">
            <div className="calendar-wrapper">
              <Calendar />
            </div>
            <div className="schedule-wrapper">
              <Appointment />
              <Schedule />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
