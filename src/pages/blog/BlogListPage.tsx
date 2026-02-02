import { useLang } from '@/shared/lang/langContext'

export default function BlogListPage() {
  const { lang } = useLang()

  return (
    <div className="container py-5">
      <h1 className="page-title">Blog</h1>
      <p className="page-muted">
        {lang === 'es'
          ? 'Esta sección se alimentará desde Django. Por ahora, maqueta.'
          : 'This section will be powered by Django. For now, it’s a mock.'}
      </p>

      <div className="row g-4 mt-2">
        {[1].map((n) => (
          <div className="col-12" key={n}>
            <div className="card-dark p-4 h-100">
              <div className="card-icon">POST</div>
              <h3 className="card-title">{lang === 'es' ? `Post ${n}` : `Post ${n}`}</h3>
              <p className="card-text">
                {lang === 'es'
                  ? 'Extracto corto del post. Luego lo conectamos a /api/blog.'
                  : 'Short excerpt. Later we connect it to /api/blog.'}
              </p>
              {/* <button className="btn btn-outline-accent mt-2" type="button">
                {lang === 'es' ? 'Leer' : 'Read'}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}