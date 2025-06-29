import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaWhatsapp, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'ghaziaskari@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello. I want to send you this message:');
    window.open(`https://wa.me/+34600977125?text=${message}`, '_blank');
  };

  return (
    <div className="page-container centered">
      <section className="contact-section">
        <div className="contact-container centered"> 
          
          {/* Top Row: Email and WhatsApp Sections */}
          <div className="contact-top-row">
            {/* Email Section */}
            <div className="email-section">
              <h2 className="section-title">Email me</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope />
                  <button 
                    className="email-copy" 
                    onClick={handleCopyEmail}
                    title="Click to copy email"
                  >
                    {email}
                    {copied ? <FaCheck className="copy-icon" /> : <FaCopy className="copy-icon" />}
                  </button>
                </div>
              </div>
              <p>You can also copy the email above and contact me directly!</p>
            </div>
      
            {/* WhatsApp Section */}
            <div className="whatsapp-section">
              <h2 className="section-title">Reach Me on WhatsApp</h2>
              <p>You can send me a message directly through WhatsApp for quick communication.</p>
              <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                <FaWhatsapp />
                Start Chat
              </button>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="contact-form">
            <h1 className="section-title">
              <FaEnvelope />
              Contact Me
            </h1>
            <form 
              id="contact-form" 
              action="https://formsubmit.co/02ad2d2441030f69f7107ce3699c230a" 
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://armanghazi.github.io/portfolio/#/thank-you" />
    
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser />
                  Name:
                </label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="Write your name here." />
              </div>
    
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope />
                  Email:
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input"
                  required 
                  placeholder="Write your Email here." 
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                  title="Please enter a valid email address (e.g., name@example.com)"
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaEnvelope />
                  Your Message:
                </label>
                <textarea id="message" name="message" className="form-textarea" required placeholder="Write your message here."></textarea>
              </div>
    
              <button type="submit" className="submit-button">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
    
        </div>
      </section>
    </div>
  );
};

export default Contact; 