import styles from './Projects.module.css'

const projects = [
  {
    title: 'Teaching AI to Play Video Games',
    description: 'Built a reinforcement learning environment in Unity where AI agents learn to play games. Implemented ML-Agents training pipeline with PyTorch and tuned the PPO algorithm to achieve 3× human baseline performance.',
    tags: ['C#', 'Unity', 'ML-Agents', 'PyTorch'],
    github: 'https://github.com/s-etai/Machine-learning-risky-road',
    demo: null,
  },
  {
    title: 'Spreadsheet Application',
    description: 'A fully-featured spreadsheet application with cell editing, formula evaluation, and undo/redo functionality. Demonstrates layered architecture using the Observer and Command design patterns.',
    tags: ['C#', 'Windows Forms', '.NET'],
    github: 'https://github.com/s-etai/Spread-sheet-app',
    demo: null,
  },
  {
    title: 'Leetcode Club',
    description: 'Chaired a community club focused on solving algorithmic problems together. Organized weekly technical sessions to help peers improve coding skills and problem-solving abilities.',
    tags: ['Community', 'Algorithms', 'Leadership'],
    github: null,
    demo: null,
  },
]

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects and Activities</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <GitHubIcon /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <ExternalIcon /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
