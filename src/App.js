import { BsCheck2, BsCheckLg, BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className='header'>
          <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1695879329/Nunify%20Assignment/nunify_ai2ubz.png" alt="Logo" className='logo' />
      </div>
      <div className="horizontal-line"></div>
      <div className='app-sub-container'>
      <div className='body-container'>
        <div className='body-container-one'>
          <div className='body-container-one-left'>
            <h1 className='event-pricing-title'>Transparent <br /> Event App Pricing</h1>
            <p className='free-starter-description'>Get Started for FREE: Pick your Plan Later</p>
            <ul className='included-list'>
                <li className='list-items'><BsCheckLg className="check-icon" />No credit card required</li>
                <li className='list-items'><BsCheckLg className="check-icon" />No Hidden Fees</li>
                <li className='list-items'><BsCheckLg className="check-icon" />25 FREE logins</li>
                <li className='list-items'><BsCheckLg className="check-icon" />5 min setup</li>
                <li className='list-items'><BsCheckLg className="check-icon" />All features to explore</li>
                <li className='list-items'><BsCheckLg className="check-icon" />Excellent Support</li>
            </ul>
          </div>
          <div className='body-container-one-right'>
            <div className="body-container-one-right-sub">
              <div className="body-container-one-right-top">
                  <h1 className="login-title">100 LOGINS</h1>
                  <select className="currency-select">
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="JPY">JPY</option>
                      <option value="GBP">GBP</option>
                      <option value="AUD">AUD</option>
                      <option value="CAD">CAD</option>
                      <option value="CHF">CHF</option>
                      <option value="CNY">CNY</option>
                      <option value="SEK">SEK</option>
                      <option value="NZD">NZD</option>
                      <option value="MXN">MXN</option>
                      <option value="SGD">SGD</option>
                      <option value="HKD">HKD</option>
                      <option value="NOK">NOK</option>
                      <option value="KRW">KRW</option>
                      <option value="TRY">TRY</option>
                      <option value="RUB">RUB</option>
                      <option value="INR">INR</option>
                      <option value="BRL">BRL</option>
                      <option value="ZAR">ZAR</option>
                      <option value="AED">AED</option>
                      <option value="SAR">SAR</option>
                      <option value="IDR">IDR</option>
                      <option value="MYR">MYR</option>
                      <option value="THB">THB</option>
                      <option value="EGP">EGP</option>
                      <option value="PHP">PHP</option>
                      <option value="CLP">CLP</option>
                      <option value="ARS">ARS</option>
                      <option value="COP">COP</option>
                  </select>
                </div>
                <div className="body-container-one-right-bottom">
                    <h1 className="amount-per-event-title">$400<span className="event-title">/Event</span></h1>
                    <button className="try-for-free-button">TRY FOR FREE<FaAngleRight className="right-aangle" /></button>
                </div>
              </div>
              <p className="what-is-included-title">What is included? <BsFillArrowDownCircleFill className="down-arrow" /></p>
          </div>
        </div>
        <div className="body-container-two">
          <div className="body-container-two-top">
            <div className="overlap-container">
              <button className="login-hundred-button">100<br /><span className="login-title">LOGINS</span></button>
              <p className="attendees-title">How many Attendees?</p>
            </div>
            <div className="login-count-container">
              <div className="login-counts-one"></div>
              <div className="login-counts-two"></div>
              <div className="login-counts-three"></div>
              <div className="login-counts-four"></div>
              <div className="login-counts-five"></div>
              <div className="login-counts-six"></div>
            </div>
          </div>
          <div className="login-numbers-container">
            <div className="first-hundred-container">
              <div className="numbers">0</div>
              <div className="number-twentyfive">25</div>
              <div className="numbers">100</div>
            </div>
            <div className="numbers">300</div>
            <div className="numbers">500</div>
            <div className="numbers">1000</div>
            <div className="numbers-thousand">2000</div>
            <div className="numbers">2000+</div>
          </div>
          

        </div>
        <div className="body-container-three">
          <h className="upgrade-and-help-title">Looking to Upgrade or Need Help?</h>
          <p className="upgrade-and-help-description">Do you need a custom plan tailored to your specific requirements, or are you interested in our premium support or managed services? We've got you covered.</p>
          <p className="upgrade-and-help-description">Plus, you can upgrade your plan with our product add-ons such as expo, live-streaming, integrated on-site check-in, and more.</p>
          <button className="talk-to-us-button">TALK TO US</button>
        </div>
        <div className="body-container-four">
          <div>
            <h1 className="tech-leader-title">Work with a Reliable Tech Leader</h1>
            <p className="tech-leader-description">Trusted by the Best, and So Can You.</p>
          </div>
          <div className="tech-companied-container">
            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1695879398/Nunify%20Assignment/Google_logo_Colour_xelbar.png" alt="Google" className="company-logo" />
            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1695879398/Nunify%20Assignment/Adobe_logo_Colour_jh2qls.png" alt="Adobe" className="company-logo" />
            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1695879398/Nunify%20Assignment/Amazon_logo_Colour_tn5cqj.png" alt="Amazon" className="company-logo" /> 
            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1695879397/Nunify%20Assignment/Layer_2_wul4nf.png" alt="ThoughWorks" className="custom-company-logo" />
            <img src="https://res.cloudinary.com/da7ik4khq/image/upload/v1695879397/Nunify%20Assignment/Group_199_yfc7qy.png" alt="DELL Techologies" className="custom-company-logo" />
          </div>
          <button className="start-free-trial-button">START YOUR FREE TRAIL</button>
        </div>
        <div className="body-container-five">
          <h1 className="base-plan-inclution">What’s Included in your base plan?</h1>
          <div className="inclutions-container-one">
            <h1 className="inclutions-title">Agenda & Content</h1>
            <AiOutlinePlusCircle className="circle-plus" />
          </div>
          <div className="inclutions-container">
            <h1 className="inclutions-title">DIY Drag & Drop Event App Builder</h1>
            <AiOutlinePlusCircle className="circle-plus" />
          </div>
          <div className="inclutions-container">
            <h1 className="inclutions-title">Audience Engagement</h1>
            <AiOutlinePlusCircle className="circle-plus" />
          </div>
          <div className="inclutions-container">
            <h1 className="inclutions-title">GDPR & SOC-2 Compliance</h1>
            <AiOutlinePlusCircle className="circle-plus" />
          </div>
          <div className="inclutions-container">
            <h1 className="inclutions-title">24 x 7 Customer Care</h1>
            <AiOutlinePlusCircle className="circle-plus" />
          </div>
          <div className="inclutions-container">
            <h1 className="inclutions-title">Sponsor & Exhibitor Listing</h1>
            <AiOutlinePlusCircle className="circle-plus" />
          </div>
        </div>
        <div className="body-container-six">
          <h1 className="question-and-request-title">Question not answered ? <br />
              or Have a custom request ?</h1>
          <button className="talk-to-sales-button">TALK TO SALES</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;