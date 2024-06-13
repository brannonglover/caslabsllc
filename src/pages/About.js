import storefront from '../images/cas-labs.jpg';
import '../styles/main.scss';

function About() {
  return (
    <>
      <div className='storefront'><img src={storefront} alt="Carolina Analytics" /></div>
      <div className="main-content">
        <h1>About Us</h1>
        <p>Carolina Analytical Services, LLC, was established in 2004, as an independent analytical testing firm acclaimed as one of the nations finest agriculture testing labs. Qualified technicians in our facilities in Bear Creek , North Carolina perform full analytical services in chemical techniques, as well as duplicate assays, frequent instrument calibration, collaborative studies, and participating in check sample programs such as AOCS and AAFCO, to insure that our clients receive only the most accurate, reliable data, with our unique personal service.  The Staff at Carolina Analytical have a history with Eurofins Scientific that dates back to 2000 and  Woodson-Tenent Labs back to 1974.  Our Technicians and Lab Manager have been active in the laboratory environment since 1974.</p>
      </div>
    </>
  );
}

export default About;
