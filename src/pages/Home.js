import '../styles/main.scss';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />
      <div className="main-content">
        <h1>Our Mission</h1>
        <p>Carolina Analytical Services provides comprehensive testing of animal feeds, pet foods, animal treats and agricultural foods. </p>
        <p>We are an independently owned lab which focuses on food analysis and food safety. We provide the best quality results to our clients while delivering best in class customer service, fast turnaround time and industry-leading value.</p>
        <p>For further details about our food testing capabilities, you can contact us to learn more.</p>
      </div>
    </>
  );
}

export default Home;
