import  '../style/schedule.css'
const Schedule = () => {
  return (
    <section className="schedule-section">
      
      <h3 className="section-title">The Upcoming Schedule</h3>

      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="appointment">
          <strong>
            Health checkup complete <img className="appointment-icon" src="/assets/injection.png" alt="Injection Icon" />
          </strong>
          <span>11:00 AM</span>
        </div>
        <div className="appointment">
          <strong>
            Ophthalmologist <img className="appointment-icon" src="/assets/eye.jpeg" alt="Eye Icon" />
          </strong>
          <span>14:00 PM</span>
        </div>
      </div>

      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="appointment">
          <strong>
            Cardiologist <img className="appointment-icon" src="/assets/heart.jpeg" alt="Heart Icon" />
          </strong>
          <span>12:00 AM</span>
        </div>
        <div className="appointment">
          <strong>
            Neurologist <img className="appointment-icon" src="/assets/face.jpeg" alt="Face Icon" />
          </strong>
          <span>16:00 PM</span>
        </div>
      </div>
    </section>
  );
};
export default Schedule;
