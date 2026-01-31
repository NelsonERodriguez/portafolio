export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container small text-muted">
        © {year} — React + Vite
      </div>
    </footer>
  )
}