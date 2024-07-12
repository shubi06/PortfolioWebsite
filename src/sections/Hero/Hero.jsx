import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/ShuajbBunjaku_CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ?  linkedinLight :  linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}
      ><img className={styles.hero} 
      src={heroImg} 
      alt="" />
      <img className={styles.colorMode}
       src={themeIcon} alt="" 
       onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Shuajb  <br /> Bunjaku</h1>
        <h2>Software Developer</h2>
        <span>
        <a href="https://twitter.com" target='_blank'>
        <img src={twitterIcon} alt="Twitter Icon" />
        </a>
        <a href="https://github.com/shubi06" target='_blank'>
        <img src={githubIcon} alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/shuajb-bunjaku-17a723145/" target='_blank'>
        <img src={linkedinIcon} alt="Linkedin Icon" />
        </a>
        </span>
        <p className={styles.desription}>If we want users to like our software, 
          we should design it to behave like a likeable person </p>
          <a href={CV} target='_blank'>
            <button className='hover' download > Resume 

            </button>
          </a>
      </div>
    </section>
  );
}

export default Hero