import '../styles/main.scss';

function Contact() {
  return (
    <div className="main-content">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="phone">
          Phone: <a href="tel:919-837-2021">919-837-2021</a>
        </div>
        <div className="map">
          <gmp-map center="35.5863037109375,-79.42861938476562" zoom="14" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="35.5863037109375,-79.42861938476562" title="My location"></gmp-advanced-marker>
          </gmp-map>
        </div>
      </div>
    </div>
  );
}

export default Contact;
