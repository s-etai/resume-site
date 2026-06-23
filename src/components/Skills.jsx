import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'C#', 'Python'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Unix/Linux environments'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className={styles.groups}>
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.pills}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
