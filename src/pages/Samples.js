import pdf from '../images/pdf-icon.png';
import '../styles/main.scss';

function Samples() {
  return (
    <div>
      <div className="main-content">
        <h1>Samples Submission<br/>Instructions</h1>
        <p>When submitting samples, please identify your samples properly, along with the specific test to be performed. Please provide estimated expected levels when possible. Please provide company information. Coolers can be returned if requested. Samples are retained for 30 days, unless you send other instructions.</p>
        <p>Some samples require additional preparation for analysis and may have a preparation charge. Our testing is only representative of the sample submitted, please use proper sampling techniques.</p>
        <p>Click here to download the Sample Submission Form or click the PDF logo below.</p>
        <p>All results are strictly confidential and are not released without our client's permission. Please call or email our customer service for more information.</p>
        <div className="pdf">
          <div className='pdf-icon'>
            <img src={pdf} alt="PDF" />
          </div>
          <div>
            <a href="../assets/Carolina-Analytical-Services-Sample-Submission-Form-2021.pdf" title="Carolina Analytical Services Sample Form">Carolina-Analytical-Services-Sample-Submission-Form-2021.pdf</a><br />
            Size: 223.417 Kb<br />
            Type: pdf
          </div>
        </div>
      </div>
    </div>
  );
}

export default Samples;
