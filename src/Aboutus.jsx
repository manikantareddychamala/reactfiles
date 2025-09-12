import React, { useRef } from "react";
import "./AboutUs.css";

function Aboutus() {
  // refs for different sections
  const introRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  // scroll to section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-page">
      {/* Top Nav inside about page */}
      <nav className="about-nav">
        <button onClick={() => scrollToSection(introRef)}>Intro</button>
        <button onClick={() => scrollToSection(missionRef)}>Mission</button>
        <button onClick={() => scrollToSection(teamRef)}>Team</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      {/* Intro Section */}
      <section ref={introRef} className="about-section intro">
        <h1>About <span>Fresh Mart</span></h1>
        <p>
          We bring you the freshest veggies, fruits, and groceries right to your door. 
          Trusted by thousands of families for quality and convenience.
        </p>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          To deliver <strong>healthy, organic, and affordable</strong> produce to every household, 
          while supporting local farmers and reducing food waste.
        </p>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="about-section team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="Images/picks/user1.jpg" alt="Ramesh" />
            <h3>Ramesh Kumar</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="Images/picks/user2.jpg" alt="Priya" />
            <h3>Priya Sharma</h3>
            <p>Operations Head</p>
          </div>
          <div className="team-card">
            <img src="Images/picks/user3.jpg" alt="Arjun" />
            <h3>Arjun Mehta</h3>
            <p>Marketing Lead</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="about-section contact">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach us at:</p>
        <p><strong>Email:</strong> support@freshmart.com</p>
        <p><strong>Phone:</strong> +91 6300154969</p>
      </section>
    </div>
  );
}

export default Aboutus;
