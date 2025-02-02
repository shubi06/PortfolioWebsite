import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='.NET'/>
      <SkillList src={checkMarkIcon} skill='JAVA'/>
      <SkillList src={checkMarkIcon} skill='JavaScript'/>
        <SkillList src={checkMarkIcon} skill='TypeScript'/>
        <SkillList src={checkMarkIcon} skill='MySQL'/>
        <SkillList src={checkMarkIcon} skill='HTML'/>
        <SkillList src={checkMarkIcon} skill='CSS'/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React'/>
        <SkillList src={checkMarkIcon} skill='Bootstrap'/>
        <SkillList src={checkMarkIcon} skill='Tailwind CSS'/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Redux'/>
        <SkillList src={checkMarkIcon} skill='Webpack'/>
        <SkillList src={checkMarkIcon} skill='Git'/>
      </div>
      <hr />

    </section>
  );
}

export default Skills