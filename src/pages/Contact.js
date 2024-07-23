import { APIProvider, Map } from '@vis.gl/react-google-maps';
import '../styles/main.scss';

function Contact() {
  return (
    <div className="main-content">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="phone">
          Phone: <a href="tel:919-837-2021">919-837-2021</a><br/>
          Email: <a href="mailto:caslabsllc@gmail.com">caslabsllc@gmail.com</a>
        </div>
        <div className="map">
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
            <Map
              defaultCenter={{ lat: 35.5863037109375, lng: -79.42861938476562 }}
              defaultZoom={15}
              disableDefaultUI={true}
            />
          </APIProvider>
        </div>
      </div>
    </div>
  );
}

export default Contact;
