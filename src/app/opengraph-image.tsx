import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Roof Repair Chicago NOW — Top 10 Vetted Companies'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '8px',
          background: '#DC2626',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '28px', fontWeight: 700, color: '#111827', letterSpacing: '-0.5px' }}>
            Roof Repair Chicago{' '}
          </span>
          <span style={{ fontSize: '28px', fontWeight: 700, color: '#DC2626', marginLeft: '6px' }}>
            NOW
          </span>
        </div>

        {/* Main heading */}
        <div style={{
          fontSize: '56px',
          fontWeight: 800,
          color: '#111827',
          lineHeight: 1.15,
          marginBottom: '28px',
          maxWidth: '800px',
        }}>
          Top 10 Vetted Roofing Contractors in Chicago
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
          {['Same-day availability', 'Free estimates', 'Warranty on all work'].map(badge => (
            <div key={badge} style={{
              background: '#F9FAFB',
              border: '1.5px solid #E5E7EB',
              borderRadius: '8px',
              padding: '10px 20px',
              fontSize: '20px',
              color: '#374151',
              fontWeight: 500,
            }}>
              ✓ {badge}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ fontSize: '22px', color: '#6B7280' }}>
          roofrepairchicagonow.com
        </div>
      </div>
    ),
    { ...size }
  )
}
