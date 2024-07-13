import React from 'react';
import styles from './EducationStyles.module.css';
import universityLogo from '../../assets/university-logo.png';
import schoolLogo from '../../assets/school-logo.jpg';
import EducationCard from '../../common/EducationCard';

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h1 className='sectionTitle'>Education</h1>
      <div className={styles.educationContainer}>
        <EducationCard 
          src={universityLogo}   
          link={'https://www.ubt-uni.net/sq/ballina/'}
          h3="UBT - University for Business and Technology"
          p="Bachelor of Computer Science and Engineering"
        />
      
      </div>
    </section>
  );
}

export default Education;
