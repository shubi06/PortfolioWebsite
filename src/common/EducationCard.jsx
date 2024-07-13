import React from 'react';

function EducationCard({src, link, h3, p}) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img className="hover" src={src} alt="" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default EducationCard;
