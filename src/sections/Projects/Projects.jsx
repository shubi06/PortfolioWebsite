import React from 'react'
import styles from './ProjectsStyles.module.css'
import grieta from '../../assets/logo-color.png'
import ffk from '../../assets/Logo.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard src={grieta}   
        link={'https://github.com/shubi06/GrietaHospital-WebProject'}
        h3="Grieta Hospital"
        p="Website for a Hospital"
        />
        
        <ProjectCard src={ffk} 
        link={'https://github.com/Gentrit2023/Lab1-Final-'}
        h3="Ticket System"
        p="Web Application for Football Federation of Kosovo"

        />
        </div>
    </section>
  );
}

export default Projects