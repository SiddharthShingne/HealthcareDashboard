import '../style/activity.css'

const Activity = () => {
  return (
         <div className="activity-section">
          <div className="activity-header">
            <h3 className="section-title">Activity</h3>
            <span className="activity-note">3 appointment on this week</span>
          </div>

          <div className="activity-chart">
            {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="activity-day">
                <div className="bars">
                  <div className="bar bar-light" style={{ height: `${Math.random() * 50 + 30}px` }}></div>
                  <div className="bar bar-primary" style={{ height: `${Math.random() * 50 + 30}px` }}></div>
                  <div className="bar bar-accent" style={{ height: `${Math.random() * 50 + 30}px` }}></div>
                </div>
                <span className="day-label">{day}</span>
              </div>
            ))}
          </div>
        </div>
  );
};

export default Activity;