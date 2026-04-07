export default function NotFound() {
  return (
    <div style={{ padding: '3rem 1.25rem', textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '1rem' }}>Page not found</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: '#0057A8', fontWeight: 700 }}>Back to Home</a>
    </div>
  )
}
