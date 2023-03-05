// Tools
import './style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Project from '../Project/Project';

// Images
import insta from '../../assest/image/instagram.svg';
import github from '../../assest/image/github.svg';
import anilist from '../../assest/image/anilist.svg';
import profile from '../../assest/image/profile1.jpg';

export default function Home() {
  const [item, setItem] = useState([]);
  const USER = 'iamtarun-b';

  const INSTA = `https://www.instagram.com/taruu._.b/`;
  const GITHUB = `https://github.com/iamtarun-b/`;
  const ANILIST = `https://anilist.co/user/taruuun/`;

  useEffect(()=>{
    const fetchRepo = async ()=>{
      const repo = await fetch(`https://api.github.com/users/${USER}/repos?page=1&per_page=3&sort=updated`)
      
      const data = await repo.json();
      setItem(data);
    }

    fetchRepo();
  }, [])

  console.log(item);

  return (
    <div className="home-container">
      <div className="profile">
        <div className="img">
          <img src={profile} alt="profile" />
        </div>
        <h1>Tarun Bhandari</h1>
        <p> Looking for the opportunity to show case my skills </p>
        <button>
          <Link to="/about">About Me</Link>
        </button>
      </div>

      <div className="link-container">
        <p>Connect With Me</p>
        <hr />
        <ul>
          <li>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              <img src={github} alt="Github-icon" />
            </a>
          </li>
          <li>
            <a href={INSTA} target="_blank" rel="noreferrer">
              <img src={insta} alt="instagram-icon" />
            </a>
          </li>
          <li>
            <a href={ANILIST} target="_blank" rel="noreferrer">
              <img src={anilist} alt="myanimelist-icon" />
            </a>
          </li>
        </ul>
      </div>

      {/* Project section */}
      <div className="big-container">
        <h1>Projects</h1>
        {item.map((item)=>(
        <Project key={item.id} {...item}/> 
        ))}
      </div>
    </div>
  );
}
