import { useLang } from '@/shared/lang/langContext'

export default function ProjectsPage() {
  const { lang } = useLang()

  return (
    <div className="container py-5">
      <h1 className="page-title">{lang === 'es' ? 'Proyectos' : 'Projects'}</h1>
      <p className="page-muted">
        {lang === 'es'
          ? 'Esta sección se alimentará desde Django. Por ahora, maqueta.'
          : 'This section will be powered by Django. For now, it’s a mock.'}
      </p>

      <div className="row g-4 mt-2">
        {[1, 2, 3, 4].map((n) => (
          <div className="col-12 col-md-6" key={n}>
            <div className="card-dark p-4 h-100">
              <div className="card-icon">PRJ</div>
              <h3 className="card-title">
                {lang === 'es' ? `Proyecto ${n}` : `Project ${n}`}
              </h3>
              <p className="card-text">
                {lang === 'es'
                  ? 'Descripción corta, stack y resultado.'
                  : 'Short description, stack and outcome.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}