import React from 'react'
import styles from './ProjectsStyles.module.css'
import grieta from '../../assets/logo-color.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <a href="https://github.com/shubi06/GrietaHospital-WebProject" target='_blank'>
          <img className="hover" src={grieta} alt="" />
          <h3>Grieta</h3>
          <p>Medical Website</p>
          </a>
        </div>
    </section>
  );
}

export default Projects