import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import CourseCard from '@/components/CourseCard';
import { courseRows } from '@/lib/courses';

export const metadata: Metadata = {
  title: 'SASMATIX Solutions - Our Services',
};

const whyTraining = [
  { icon: 'fa-graduation-cap', title: 'Expert Instructors', text: 'Learn from industry professionals with years of real-world experience and deep subject matter expertise.' },
  { icon: 'fa-laptop-code', title: 'Hands-On Learning', text: 'Gain practical experience through real projects, case studies, and interactive exercises that simulate actual work scenarios.' },
  { icon: 'fa-certificate', title: 'Industry-Recognized Certification', text: 'Earn certificates that are valued by employers and enhance your professional credibility in the job market.' },
  { icon: 'fa-clock', title: 'Flexible Learning Options', text: 'Choose from classroom training, online sessions, or self-paced courses that fit your schedule and learning preferences.' },
  { icon: 'fa-briefcase', title: 'Placement Assistance', text: 'Get support with resume building, interview preparation, and connections to our network of hiring partners.' },
  { icon: 'fa-chart-line', title: 'Proven Track Record', text: 'Join thousands of successful alumni who have advanced their careers after completing our training programs.' },
];

export default function Training() {
  return (
    <>
      <section
        className="hero"
        id="home"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/asset/images/cour.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 750,
        }}
      >
        <div className="container">
          <h1>Empowering Skills. Elevating Careers.</h1>
          <p>
            We are passionate about transforming learning into a powerful tool for career growth.
            Whether you&apos;re a student preparing to enter the workforce, a professional seeking to
            upskill, or an organization looking to train your team — we have the perfect learning
            solutions for you.
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="btn">Online Courses</a>
            <a href="#courses" className="btn">Realtime Experts</a>
            <a href="#courses" className="btn">Placement Assistance</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Our Training Services</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are the leading provider of professional training programs designed to bridge the
                gap between academic knowledge and industry requirements. Our courses are developed by
                industry experts and delivered through a combination of theoretical learning and
                hands-on practice.
              </p>
              <p>
                We are committed to empowering individuals with the skills needed to excel in
                today&apos;s competitive job market and helping organizations build a workforce that
                drives innovation and growth.
              </p>
            </div>
            <div className="about-image">
              <img src="/asset/images/training.jpg" alt="Training Services" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Training</h2>
          </div>
          <div className="features">
            {whyTraining.map((f) => (
              <div className="feature-card" key={f.title}>
                <i className={`fas ${f.icon}`}></i>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="courses">
        <div className="container">
          <div className="section-title">
            <h2>Courses Offered</h2>
            <p>
              Comprehensive training programs designed to meet industry demands and accelerate your
              career growth
            </p>
          </div>
          {courseRows.map((row, i) => (
            <div className="services-grid" key={i} style={i > 0 ? { marginTop: 30 } : undefined}>
              {row.map((c) => (
                <CourseCard key={c.title} {...c} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <ContactSection
        subtitle="Let's Build Something Great Together"
        phones={['+91 9600821155', '+91 9600408830', '+91 9600101133']}
        email="sasmatixsolutions@gmail.com"
      />
    </>
  );
}
