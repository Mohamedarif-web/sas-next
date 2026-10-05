import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'SASMATIX Solutions - Recruitment, Staffing & Training',
};

const whyChoose = [
  { icon: 'fa-shield-alt', title: 'Integrity First', text: 'We operate with honesty and transparency — every engagement is built on trust.' },
  { icon: 'fa-award', title: 'Driven by Excellence', text: 'Our commitment to high-quality delivery ensures results that exceed expectations.' },
  { icon: 'fa-users', title: 'Empowering People & Businesses', text: 'We empower individuals with the right skills and organizations with the right talent.' },
  { icon: 'fa-briefcase', title: 'Domain Expertise', text: 'Our recruiters and trainers bring deep industry knowledge across IT, finance, operations, and more.' },
  { icon: 'fa-tools', title: 'Access to Smart Tools', text: 'From digital assessments to online training platforms — we offer modern resources for smarter hiring and learning.' },
  { icon: 'fa-chart-line', title: 'Proven Track Record', text: "Our client success stories speak for themselves. We've helped startups and enterprises scale with confidence." },
];

const services = [
  {
    image: 'service1.avif',
    title: 'Recruitment Process',
    text: 'Our recruitment process is designed for precision and speed. We handle the complete hiring lifecycle – from sourcing and screening to onboarding.',
    points: ['Role-based candidate sourcing', 'Pre-screening and assessments', 'Interview coordination', 'Offer negotiation support'],
  },
  {
    image: 'service2.avif',
    title: 'Staffing',
    text: 'We offer contract staffing, permanent staffing, and project-based hiring solutions. Our rapid deployment ensures skilled professionals on time.',
    points: ['Contract/Temporary Staffing', 'Contract-to-Hire', 'Project-based Staffing', 'Permanent Staffing'],
  },
  {
    image: 'service3.avif',
    title: 'Corporate Training',
    text: 'We help organizations bridge skill gaps through tailored corporate training programs that are practical, scalable, and aligned with real business outcomes.',
    points: ['Customized Training Programs', 'Hands-On Learning', 'Certified Trainers', 'Post-Training Assessments'],
  },
];

const jobPerks = [
  'Trusted Employer Network',
  'Personalized Job Matching',
  'Real-Time Job Alerts',
  'Career Support Services',
  'Skilled Recruiter Assistance',
  'Fresher to Leadership Roles',
];

const jobSteps = ['Submit Resume', 'Get Matched', 'Interview Preparation', 'Get Hired'];

const trainingPerks = [
  'Job-Oriented Curriculum',
  'Real-Time Project Practice',
  'Beginner to Advanced Levels',
  'Interview & Resume Prep',
  'Certification Support',
  'Outcome-Focused Learning',
];

const clientLogos = [
  { src: '/asset/images/logo.png', alt: 'Client 1' },
  { src: 'https://salcomp.com/wp-content/uploads/2020/10/cropped-salcomp_logo.png', alt: 'Client 2' },
  { src: 'https://www.hcltech.com/themes/custom/hcltech/images/hcltech-new-logo.svg', alt: 'Client 4' },
  { src: '/asset/images/info2.png', alt: 'Client 3' },
  { src: '/asset/images/virtusa.png', alt: 'Client 6' },
  { src: '/asset/images/logo.png', alt: 'Client 5' },
  { src: '/asset/images/info2.png', alt: 'Client 7' },
  { src: '/asset/images/logo.png', alt: 'Client 9' },
];

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <h1>Empowering Talent. Accelerating Business.</h1>
          <p>
            At SASMATIX solutions, we connect opportunity with talent, and transform potential into
            performance. Whether you&apos;re hiring, staffing, or upskilling - we&apos;re your growth
            partner.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn">Recruitment Process</a>
            <a href="#services" className="btn">Staffing</a>
            <a href="#services" className="btn">Corporate Training</a>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="clients">
        <div className="container">
          <div className="client-logos">
            <div>
              {clientLogos.map((c, i) => (
                <img key={i} src={c.src} alt={c.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Backed by years of expertise and a strong presence across diverse industries, we have
                become a reliable partner for businesses seeking top talent and individuals striving
                for career growth. Whether you’re an organization looking for skilled professionals or
                a candidate ready to take the next step, we are here to guide your journey.
              </p>
            </div>
            <div className="about-image">
              <img src="/asset/images/abou.jpg" alt="About SASMATIX" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <div className="features">
            {whyChoose.map((f) => (
              <div className="feature-card animate-on-scroll" key={f.title}>
                <i className={`fas ${f.icon}`}></i>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-img">
                  <img src={`/asset/images/${s.image}`} alt={s.title} />
                </div>
                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="jobs" id="jobs">
        <div className="container">
          <div className="section-title">
            <h2>Jobs &amp; Careers</h2>
          </div>
          <div className="jobs-content">
            <div className="jobs-text">
              <h3>Your Next Big Opportunity Starts Here</h3>
              <p>
                We don&apos;t just help you find jobs — we help you build a meaningful career. Whether
                you&apos;re a fresher, mid-level professional, or seasoned expert, we connect you with
                verified openings that match your skills, goals, and potential.
              </p>
              <p>Why Choose Jobs Through SASMATIX?</p>
              <div className="training-features">
                {jobPerks.map((p) => (
                  <div className="training-feature" key={p}>
                    <i className="fas fa-check-circle"></i>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="process">
                {jobSteps.map((s, i) => (
                  <div className="process-step" key={s}>
                    <div className="step-icon">{i + 1}</div>
                    <div className="step-title">{s}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="jobs-image">
              <img src="/asset/images/hand.jpeg" height={500} alt="Jobs & Careers" />
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="training" id="training">
        <div className="container">
          <div className="section-title">
            <h2>Interview and Resume Preparation (Training)</h2>
          </div>
          <div className="training-content">
            <div className="training-text">
              <h3>Learn. Practice. Get Hired.</h3>
              <p>
                Our Interview and Resume Preparation programs are designed to bridge the gap between
                education and employment. We empower job seekers, students, and working professionals
                with industry-relevant skills, hands-on project experience, and career readiness.
              </p>
              <p>What Makes Our Training Unique?</p>
              <div className="training-features">
                {trainingPerks.map((p) => (
                  <div className="training-feature" key={p}>
                    <i className="fas fa-check-circle"></i>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 20 }}>
                Gain skills. Build confidence. Start your career with SASMATIX&apos;s trusted training
                ecosystem.
              </p>
              <Link href="/training/" className="btn" style={{ marginTop: 20 }}>
                Click Here for More Details
              </Link>
            </div>
            <div className="training-image">
              <img src="/asset/images/job2.avif" alt="Skill Development" />
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        phones={['+91 9600821155', '+91 9600408830']}
        email="hr@sasmatix.com"
      />
    </>
  );
}
