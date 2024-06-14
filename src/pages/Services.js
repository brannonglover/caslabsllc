import { useState } from 'react';
import '../styles/main.scss';
import services from '../assets/services.json';

function Services() {
  const [output, setOutput] = useState(null);
  
  function handleDropdown(e) {
    Object.keys(services).forEach(service => {
      if (service === e.target.value) {
        setOutput(services[service]);
      }
    })
  }

  return (
    <div className="main-content">
      <div className='services'>
        <select onChange={handleDropdown}>
          <option>select service...</option>
          {Object.keys(services).map(service => {
            return (
              <option value={service}>{service}</option>
            )
          })}
        </select>
      </div>
      <div className='services-output' dangerouslySetInnerHTML={{__html: output}}></div>
    </div>
  );
}

export default Services;
