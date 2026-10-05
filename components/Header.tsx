'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Close menus on outside click and when resizing to desktop
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) closeAll();
    };
    const onResize = () => {
      if (window.innerWidth > 768) closeAll();
    };
    document.addEventListener('click', onClick);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="container header-container">
        <div className="logo-container">
          <Link href="/" className="logo">
            <img src="/asset/images/sas_logo.png" width={65} alt="SASMATIX Logo" />
          </Link>
          <h2>SASMATIX</h2>
        </div>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <nav id="nav-menu" className={menuOpen ? 'active' : ''}>
          <ul>
            <li><Link href="/" onClick={closeAll}>Home</Link></li>
            <li><a href="#about" onClick={closeAll}>About Us</a></li>
            <li>
              <a
                className="dropdown-toggle"
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen((o) => !o);
                }}
              >
                Services{' '}
                <i
                  className="fas fa-chevron-down"
                  style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                ></i>
              </a>
              <ul className={`dropdown${dropdownOpen ? ' show' : ''}`}>
                <li><Link href="/#services" onClick={closeAll}>Recruitment Process</Link></li>
                <li><Link href="/#services" onClick={closeAll}>Staffing</Link></li>
                <li><Link href="/#services" onClick={closeAll}>Corporate Training</Link></li>
              </ul>
            </li>
            <li><Link href="/#jobs" onClick={closeAll}>Interview Preparation</Link></li>
            <li><Link href="/training/" onClick={closeAll}>Training</Link></li>
            <li><a href="#contact" onClick={closeAll}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
