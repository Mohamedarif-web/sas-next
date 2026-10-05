'use client';

import { useState } from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
  topics: string[];
};

export default function CourseCard({ image, title, description, topics }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="service-card">
      <div className="service-img">
        <img src={`/asset/images/${image}`} alt={title} />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul style={{ display: open ? 'block' : 'none' }}>
          {topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="course-highlights"></div>
        <button className="btn toggle-details-btn" onClick={() => setOpen((o) => !o)}>
          {open ? 'Show Less' : 'More Details'}
        </button>
      </div>
    </div>
  );
}
