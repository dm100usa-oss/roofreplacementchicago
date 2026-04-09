import type { Metadata } from 'next'
import styles from '../static-page.module.css'

export const metadata: Metadata = {
  title: 'How We Rank Roof Replacement Contractors — Roof Replacement Chicago',
  description: 'Our methodology for ranking roof replacement contractors in Chicago. Transparent criteria based on licensing, reviews, experience, warranty, and BBB status.',
  alternates: {
    canonical: 'https://www.roofreplacementchicago.com/how-we-rank',
    languages: { 'es': 'https://www.roofreplacementchicago.com/es/how-we-rank' },
  },
}

export default function HowWeRankPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1>How We Rank Roof Replacement Contractors in Chicago</h1>

        <h2>Why we do this</h2>
        <p>Replacing a roof in Chicago is one of the most significant home improvement decisions a homeowner can make. The cost typically ranges from $8,000 to $25,000, and the quality of the contractor determines whether that investment holds up through Chicago winters for the next 20 to 30 years. Our goal is simple: give homeowners a trustworthy, independent starting point — verified criteria, no advertising pressure, no paid placements.</p>

        <h2>Our criteria</h2>

        <h2>1. Illinois IDFPR license</h2>
        <p>We verify active licensing through the Illinois Department of Financial and Professional Regulation database before any company appears on our list. We check for both Limited and Unlimited license types. Expired or suspended licenses result in immediate removal. This is a hard requirement — unlicensed contractors are excluded entirely.</p>

        <h2>2. Google rating and review volume</h2>
        <p>We look for a minimum of 4.5 stars with at least 30 reviews. Volume matters because it indicates consistent performance across many projects — a 5.0 rating from 10 reviews carries far less weight than a 4.8 from 150. We also read reviews for patterns around communication, permit handling, cleanup, and warranty follow-through.</p>

        <h2>3. BBB accreditation and history</h2>
        <p>We note BBB accreditation and rating as a secondary trust signal. We also check complaint history and how the company responds to complaints. A company that resolves issues professionally demonstrates accountability. Not all companies on our list are BBB accredited — we note this transparently.</p>

        <h2>4. Years in business</h2>
        <p>Roofing warranties are only as good as the company backing them. A contractor who has been in business for 15 years is far more likely to honor a 10-year workmanship warranty than one founded last year. We prioritize contractors with a documented track record in the Chicago market.</p>

        <h2>5. Workmanship warranty</h2>
        <p>We require a minimum 3-year workmanship warranty. Five years is our standard threshold. Ten years is the mark of exceptional confidence in installation quality. Warranty terms are taken from each company's public website and may be subject to change — we recommend confirming directly with the contractor.</p>

        <h2>6. Chicago-specific experience</h2>
        <p>We favor contractors with documented experience pulling City of Chicago building permits and working with homeowner insurance companies on storm damage claims. Chicago's flat roof prevalence, freeze-thaw climate, and city permit requirements make local experience a meaningful differentiator.</p>

        <h2>How we calculate the Expert Score</h2>
        <p>After evaluating all six criteria, we assign an Expert Score from 1.0 to 5.0. This is our editorial opinion based on publicly available data. The score reflects the overall strength of each contractor's verified profile — not personal experience with the company, and not paid placement. The Expert Score is one input for homeowners, not a guarantee of outcome.</p>

        <h2>Comparison table</h2>
        <p>The following table summarizes our evaluation of each contractor as of April 2026. All data is sourced from publicly available records including IDFPR, Google, BBB, and each company's own website.</p>

        <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
            <thead>
              <tr style={{background: '#f0f4ff', borderBottom: '2px solid #2563eb'}}>
                <th style={{padding: '10px 12px', textAlign: 'left'}}>Contractor</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>License</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Google</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Reviews</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>BBB</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Est.</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Warranty</th>
                <th style={{padding: '10px 12px', textAlign: 'center'}}>Expert Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                {name: 'Horizon Restoration', license: '✓', google: '4.9', reviews: '275', bbb: 'A+', est: '2007', warranty: '5 yr+', score: '4.9'},
                {name: 'Anchor Point Roofing', license: '✓', google: '5.0', reviews: '163', bbb: '—', est: '2015', warranty: '10 yr', score: '4.8'},
                {name: 'Quality Way Roofing', license: '✓', google: '4.9', reviews: '95', bbb: '✓', est: '2016', warranty: '5 yr', score: '4.7'},
                {name: 'Second City Roofing', license: '✓', google: '4.3', reviews: '110', bbb: 'A+', est: '1978', warranty: '5 yr', score: '4.7'},
                {name: 'Salazar Roofing', license: '✓', google: '4.8', reviews: '40', bbb: 'A+', est: '2019', warranty: '10 yr', score: '4.6'},
                {name: 'Prestige Roofing', license: '✓', google: '4.8', reviews: '88', bbb: '✓', est: '—', warranty: '5 yr', score: '4.5'},
              ].map((row, i) => (
                <tr key={row.name} style={{borderBottom: '1px solid #e5e7eb', background: i % 2 === 0 ? '#fff' : '#fafafa'}}>
                  <td style={{padding: '10px 12px', fontWeight: 600}}>{row.name}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center', color: '#2563eb'}}>{row.license}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.google}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.reviews}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.bbb}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.est}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center'}}>{row.warranty}</td>
                  <td style={{padding: '10px 12px', textAlign: 'center', fontWeight: 700, color: '#2563eb'}}>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>How often we update</h2>
        <p>We review our rankings on a regular basis. Licensing status, Google ratings, BBB records, and warranty terms can change. If a company's license lapses, its Google rating drops significantly, or we receive credible negative information, we update or remove the listing. The table above reflects data verified as of April 2026. We recommend homeowners independently verify licensing and insurance before signing any contract.</p>

        <h2>Editorial independence and compensation</h2>
        <p>All rankings on this site represent the independent editorial opinion of Roof Replacement Chicago based on publicly available data. We may receive compensation when homeowners contact contractors through our site. This compensation does not influence which companies appear on our list or how they are ranked. No company can pay to be included or ranked higher. For full details see our <a href="/disclosure">Disclosure</a> page.</p>

        <h2>Disclaimer</h2>
        <p>The Expert Scores and rankings on this site are editorial opinions based on publicly available information and are provided for informational purposes only. Roof Replacement Chicago makes no warranties regarding the accuracy, completeness, or timeliness of this information. Contractor performance, pricing, licensing status, and warranty terms may change after the date of our last review. Homeowners should independently verify all contractor credentials before entering into any agreement. Roof Replacement Chicago is not a party to any transaction between homeowners and contractors and accepts no liability for the outcome of any roofing project.</p>
      </div>
    </div>
  )
}
