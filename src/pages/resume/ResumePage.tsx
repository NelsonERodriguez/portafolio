import { useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '@/shared/lang/langContext'
import { useCountUpOnView } from '@/shared/hooks/useCountUpOnView'

type SkillGroup = {
  key: string
  labelEs: string
  labelEn: string
  items: string[]
}

type SkillYear = {
  name: string
  years: number
}

function useInViewOnce(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, options)

    io.observe(el)
    return () => io.disconnect()
  }, [inView, options])

  return { ref, inView }
}

function SkillRing(props: {
  name: string
  years: number
  maxYears: number
}) {
  const { name, years, maxYears } = props

  const pct = Math.max(0, Math.min(100, (years / maxYears) * 100))

  const size = 140
  const stroke = 12
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const dash = (pct / 100) * c

  const { ref, inView } = useInViewOnce({ threshold: 0.25 })
  const [animatedDash, setAnimatedDash] = useState(0)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimatedDash(dash), 60)
      return () => clearTimeout(t)
    }
  }, [inView, dash])

  return (
    <div ref={ref} className="skill-ring">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle
            className="skill-ring-track"
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={stroke}
          />
          <circle
            className="skill-ring-progress"
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={stroke}
            strokeDasharray={`${animatedDash} ${c - animatedDash}`}
            strokeLinecap="round"
          />
        </g>
      </svg>

      <div className="skill-ring-center">
        <div className="skill-ring-name">{name}</div>
        <div className="skill-ring-years">{years}y</div>
      </div>
    </div>
  )
}

export default function ResumePage() {
  const { lang } = useLang()

  const t = useMemo(() => {
    const isEs = lang === 'es'
    return {
      title: isEs ? 'Currículum' : 'Resume',
      subtitle: isEs
        ? 'Aquí podras ver brevemente en las empresas que he trabajado y proyectos personales realizados.'
        : 'Here you can find a brief overview of the companies I’ve worked with and the personal projects I’ve developed.',
      experience: isEs ? 'Experiencia en Empresas' : 'Experience in Companies',
      experiencePersonal: isEs ? 'Experiencia en Proyectos Personales' : 'Experience in Personal Projects',
      skills: isEs ? 'Habilidades' : 'Skills',
      skillsYears: isEs ? 'Habilidades por años' : 'Skills by years',
      skillsYearsHint: isEs ? 'Años / % sobre total' : 'Years / % of total',
      education: isEs ? 'Formación' : 'Education',
      contact: isEs ? 'Contacto' : 'Contact',
      years: isEs ? 'Años de experiencia' : 'Years of experience',
      view: isEs ? 'Ver' : 'View',
      meta: isEs ? 'Resumen' : 'Summary',
    }
  }, [lang])

  const experience = useMemo(
  () => [
    {
      company: 'Exeltis',
      periodEs: 'Abril 2024 – Presente',
      periodEn: 'Apr 2024 – Present',
      roleEs: 'Desarrollador',
      roleEn: 'Developer',
      infoEs: 'Información de contacto',
      infoEn: 'Contact Info',
      address: 'Torre 3, Oficina 801, Edificos Zona Pradera, Zona 10, Guatemala, Guatemala.',
      phone: '+ 502 2213 6100',
      boss: 'Maynor Garcia',
      bulletsEs: [
        'Programación de un CRM propio usado por visitadores médicos.',
        'Optimización de la plataforma existente.',
        'Capacitación técnica a usuarios.',
      ],
      bulletsEn: [
        'Developed an in-house CRM used by medical sales representatives.',
        'Optimized the existing platform.',
        'Provided technical training to users.',
      ],
    },
    {
      company: 'Grupo Buena S.A.',
      periodEs: 'Diciembre 2020 – Abril 2025',
      periodEn: 'Dec 2020 – Apr 2025',
      roleEs: 'Desarrollador Senior',
      roleEn: 'Senior Developer',
      infoEs: 'Información de contacto',
      infoEn: 'Contact Info',
      address: '19 Avenida 17-87, Zona 10, Guatemala, Guatemala',
      phone: '+ 502 2310 3613',
      boss: 'Pedro Pineda',
      bulletsEs: [
        'Desarrollo de un sistema nuevo (tipo ERP/CRM): inventario, ventas, personal, contabilidad.',
        'Aplicación interna.',
      ],
      bulletsEn: [
        'Developed a new ERP/CRM-style system: inventory, sales, HR, and accounting.',
        'Built an internal application.',
      ],
    },
    {
      company: 'Userlab',
      periodEs: 'Junio 2020 – Noviembre 2020',
      periodEn: 'Jun 2020 – Nov 2020',
      roleEs: 'Desarrollador Senior',
      roleEn: 'Senior Developer',
      infoEs: 'Información de contacto',
      infoEn: 'Contact Info',
      address: 'userlab.co',
      phone: 'cesar@userlab.co',
      boss: 'Cesar Salazar',
      bulletsEs: [
        'Desarrollo de sistemas web a nivel Centroamérica y Caribe.',
        'Trabajo con equipos internacionales y procesos colaborativos.',
      ],
      bulletsEn: [
        'Developed web systems for Central America and the Caribbean.',
        'Worked with international teams and collaborative processes.',
      ],
    },
    {
      company: 'Homeland S.A.',
      periodEs: 'Noviembre 2016 – Mayo 2020',
      periodEn: 'Nov 2016 – May 2020',
      roleEs: 'Desarrollador Senior',
      roleEn: 'Senior Developer',
      infoEs: 'Información de contacto',
      infoEn: 'Contact Info',
      address: 'homeland.com.gt',
      phone: '+ 502 4851 6413',
      boss: 'Edward Acú',
      bulletsEs: [
        'Proyectos web y móviles para clientes de alto tráfico.',
        'Levantamiento de requerimientos y entregas bajo metodología SCRUM.',
      ],
      bulletsEn: [
        'Delivered web and mobile projects for high-traffic clients.',
        'Gathered requirements and delivered using the SCRUM methodology.',
      ],
    },
  ],
  []
)

const experiencePersonal = useMemo(
  () => [
    {
      company: 'Security Company',
      periodEs: '2024 – Presente',
      periodEn: '2024 – Present',
      roleEs: 'Solopreneur',
      roleEn: 'Solopreneur',
      bulletsEs: [
        'Programación de un CRM nuevo e interno completo (nómina, postulaciones, técnicos, vehículos, contabilidad).',
      ],
      bulletsEn: [
        'Developed a complete in-house CRM from scratch (payroll, recruitment, technicians, vehicles, accounting).',
      ],
    },
    {
      company: 'Visits App',
      periodEs: '2022',
      periodEn: '2022',
      roleEs: 'Solopreneur',
      roleEn: 'Solopreneur',
      bulletsEs: [
        'App para marcaje de asistencia y ubicación con validación por geolocation.',
        'Almacenamiento local y sincronización automática al recuperar conexión a internet.',
      ],
      bulletsEn: [
        'Built an attendance and location-tracking app with geolocation validation.',
        'Implemented offline storage with automatic sync when internet connection is restored.',
      ],
    },
    {
      company: 'Sales Company',
      periodEs: '2020 - 2021',
      periodEn: '2020 - 2021',
      roleEs: 'Solopreneur',
      roleEn: 'Solopreneur',
      bulletsEs: [
        'Desarrollo de un sistema web interno para gestión de ventas e inventario.',
        'Landing Page tipo e-commerce.',
      ],
      bulletsEn: [
        'Developed an internal web system for sales and inventory management.',
        'Created an e-commerce–style landing page.',
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

  const skillGroups: SkillGroup[] = useMemo(
    () => [
      {
        key: 'frontend',
        labelEs: 'Frontend',
        labelEn: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'ES6', 'CSS', 'JQuery', 'Bootstrap (v4, v5)'],
      },
      {
        key: 'backend',
        labelEs: 'Backend',
        labelEn: 'Backend',
        items: ['Python', 'PHP (v5, v7, v8)', 'NodeJs', 'Java'],
      },
      {
        key: 'frameworks',
        labelEs: 'Frameworks',
        labelEn: 'Frameworks',
        items: ['Django', 'Laravel', 'Angular', 'Flutter'],
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
        items: ['Git', 'SVN'],
      },
    ],
    []
  )

  const [activeTab, setActiveTab] = useState(skillGroups[0].key)

  const yearsTotal = 9
  const yearsInd = 5

  const cTotal = useCountUpOnView({ to: yearsTotal, durationMs: 850 })
  const cFE = useCountUpOnView({ to: yearsInd, durationMs: 850 })

  const contactEmail = 'info@nelsonestuardo.com'
  const phone = '+502 5198-9952'

  const active = skillGroups.find((s) => s.key === activeTab) ?? skillGroups[0]

  const skillsByYears: SkillYear[] = useMemo(
    () => [
      { name: 'React', years: 3 },
      { name: 'TypeScript', years: 3 },
      { name: 'JavaScript', years: 9 },
      { name: 'ES6', years: 6 },
      { name: 'CSS', years: 9 },
      { name: 'JQuery', years: 7 },
      { name: 'Bootstrap', years: 9 },
      { name: 'Python', years: 5 },
      { name: 'PHP', years: 9 },
      { name: 'NodeJS', years: 2 },
      { name: 'Java', years: 2 },
      { name: 'Django', years: 5 },
      { name: 'Laravel', years: 7 },
      { name: 'Angular', years: 2 },
      { name: 'Flutter', years: 3 },
      { name: 'PostgreSQL', years: 5 },
      { name: 'MySQL/MariaDB', years: 9 },
      { name: 'SQL Server', years: 5 },
      { name: 'Docker', years: 3 },
      { name: 'Debian', years: 7 },
      { name: 'CentOS', years: 6 },
      { name: 'Git', years: 9 },
      { name: 'SVN', years: 3 },
    ],
    []
  )

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
              ? 'Desarrollador FullStack (web, apps) orientado a productos, ERP/CRM, y mejora continua.'
              : 'Developer FullStack (web, apps), ERP/CRM, and continuous improvement.'}
          </div>
        </div>
      </div>

      <div className="row g-4 mt-3">
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
                const info = lang === 'es' ? e.infoEs : e.infoEn

                return (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot" aria-hidden="true" />
                    <div className="timeline-card">
                      <div className="d-flex flex-wrap justify-content-between gap-2">
                        <div className="fw-bold">{e.company}</div>
                        <div className="text-muted small">{period}</div>
                      </div>
                      <div className="text-muted">{role}</div>
                      <div className="text-muted">{info}:</div>
                      <div className="text-muted">&#x1F4CD; {e.address}</div>
                      <div className="text-muted">&#x260E; {e.phone}</div>
                      <div className="text-muted">&#x1F464; {e.boss}</div>
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

          <div className="card-dark p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="h4 mb-0">{t.experiencePersonal}</h2>
              <span className="text-muted small">{lang === 'es' ? 'Timeline' : 'Timeline'}</span>
            </div>

            <div className="timeline mt-4">
              {experiencePersonal.map((e, idx) => {
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

        

        

        <div className="col-12 col-lg-5">
          <div className="card-dark p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="h5 mb-0">{t.years}</h2>
              <span className="text-muted small"></span>
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
                  <div className="stat-label">
                    {lang === 'es' ? 'Desarrollos Independientes' : 'Independent Developments'}
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          {/* NUEVO: Skills by years */}
          <div className="card-dark p-4 mt-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2 className="h5 mb-0">{t.skillsYears}</h2>
              <span className="text-muted small">{t.skillsYearsHint}</span>
            </div>

            <div className="skill-grid mt-3">
              {skillsByYears.map((s) => (
                <SkillRing key={s.name} name={s.name} years={s.years} maxYears={yearsTotal} />
              ))}
            </div>
          </div>

          <div className="card-dark p-4 mt-4">
            <h2 className="h5 mb-2">{t.education}</h2>
            <div className="text-muted">{education}</div>
          </div>

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
                {phone} (Whatsapp, Telegram)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}