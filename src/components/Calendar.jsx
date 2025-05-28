
const Calendar = () => {


  return (
        <section className="calendar-section">
          <h3 className="section-title">October 2021</h3>
          <table className="calendar-table">
            <thead>
              <tr>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="calendar-dates">
                {[25, 26, 27, 28, 29, 30, 31].map((date) => (
                  <td key={date}>{date}</td>
                ))}
              </tr>
              <tr className="calendar-times">
                {['10:00', '08:00', '12:00', '10:00', '—', '12:00', '10:00'].map((time, i) => (
                  <td key={`time1-${i}`}>{time}</td>
                ))}
              </tr>
              <tr className="calendar-times">
                {['11:00', '09:00', '—', '13:00', '14:00', '14:00', '10:00'].map((time, i) => (
                  <td key={`time2-${i}`}>{time}</td>
                ))}
              </tr>
              <tr className="calendar-times">
                {['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00'].map((time, i) => (
                  <td key={`time3-${i}`}>{time}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>
  );
};

export default Calendar;