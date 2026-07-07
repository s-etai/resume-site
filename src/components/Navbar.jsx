import styles from './Navbar.module.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>ET</span>
        <ul className={styles.links}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="resume.pdf"
              download="Elliott_Tai_Resume.pdf"
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
