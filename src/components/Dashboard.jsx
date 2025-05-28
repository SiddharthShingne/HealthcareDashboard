import React from 'react';
import '../style/dashboard.css';
import Schedule from './Schedule';
import Calendar from './Calendar';
import Activity from './Activity';
import Sidebar from './SideBar';
import Appointment from './Appointment';

const Dashboard = () => {
  const generalItems = [
    { label: 'Dashboard', icon: '/assets/dash.jpeg' },
    { label: 'History', icon: '/assets/history.jpeg' },
    { label: 'Calendar', icon: '/assets/calendar.jpeg' },
    { label: 'Appointments', icon: '/assets/appointment.png' },
    { label: 'Statistics', icon: '/assets/statistics.jpeg' }
  ];

  const toolsItems = [
    { label: 'Chat', icon: '/assets/chat.png' },
    { label: 'Support', icon: '/assets/support.png' }
  ];

  const settingItem = { label: 'Setting', icon: '/assets/settings.jpeg' };

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
