import  '../style/schedule.css' 

import injection from '../assets/injection.png'
import eye from'../assets/eye.jpeg'
import heart from '../assets/heart.jpeg'
import face from '../assets/face.jpeg'


const Schedule = () => {
  return (
    <section className="schedule-section">
      
      <h3 className="section-title">The Upcoming Schedule</h3>

      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="appointment">
          <strong>
            Health checkup complete <img className="appointment-icon" src={injection} alt="Injection Icon" />
          </strong>
          <span>11:00 AM</span>
        </div>
        <div className="appointment">
          <strong>
            Ophthalmologist <img className="appointment-icon" src={eye} alt="Eye Icon" />
          </strong>
          <span>14:00 PM</span>
        </div>
      </div>

      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="appointment">
          <strong>
            Cardiologist <img className="appointment-icon" src={heart} alt="Heart Icon" />
          </strong>
          <span>12:00 AM</span>
        </div>
        <div className="appointment">
          <strong>
            Neurologist <img className="appointment-icon" src={face} alt="Face Icon" />
          </strong>
          <span>16:00 PM</span>
        </div>
      </div>
    </section>
  );
};
export default Schedule;
