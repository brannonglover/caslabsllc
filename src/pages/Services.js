import '../styles/main.scss';
import services from '../assets/services.json';

function Services() {
  return (
    <div className="main-content">
      <select>
        <option>select service...</option>
        {Object.keys(services).map(service => {
          return (
            <option value={service}>{service}</option>
          )
        })}
      </select>
    </div>
  );
}

export default Services;
