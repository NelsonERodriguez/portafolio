export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container small text-muted">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            © {year} — Hecho con &#x1F90D; React + Vite + Django
          </div>

          <div className="col-12 col-md-6 text-md-end mt-2 mt-md-0">
            <div>
              &#x1F464; info@nelsonestuardo.com
            </div>
            <div>
              &#x260E; +502 5198 9952 (Whatsapp, Telegram)
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}