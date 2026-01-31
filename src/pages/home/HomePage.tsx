import heroImg from '@/assets/images/hero.jpg'
import { useLang } from '@/shared/lang/langContext'

export default function HomePage() {
  const { lang } = useLang()

  const copy = {
    kicker: lang === 'es' ? 'Hola, soy' : 'Hello, I’m',
    name: 'Nelson Rodriguez',
    role:
      lang === 'es'
        ? 'Desarrollador Fullstack (Django / React)'
        : 'Fullstack Developer (Django / React)',
    bio:
      lang === 'es'
        ? 'Me enfoco en productos web: frontend moderno, backend sólido y despliegues en VPS. Trabajo por placer: me gusta construir software y mejorar sistemas reales.'
        : 'I focus on web products: modern frontend, solid backend, and VPS deployments. I work because I genuinely enjoy building software and improving real systems.',
    cta: lang === 'es' ? 'Hablemos' : 'Let’s Talk',
    socialLabel: lang === 'es' ? 'Encuéntrame en' : 'Find me on',
    servicesKicker: lang === 'es' ? 'Mis servicios' : 'My services',
    servicesTitle: lang === 'es' ? 'Lo que hago' : 'What I Do',
    cards: [
      {
        tag: 'FE',
        title: lang === 'es' ? 'Frontend' : 'Frontend',
        text:
          lang === 'es'
            ? 'Me gusta el frontend: UI limpia, responsive, componentes reutilizables y rendimiento.'
            : 'I enjoy frontend: clean UI, responsive layouts, reusable components and performance.',
      },
      {
        tag: 'ERP',
        title: lang === 'es' ? 'ERP / CRM' : 'ERP / CRM',
        text:
          lang === 'es'
            ? 'He construido sistemas tipo ERP/CRM desde cero: inventario, ventas, RRHH, contabilidad, reportes.'
            : 'I’ve built ERP/CRM systems from scratch: inventory, sales, HR, accounting and reporting.',
      },
      {
        tag: 'LEARN',
        title: lang === 'es' ? 'Aprendizaje continuo' : 'Continuous learning',
        text:
          lang === 'es'
            ? 'Me mantengo aprendiendo: nuevos lenguajes, frameworks, mejores prácticas y automatización.'
            : 'Always learning: new languages, frameworks, best practices and automation.',
      },
    ],
  }

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-kicker">{copy.kicker}</div>

          <h1 className="hero-title">
            <span className="accent">{copy.name}</span>
          </h1>

          <div className="hero-subtitle">{copy.role}</div>

          <p className="hero-text">{copy.bio}</p>

          <div className="hero-actions">
            <a className="btn btn-accent btn-lg" href="#contact">
              {copy.cta}
            </a>
          </div>

          <div className="hero-social">
            <div className="social-label">{copy.socialLabel}</div>

            <div className="social-row">
              <a
                className="social-chip"
                href="https://github.com/NelsonERodriguez"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>
              <a
                className="social-chip"
                href="https://www.instagram.com/esttuardo_10"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                className="social-chip"
                href="https://www.linkedin.com/in/nelson-matul-9bb92796/"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hex-wrap">
            <div className="hex-glow" aria-hidden="true" />
            <div className="hex">
              <img src={heroImg} alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-kicker">{copy.servicesKicker}</div>
        <h2 className="services-title">{copy.servicesTitle}</h2>

        <div className="row g-4 mt-2">
          {copy.cards.map((c) => (
            <div className="col-12 col-md-4" key={c.tag}>
              <div className="card-dark p-4 h-100">
                <div className="card-icon">{c.tag}</div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-text mb-0">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="contact" className="contact-spacer" />
    </div>
  )
}