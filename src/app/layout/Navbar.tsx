import { NavLink } from 'react-router-dom'
import { useLang } from '@/shared/lang/langContext'

function cx({ isActive }: { isActive: boolean }) {
  return `nav-link px-3 ${isActive ? 'active' : ''}`
}

export default function Navbar() {
  const { lang, toggleLang } = useLang()

  const t = {
    home: lang === 'es' ? 'Inicio' : 'Home',
    projects: lang === 'es' ? 'Proyectos' : 'Projects',
    resume: lang === 'es' ? 'CV' : 'Resume',
    blog: lang === 'es' ? 'Blog' : 'Blog',
  }

  return (
    <header className="topbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
          <NavLink to="/" className="brand d-flex align-items-center gap-2 text-decoration-none">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">Portfolio</span>
          </NavLink>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-2 mt-3 mt-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={cx} end>
                  {t.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={cx}>
                  {t.projects}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resume" className={cx}>
                  {t.resume}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className={cx}>
                  {t.blog}
                </NavLink>
              </li>
            </ul>

            <div className="d-flex gap-2 align-items-center mt-3 mt-lg-0">
              <button onClick={toggleLang} className="btn btn-outline-accent" type="button">
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}