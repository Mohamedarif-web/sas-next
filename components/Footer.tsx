import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>SASMATIX Solutions</h3>
            <p>
              We&apos;re here to break down the process, clarify your questions, and empower you
              with the insight needed to move forward.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/sasmatix-solutions/" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/sasmatix_solutions?igsh=cmp3aHMxenFxaGpw"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#jobs">Interview Preparation</Link></li>
              <li><Link href="/training/">Training</Link></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link href="/#services">Recruitment Process</Link></li>
              <li><Link href="/#services">Staffing</Link></li>
              <li><Link href="/#services">Corporate Training</Link></li>
              <li><Link href="/#training">Interview and Resume Preparation</Link></li>
              <li><a href="#contact">Career Counselling</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <i className="fas fa-map-marker-alt"></i> No 48/54, 1st Floor
                <br />
                Karikalan Street,
                <br /> Adampakkam, Chennai-600088
              </li>
              <li><i className="fas fa-phone"></i> +91 9600821155</li>
              <li><i className="fas fa-phone"></i> +91 9600408830</li>
              <li><i className="fas fa-envelope"></i> hr@sasmatix.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; Copyright 2025 - SASMATIX. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
