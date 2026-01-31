import { useMemo, useState } from 'react'
import { useLang } from '@/shared/lang/langContext'
import { useCountUpOnView } from '@/shared/hooks/useCountUpOnView'

type SkillGroup = {
  key: string
  labelEs: string
  labelEn: string
  items: string[]
}

export default function ResumePage() {
  const { lang } = useLang()

  const t = useMemo(() => {
    const isEs = lang === 'es'
    return {
      title: isEs ? 'Currículum' : 'Resume',
      subtitle: isEs
        ? 'Experiencia más reciente primero.'
        : 'Most recent experience first.',
      experience: isEs ? 'Experiencia' : 'Experience',
      skills: isEs ? 'Habilidades' : 'Skills',
      education: isEs ? 'Formación' : 'Education',
      contact: isEs ? 'Contacto' : 'Contact',
      years: isEs ? 'Años de experiencia' : 'Years of experience',
      view: isEs ? 'Ver' : 'View',
      tabsHint: isEs ? 'Explora por categoría' : 'Explore by category',
      meta: isEs ? 'Resumen' : 'Summary',
    }
  }, [lang])

  const experience = useMemo(
    () => [
      {
        company: 'Exeltis',
        periodEs: 'Abril 2024 – Actualidad',
        periodEn: 'Apr 2024 – Present',
        roleEs: 'Desarrollador',
        roleEn: 'Developer',
        bulletsEs: [
          'Mantenimiento y mejora de un CRM propio usado por médicos en LATAM.',
          'Optimización de plataforma interna y capacitación técnica a usuarios.',
        ],
        bulletsEn: [
          'Maintaining and improving an in-house CRM used by doctors across LATAM.',
          'Optimizing internal platform and delivering technical training to users.',
        ],
      },
      {
        company: 'Grupo Buena S.A.',
        periodEs: 'Diciembre 2020 – Abril 2025',
        periodEn: 'Dec 2020 – Apr 2025',
        roleEs: 'Desarrollador Senior',
        roleEn: 'Senior Developer',
        bulletsEs: [
          'Desarrollo de sistemas (tipo ERP/CRM): inventario, ventas, personal, contabilidad, reportes.',
          'Construcción de CRM desde cero reemplazando gran parte de SAP.',
        ],
        bulletsEn: [
          'Developed ERP/CRM-style systems: inventory, sales, HR, accounting, reporting.',
          'Built a CRM from scratch replacing a large part of SAP.',
        ],
      },
      {
        company: 'Userlab',
        periodEs: 'Junio 2020 – Noviembre 2020',
        periodEn: 'Jun 2020 – Nov 2020',
        roleEs: 'Desarrollador Senior',
        roleEn: 'Senior Developer',
        bulletsEs: [
          'Desarrollo de apps y sistemas web a nivel Centroamérica y Caribe.',
          'Trabajo con equipos internacionales y procesos colaborativos.',
        ],
        bulletsEn: [
          'Built web systems and apps for Central America and the Caribbean.',
          'Worked with international teams and collaborative processes.',
        ],
      },
      {
        company: 'Homeland S.A.',
        periodEs: 'Noviembre 2016 – Mayo 2020',
        periodEn: 'Nov 2016 – May 2020',
        roleEs: 'Desarrollador Senior',
        roleEn: 'Senior Developer',
        bulletsEs: [
          'Proyectos web y móviles (incluyendo pagos con POS) para clientes de alto tráfico.',
          'Liderazgo de equipo dev/QA y entrega bajo metodología SCRUM.',
        ],
        bulletsEn: [
          'Web & mobile projects (including POS payments) for high-traffic clients.',
          'Led dev/QA teams and delivered using SCRUM methodology.',
        ],
      },
    ],
    []
  )

  const education = useMemo(() => {
    return lang === 'es'
      ? 'Universidad Mariano Gálvez (2017–2019) — Ingeniería en Ciencias y Sistemas'
      : 'Universidad Mariano Gálvez (2017–2019) — Systems Engineering'
  }, [lang])

  // Categorías (separadas como pediste)
  const skillGroups: SkillGroup[] = useMemo(
    () => [
      {
        key: 'frontend',
        labelEs: 'Frontend',
        labelEn: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'ES6', 'CSS'],
      },
      {
        key: 'backend',
        labelEs: 'Backend',
        labelEn: 'Backend',
        items: ['Python', 'PHP', 'Django', 'Laravel'],
      },
      {
        key: 'databases',
        labelEs: 'Bases de datos',
        labelEn: 'Databases',
        items: ['PostgreSQL', 'MySQL/MariaDB', 'SQL Server'],
      },
      {
        key: 'devops',
        labelEs: 'DevOps / Infra',
        labelEn: 'DevOps / Infra',
        items: ['Docker', 'Debian', 'CentOS'],
      },
      {
        key: 'versioning',
        labelEs: 'Control de versiones',
        labelEn: 'Version control',
        items: ['Git', 'SVN (3–4 años)'],
      },
    ],
    []
  )

  const [activeTab, setActiveTab] = useState(skillGroups[0].key)

  // Contadores (ajustables)
  const yearsTotal = 9
  const yearsFrontend = 2
  const yearsBackend = 6
  const yearsDB = 6

  const cTotal = useCountUpOnView({ to: yearsTotal, durationMs: 850 })
  const cFE = useCountUpOnView({ to: yearsFrontend, durationMs: 850 })
  const cBE = useCountUpOnView({ to: yearsBackend, durationMs: 850 })
  const cDB = useCountUpOnView({ to: yearsDB, durationMs: 850 })

  const contactEmail = 'info@nelsonestuardo.com'
  const phone = '+502 5198-9952'

  const active = skillGroups.find((s) => s.key === activeTab) ?? skillGroups[0]

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap align-items-end justify-content-between gap-3">
        <div>
          <h1 className="page-title mb-1">{t.title}</h1>
          <p className="page-muted mb-0">{t.subtitle}</p>
        </div>

        <div className="resume-meta card-dark p-3">
          <div className="fw-bold">{t.meta}</div>
          <div className="text-muted small">
            {lang === 'es'
              ? 'Desarrollador orientado a producto (web), ERP/CRM, y mejora continua.'
              : 'Product-oriented web developer, ERP/CRM, and continuous improvement.'}
          </div>
        </div>
      </div>

      <div className="row g-4 mt-3">
        {/* LEFT: Experience */}
        <div className="col-12 col-lg-7">
          <div className="card-dark p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="h4 mb-0">{t.experience}</h2>
              <span className="text-muted small">{lang === 'es' ? 'Timeline' : 'Timeline'}</span>
            </div>

            <div className="timeline mt-4">
              {experience.map((e, idx) => {
                const period = lang === 'es' ? e.periodEs : e.periodEn
                const role = lang === 'es' ? e.roleEs : e.roleEn
                const bullets = lang === 'es' ? e.bulletsEs : e.bulletsEn

                return (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot" aria-hidden="true" />
                    <div className="timeline-card">
                      <div className="d-flex flex-wrap justify-content-between gap-2">
                        <div className="fw-bold">{e.company}</div>
                        <div className="text-muted small">{period}</div>
                      </div>
                      <div className="text-muted">{role}</div>
                      <ul className="mt-2 mb-0 text-muted">
                        {bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Skills + Education + Contact */}
        <div className="col-12 col-lg-5">
          {/* Animated counters */}
          <div className="card-dark p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="h5 mb-0">{t.years}</h2>
              <span className="text-muted small">{t.tabsHint}</span>
            </div>

            <div className="row g-3 mt-2">
              <div className="col-6">
                <div ref={cTotal.ref} className="stat">
                  <div className="stat-value">{cTotal.value}+</div>
                  <div className="stat-label">{lang === 'es' ? 'Total' : 'Total'}</div>
                </div>
              </div>
              <div className="col-6">
                <div ref={cFE.ref} className="stat">
                  <div className="stat-value">{cFE.value}+</div>
                  <div className="stat-label">{lang === 'es' ? 'Frontend' : 'Frontend'}</div>
                </div>
              </div>
              <div className="col-6">
                <div ref={cBE.ref} className="stat">
                  <div className="stat-value">{cBE.value}+</div>
                  <div className="stat-label">{lang === 'es' ? 'Backend' : 'Backend'}</div>
                </div>
              </div>
              <div className="col-6">
                <div ref={cDB.ref} className="stat">
                  <div className="stat-value">{cDB.value}+</div>
                  <div className="stat-label">{lang === 'es' ? 'DB' : 'DB'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills: tabs */}
          <div className="card-dark p-4 mt-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="h5 mb-0">{t.skills}</h2>
              <span className="text-muted small">
                {lang === 'es' ? 'Por categoría' : 'By category'}
              </span>
            </div>

            <div className="tabs mt-3">
              {skillGroups.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  className={`tab-btn ${activeTab === s.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(s.key)}
                >
                  {lang === 'es' ? s.labelEs : s.labelEn}
                </button>
              ))}
            </div>

            <div className="mt-3 d-flex flex-wrap gap-2">
              {active.items.map((it) => (
                <span key={it} className="pill">
                  {it}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="card-dark p-4 mt-4">
            <h2 className="h5 mb-2">{t.education}</h2>
            <div className="text-muted">{education}</div>
          </div>

          {/* Contact */}
          <div className="card-dark p-4 mt-4">
            <h2 className="h5 mb-2">{t.contact}</h2>
            <div className="text-muted small">
              Guatemala
              <br />
              <a className="link-accent" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <br />
              <a className="link-accent" href={`tel:${phone.replace(/\s/g, '')}`}>
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}