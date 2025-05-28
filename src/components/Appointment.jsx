import '../style/Appointment.css';

const Appointment = () => {
  return (
    <div className="appointment-card">
      <div className="appointment-section">
        <h3 className="appointment-title">Dentist</h3>
        <img src="/assets/teeth.jpeg" alt="" />
        <p className="appointment-time">09:00-11:00</p>
        <div className="doctor-info">
          <span className="doctor-name">Dr. Cameron Williamson</span>
        </div>
      </div>

      <div className="appointment-divider">
        <h3 className="appointment-title">Physiotherapy Appointment</h3>
                <img src="/assets/arm.png" alt="" />

        <p className="appointment-time">11:00-12:00</p>
        <div className="doctor-info">
          <span className="doctor-name">Dr. Kevin Djones</span>
        </div>
      </div>
    </div>
  );
};

export default Appointment;