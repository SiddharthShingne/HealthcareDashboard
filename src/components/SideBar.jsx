import body from'../assets/body.jpeg'


const Sidebar = () => {
  return (
    <section className="dashboard-overview">
          <div className="overview-image-and-cards">
            <div className="image-card">
              <img src={body} alt="Human Body" className="anatomy-image" />
              <button className="tag tag-heart">❤️ Healthy Heart</button>
              <button className="tag tag-leg">🦵 Healthy Leg</button>
            </div>

            <div className="health-cards">
              {[
                { title: 'Lungs', date: '26 Oct 2021', color: 'red' },
                { title: 'Teeth', date: '26 Oct 2021', color: 'green' },
                { title: 'Bone', date: '26 Oct 2021', color: 'orange' },
              ].map((card) => (
                <div key={card.title} className="health-card">
                  <div className="card-icon">🩺</div>
                  <div>
                    <h4>{card.title}</h4>
                    <p>Date: {card.date}</p>
                    <div className={`progress ${card.color}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
};

export default Sidebar;