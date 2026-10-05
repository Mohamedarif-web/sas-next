'use client';

import { FormEvent, useState } from 'react';

type Props = {
  subtitle?: string;
  phones: string[];
  email: string;
};

// Static contact section: no backend. Submitting opens the visitor's email client
// with the message pre-filled, addressed to the company email.
export default function ContactSection({ subtitle, phones, email }: Props) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Email: ${form.get('email')}`,
      '',
      `${form.get('message')}`,
    ].join('\n');
    const subject = `Website enquiry from ${form.get('name')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="contact-container">
          <div className="contact-form">
            {sent && (
              <div className="alert alert-success">
                Thank you for contacting us! Please send the email that just opened in your mail
                app, and we will get back to you soon.
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="form-control" placeholder="Your Phone Number" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email Address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div className="contact-text">
                <h4>Phone Number</h4>
                {phones.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>{email}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-text">
                <h4>Office Address</h4>
                <p>
                  No 48/54, 1st Floor
                  <br />
                  Karikalan Street,
                  <br /> Adampakkam, Chennai-600088
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-clock"></i></div>
              <div className="contact-text">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
