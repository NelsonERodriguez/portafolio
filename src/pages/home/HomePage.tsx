import heroImg from '@/assets/images/hero.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useLang } from '@/shared/lang/langContext'

export default function HomePage() {
  const { lang } = useLang()

  const copy = {
    kicker: lang === 'es' ? 'Hola, soy' : 'Hello, I’m',
    name: 'Nelson Rodriguez',
    role:
      lang === 'es'
        ? 'Desarrollador Fullstack (Web / Apps)'
        : 'Fullstack Developer (Web / Apps)',
    bio:
      lang === 'es'
        ? 'Me especializo en el desarrollo de productos web reales, no solo sitios informativos. Trabajo de forma integral en frontend moderno, backend sólido y despliegues en servidores VPS, cuidando tanto la experiencia del usuario como la estabilidad y mantenibilidad del sistema. Disfruto construir software que se usa en el día a día, como ERP, CRM, aplicaciones internas y sistemas a medida. Trabajo por placer: me gusta programar, entender cómo funcionan los sistemas y mejorar plataformas reales, ya sea optimizando rendimiento, corrigiendo flujos o agregando nuevas funcionalidades.'
        : 'I specialize in building real web products, not just informational websites. I work end-to-end on modern frontend, solid backend systems, and VPS-based deployments, focusing on both user experience and long-term stability and maintainability. I enjoy building software used on a daily basis, such as ERP and CRM systems, internal applications, and custom platforms. I work by passion — I genuinely enjoy programming, understanding how systems work, and improving real-world platforms through optimization and continuous enhancement.',
    cta: lang === 'es' ? 'Hablemos' : 'Let’s Talk',
    meta1:
      lang === 'es'
        ? 'Primero los deberes, luego los placeres.'
        : 'Discipline first, reward later.',

    meta2:
      lang === 'es'
        ? 'Trabaja cuando otros descansan, para lograr lo que otros solo sueñan.'
        : 'Work while others rest, to achieve what others only dream of.',

    meta3:
      lang === 'es'
        ? 'Enfocado en construir mi propia empresa.'
        : 'Focused on building my own company.',
    socialLabel: lang === 'es' ? 'Encuéntrame en' : 'Find me on',
    servicesKicker: lang === 'es' ? 'Mis servicios' : 'My services',
    servicesTitle: lang === 'es' ? 'Lo que puedo y disfruto hacer' : 'What I can do and what I enjoy doing.',
    cards: [
      {
        tag: 'FE',
        title: lang === 'es' ? 'Frontend' : 'Frontend',
        text:
          lang === 'es'
            ? 'Me gusta el frontend: interfaces limpias, responsive, componentes reutilizables y buen rendimiento.'
            : 'I enjoy frontend development: clean interfaces, responsive layouts, reusable components, and performance.',
      },
      {
        tag: 'BE',
        title: lang === 'es' ? 'Backend' : 'Backend',
        text:
          lang === 'es'
            ? 'Diseño backend sólido: APIs claras, lógica de negocio bien estructurada y sistemas mantenibles.'
            : 'I build solid backends: clean APIs, well-structured business logic, and maintainable systems.',
      },
      {
        tag: 'ERP',
        title: lang === 'es' ? 'ERP / CRM' : 'ERP / CRM',
        text:
          lang === 'es'
            ? 'He construido sistemas tipo ERP y CRM desde cero: inventario, ventas, RRHH, contabilidad y reportes.'
            : 'I’ve built ERP and CRM systems from scratch: inventory, sales, HR, accounting, and reporting.',
      },
      {
        tag: 'PROD',
        title: lang === 'es' ? 'Producto' : 'Product mindset',
        text:
          lang === 'es'
            ? 'Pienso en producto: soluciones reales, usables y escalables que aportan valor al negocio.'
            : 'I think in terms of product: real, usable, and scalable solutions that deliver business value.',
      },
      {
        tag: 'OPS',
        title: lang === 'es' ? 'Despliegue e infraestructura' : 'Deployment & infrastructure',
        text:
          lang === 'es'
            ? 'Me encargo del despliegue: VPS, entornos Linux, builds, dominios y SSL.'
            : 'I handle deployments: VPS, Linux environments, builds, domains, and SSL.',
      },
      {
        tag: 'OPT',
        title: lang === 'es' ? 'Optimización' : 'Optimization',
        text:
          lang === 'es'
            ? 'Me gusta mejorar sistemas existentes: rendimiento, flujos, UX y estabilidad.'
            : 'I enjoy improving existing systems: performance, workflows, UX, and stability.',
      },
      {
        tag: 'LEARN',
        title: lang === 'es' ? 'Aprendizaje continuo' : 'Continuous learning',
        text:
          lang === 'es'
            ? 'Siempre estoy aprendiendo: nuevos lenguajes, frameworks, mejores prácticas y automatización.'
            : 'Always learning: new languages, frameworks, best practices, and automation.',
      },
      {
        tag: 'SOLO',
        title: lang === 'es' ? 'Trabajo independiente' : 'Independent work',
        text:
          lang === 'es'
            ? 'Puedo trabajar solo de punta a punta o integrarme fácilmente a equipos técnicos.'
            : 'I can work end-to-end independently or integrate smoothly into technical teams.',
      },
      {
        tag: 'SPORT',
        title: lang === 'es' ? 'Pasatiempos' : 'hobby',
        text:
          lang === 'es'
            ? 'Practico baloncesto por el esfuerzo, me gusta el ciclismo por el trabajo en equipo y disfruto conducir motocicleta por la aventura.'
            : 'I practice basketball for the physical challenge, enjoy cycling for teamwork and endurance, and ride motorcycles for the sense of adventure.',
      },
    ]
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
          <ul>
            <li>{copy.meta1}</li>
            <li>{copy.meta2}</li>
            <li>{copy.meta3}</li>
          </ul>

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
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                className="social-chip"
                href="https://www.instagram.com/esttuardo_10"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                className="social-chip"
                href="https://www.linkedin.com/in/nelson-matul-9bb92796/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
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

      <section className="container py-5">
        <h2 className="h4 mb-3">Contacto</h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget
            const data = Object.fromEntries(new FormData(form))

            const res = await fetch('https://buildcoreia.com/correo_publico/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            })

            if (!res.ok) {
              alert('No se pudo enviar. Intenta de nuevo.')
              return
            }

            form.reset()
            alert('Enviado. Gracias.')
          }}
        >
          <div className="row g-3">
            <div className="col-12">
              <input name="name" className="form-control" placeholder="Nombre" required autoComplete='off' />
            </div>
            <div className="col-12 col-md-6">
              <input name="phone" className="form-control" placeholder="Tel" type="text" required autoComplete='off' />
            </div>
            <div className="col-12 col-md-6">
              <input name="email" className="form-control" placeholder="Email" type="email" required autoComplete='off' />
            </div>
            <div className="col-12">
              <textarea name="message" className="form-control" placeholder="Mensaje" rows={5} required autoComplete='off' />
            </div>
            <div className="col-12">
              <button className="btn btn-accent" type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}