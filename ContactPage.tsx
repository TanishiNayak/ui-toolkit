// src/components/HeroSection/HeroSection.tsx
import styles from './ContactPage.module.css';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tsx' | 'css'>('tsx');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 
  const tsxCode = `
import React from 'react';
import './AboutPage1.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage1: React.FC = () => {
  return (
    <div className="aboutPage1Container">
      <section className="heroSection">
        <h1>About Us</h1>
        <p>Learn more about our company, our mission, and our team.</p>
      </section>
      <section className="carouselSection">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Carousel 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Carousel 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Carousel 3" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section>
      <section className="missionSection">
        <h2>Our Mission</h2>
        <p>To deliver the best products and services to our customers and make a positive impact on the community.</p>
        <img src="https://via.placeholder.com/1200x600" alt="Mission Image" className="largeImage" />
      </section>
      <section className="teamSection">
        <h2>Meet Our Team</h2>
        <div className="teamMembers">
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="teamImage" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="teamImage" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="teamMember">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="teamImage" />
            <h3>Mike Johnson</h3>
            <p>CFO</p>
          </div>
        </div>
      </section>
      <section className="valuesSection">
        <h2>Our Values</h2>
        <p>We believe in integrity, innovation, and customer satisfaction.</p>
        <div className="valueBoxes">
          <div className="valueBox">
            <h3>Integrity</h3>
            <p>We adhere to the highest standards of integrity and ethical behavior.</p>
          </div>
          <div className="valueBox">
            <h3>Innovation</h3>
            <p>We strive to be industry leaders through innovation and excellence.</p>
          </div>
          <div className="valueBox">
            <h3>Customer Satisfaction</h3>
            <p>We are committed to providing the best customer experience.</p>
          </div>
        </div>
      </section>
      <section className="historySection">
        <h2>Our History</h2>
        <p>We have been delivering exceptional services for over 50 years. Our journey has been marked by continuous growth and unwavering commitment to our values.</p>
        <img src="https://via.placeholder.com/1200x600" alt="History Image" className="largeImage" />
      </section>
      <section className="contactSection">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our company, feel free to reach out to us.</p>
        <div className="contactDetails">
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage1;
  `;

  const cssCode = `
.aboutPage1Container {
  padding: 2rem;
  text-align: center;
}

.pageContent {
  margin-bottom: 2rem;
}

.heroSection {
  background-color: #f4f4f4;
  padding: 2rem;
  border-radius: 8px;
}

.heroSection h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.heroSection p {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
}

.carouselSection {
  margin: 2rem 0;
}

.missionSection {
  margin: 2rem 0;
}

.missionSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.missionSection p {
  font-size: 1.2rem;
  color: #555;
}

.largeImage {
  width: 100%;
  height: auto;
  margin-top: 1rem;
}

.teamSection {
  margin: 2rem 0;
}

.teamSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.teamMembers {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.teamMember {
  margin: 1rem;
  text-align: center;
}

.teamImage {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.teamMember h3 {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}

.teamMember p {
  font-size: 1rem;
  color: #777;
}

.valuesSection {
  margin: 2rem 0;
}

.valuesSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.valueBoxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.valueBox {
  width: 30%;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  text-align: left;
}

.valueBox h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.valueBox p {
  font-size: 1.2rem;
  color: #555;
}

.historySection {
  margin: 2rem 0;
}

.historySection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.historySection p {
  font-size: 1.2rem;
  color: #555;
}

.contactSection {
  margin: 2rem 0;
}

.contactSection h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contactDetails {
  font-size: 1.2rem;
  color: #555;
}

.toggleContainer {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.toggleButton {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggleButton.active {
  background-color: #007bff;
  color: white;
}

.codeContainer {
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}

.copyButton {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.copyButton.copied {
  background-color: #28a745;
}

.codeBox {
  white-space: pre-wrap;
  overflow-x: auto;
}
  `;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeToDisplay = activeTab === 'tsx' ? tsxCode : cssCode;

  return (
    <div className={styles.aboutPage1Container}>
      <div className={styles.pageContent}>
        <section className={styles.heroSection}>
          <img src="https://via.placeholder.com/1000x400" />
          {/* <img src="../../assets/panorama.jpg" /> */}
        </section>
        
        <section className={styles.missionSection}>
        <div className={styles.missionInfo}>
          <header>Contact Us</header>
          <h2>Help Opening a New Account</h2>
          <h4>1-866-224-5708</h4>
          <h4>Monday - Friday, 8:30 am - 9:30 pm ET</h4>
          <h4>Locate a Financial Advisor</h4>

          <h2>Online Services & Access Online Support</h2>
            <h4>1-877-879-2495</h4>
          <h4>Monday - Friday, 8:00 am - midnight ET</h4>

          <h2>Help With an Existing Account</h2>
          <h4>Contact your Financial Advisor or call us at the number below:</h4>
          <h4>1-866-281-7436</h4>
          <h4>Monday - Friday, 8:00 am - midnight ET</h4>

          <h2>Calling Outside the US</h2>
          <h4>1-877-879-2495</h4>
          <h4>Monday - Friday, 8:00 am - midnight ET</h4>
          <h4>Office Locations</h4>
        </div>
        </section>

        <div className={styles.content}>
          <h1>Data to enrich your online business</h1>
          <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
          <button className={styles.primaryButton}>Get started</button>
          <button className={styles.secondaryButton}>Learn more</button>
        </div>
      </div>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${activeTab === 'tsx' ? styles.active : ''}`}
          onClick={() => setActiveTab('tsx')}
        >
          TSX
        </button>
        <button
          className={`${styles.toggleButton} ${activeTab === 'css' ? styles.active : ''}`}
          onClick={() => setActiveTab('css')}
        >
          CSS
        </button>
      </div>
      <div className={styles.codeContainer}>
        <button
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={() => copyToClipboard(codeToDisplay)}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
        <pre className={styles.codeBox}>{codeToDisplay}</pre>
      </div>
    </div>
  );
};


export default ContactPage;
