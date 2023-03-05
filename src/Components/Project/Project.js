import './style.css';
import React from 'react';

export default function Project(props) {
  return (
    <div className="project-container">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button className="project-link-button">
        <a href={props.html_url} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </button>
    </div>
  );
}
