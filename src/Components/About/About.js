import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const tech = ['HTML', 'CSS', 'JavaScript', 'Java', 'React'];
  const style={
    "text-decoration": "none"
  }

  return (
    <>
      <div className="breadcrumb">
        <button>
          <Link to="/link-in-bio" style={style}><p>Home</p></Link>
        </button>
      </div>

      <div className="about-container">
        <div className="card">
          <h2>Myself Tarun Bhandari,</h2>
          <p>
            I am a student, currently learning about
            <strong>Web Development</strong> and <strong>Web Desigining</strong>
            .<br />
          </p>

          <h3>I Love</h3>
          <p>Anime, Manga, & Drawing</p>

          <h3>Technologies</h3>
          <ul>
            {tech.map((value) => (
              <li>{` ${value} `}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
