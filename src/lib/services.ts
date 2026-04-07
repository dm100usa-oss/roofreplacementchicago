export type Service = {
  slug: string
  name: string
  title: string
  metaDescription: string
  intro: string
  bodyText: string
  faq: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'flat-roof-replacement',
    name: 'Flat Roof Replacement',
    title: 'Flat Roof Replacement Chicago',
    metaDescription: 'Flat roof replacement in Chicago. TPO, EPDM, and modified bitumen specialists. Licensed contractors, free estimates, written warranties.',
    intro: 'Flat roofs are the most common roof type in Chicago on two-flats, three-flats, courtyard buildings, and commercial properties. When a flat roof fails, replacement is almost always more cost-effective than repeated repairs. Our verified contractors specialize in flat roof replacement with all major membrane systems.',
    bodyText: 'A flat roof replacement in Chicago costs $8,000 to $20,000 for most residential buildings, depending on square footage and membrane system chosen. TPO membrane is the current code-preferred system in Chicago. It reflects heat, handles Chicago freeze-thaw cycles well, and typically carries a 15 to 20 year manufacturer warranty. EPDM rubber is common on older buildings and is often used when budget is a priority. Modified bitumen is sometimes chosen for commercial applications or where a torch-applied system is preferred. The replacement process involves removing the old membrane down to the decking, inspecting and replacing any damaged insulation or decking boards, installing new insulation to meet current energy code requirements, and applying the new membrane system. A City of Chicago building permit is required for flat roof replacement. All contractors on our list pull permits as part of the project.',
    faq: [
      { q: 'How much does flat roof replacement cost in Chicago?', a: 'Flat roof replacement on a Chicago two-flat typically runs $8,000 to $14,000 for a TPO system. Larger buildings cost more. EPDM systems cost slightly less. All contractors offer free on-site estimates.' },
      { q: 'What flat roof system is best for Chicago?', a: 'TPO membrane is the most commonly specified flat roof system in Chicago. It performs well in cold winters, reflects summer heat, and is code-compliant. EPDM is a proven alternative. Avoid BUR systems on new installations as they are less energy-efficient.' },
      { q: 'How long does a new flat roof last in Chicago?', a: 'A properly installed TPO or EPDM flat roof lasts 20 to 30 years in Chicago with annual inspections and minor maintenance. Modified bitumen systems last 15 to 20 years. Chicago winters are harder on flat roofs than pitched roofs due to standing water and freeze-thaw stress.' },
      { q: 'Do I need a permit for flat roof replacement in Chicago?', a: 'Yes. The City of Chicago requires a building permit for flat roof replacement. Contractors on our list include permit costs in their contracts and pull the permit before work begins.' },
    ],
  },
  {
    slug: 'asphalt-shingle-replacement',
    name: 'Asphalt Shingle Replacement',
    title: 'Asphalt Shingle Roof Replacement Chicago',
    metaDescription: 'Asphalt shingle roof replacement in Chicago. Architectural and impact-resistant options. Licensed contractors, free estimates, 5 to 10 year warranties.',
    intro: 'Asphalt shingles are the most common roofing material on Chicago single-family homes and bungalows. When shingles reach 20 years or show widespread granule loss, cracking, or curling, full replacement is more cost-effective than repeated repairs. Our verified contractors install architectural shingles from leading manufacturers with strong warranty coverage.',
    bodyText: 'Asphalt shingle replacement in Chicago costs $8,000 to $16,000 for most single-family homes depending on square footage, pitch, and shingle grade. Standard architectural shingles run $9 to $13 per square foot installed. Class 4 impact-resistant shingles cost $1 to $2 more per square foot but often qualify for insurance premium discounts that pay back the difference over time. The replacement process involves removing all existing shingle layers down to the decking, inspecting decking for rot or damage, installing Ice and Water Shield membrane at eaves and valleys as required by Chicago code, adding synthetic underlayment over the full deck, and installing new shingles with proper fastening pattern for Chicago wind loads. Most residential shingle replacement projects in Chicago are completed in one day. All contractors on our list offer free estimates and pull the required City of Chicago building permit.',
    faq: [
      { q: 'How much does asphalt shingle replacement cost in Chicago?', a: 'Full asphalt shingle replacement on a typical Chicago home runs $8,000 to $16,000 depending on roof size and shingle grade. Most homes fall between $9,000 and $13,000. Free on-site estimates available from all listed contractors.' },
      { q: 'How long do asphalt shingles last in Chicago?', a: 'Standard 3-tab shingles last 15 to 20 years in Chicago. Architectural shingles last 20 to 25 years. Chicago freeze-thaw cycles and hot summers shorten lifespan compared to manufacturer ratings. Class 4 impact-resistant shingles perform better and sometimes last 25 to 30 years.' },
      { q: 'What is the difference between 3-tab and architectural shingles?', a: '3-tab shingles are thinner, lighter, and less expensive. They have a flat appearance and are rated for lower wind speeds. Architectural shingles are thicker, heavier, and have a dimensional appearance. They carry longer warranties and perform better in Chicago winters. Most contractors recommend architectural shingles for Chicago homes.' },
      { q: 'Should I get Class 4 impact-resistant shingles in Chicago?', a: 'Class 4 impact-resistant shingles cost 10 to 15 percent more than standard architectural shingles. Many homeowner insurance policies in Illinois offer discounts for Class 4 roofs. Ask your insurance agent before your roof replacement to calculate whether the upgrade pays back through reduced premiums.' },
    ],
  },
  {
    slug: 'metal-roof-replacement',
    name: 'Metal Roof Replacement',
    title: 'Metal Roof Replacement Chicago',
    metaDescription: 'Metal roof replacement in Chicago. Standing seam and metal shingle options. Long-term value, licensed contractors, free estimates.',
    intro: 'Metal roofing is the longest-lasting option for Chicago homes. A properly installed metal roof lasts 40 to 70 years and requires minimal maintenance. Our verified contractors install standing seam and metal shingle systems on residential and commercial buildings throughout Chicago.',
    bodyText: 'Metal roof replacement in Chicago costs $15,000 to $30,000 for most single-family homes depending on system type and roof complexity. Standing seam metal roofing costs $15 to $22 per square foot installed and is the premium option. Metal shingles that mimic the look of asphalt or slate cost slightly less. Metal roofs perform exceptionally well in Chicago winters. They shed snow without forming ice dams, unlike asphalt shingles where snow accumulation and freeze-thaw cycles cause granule loss. Metal roofing is also fire-resistant and wind-resistant up to 140 mph. The higher upfront cost is offset by the 40 to 70 year lifespan compared to 20 to 25 years for asphalt. For homeowners planning to stay in their home long term, metal is often the better long-term investment.',
    faq: [
      { q: 'How much does metal roof replacement cost in Chicago?', a: 'Metal roof replacement on a typical Chicago home runs $15,000 to $28,000 for standing seam systems. Metal shingles cost slightly less. Free on-site estimates from all listed contractors.' },
      { q: 'Is metal roofing worth the extra cost in Chicago?', a: 'For homeowners planning to stay in their home 15 or more years, metal roofing typically provides better long-term value than asphalt. The 40 to 70 year lifespan means one replacement versus two or three asphalt replacements over the same period.' },
      { q: 'Does metal roofing handle Chicago winters better than asphalt?', a: 'Yes. Metal roofs shed snow efficiently and do not develop ice dams the way asphalt shingle roofs do. They also expand and contract with temperature changes without cracking or losing granules.' },
      { q: 'How noisy is a metal roof in rain?', a: 'Modern metal roofing installed over solid decking with underlayment is not significantly louder than asphalt. The hollow sound associated with metal roofs applies to older barn-style installations, not residential standing seam systems on solid decks.' },
    ],
  },
  {
    slug: 'tpo-epdm-roof-replacement',
    name: 'TPO / EPDM Roof Replacement',
    title: 'TPO and EPDM Flat Roof Replacement Chicago',
    metaDescription: 'TPO and EPDM flat roof replacement in Chicago. Commercial and residential specialists, licensed contractors, free estimates.',
    intro: 'TPO and EPDM are the two most common membrane systems for flat roof replacement in Chicago. Both perform well in the Chicago climate. Our verified contractors install both systems and can help you choose the right option for your building.',
    bodyText: 'TPO (thermoplastic polyolefin) has become the dominant flat roof membrane in Chicago over the past decade. It reflects heat in summer, handles freeze-thaw stress well, and is energy code-compliant. TPO seams are heat-welded, creating a strong monolithic membrane. A TPO system costs $10 to $18 per square foot installed and carries 15 to 20 year manufacturer warranties. EPDM (ethylene propylene diene monomer) is a synthetic rubber membrane that has been used in Chicago since the 1970s. It is more flexible at low temperatures than TPO and is often used on buildings where the simpler installation process matters. EPDM costs slightly less than TPO but typically carries a shorter warranty. Both systems require annual inspection for seam integrity and drain condition. Chicago drainage requirements are strict, and any flat roof replacement must meet current slope and drain specifications.',
    faq: [
      { q: 'Which is better for Chicago, TPO or EPDM?', a: 'Both perform well in Chicago. TPO is more energy-efficient and is the current code-preferred system for new installations. EPDM is a proven system with a long track record in cold climates. Your contractor can recommend based on your building type, existing system, and budget.' },
      { q: 'How much does TPO roof replacement cost in Chicago?', a: 'TPO installation on a Chicago two-flat typically runs $9,000 to $14,000. Larger commercial buildings cost more per project but less per square foot. Free estimates from all listed contractors.' },
      { q: 'How long does a TPO or EPDM roof last in Chicago?', a: 'A properly installed TPO roof lasts 20 to 30 years in Chicago with annual inspection. EPDM lasts 15 to 25 years. Longevity depends heavily on installation quality and drain maintenance.' },
      { q: 'Does Chicago code require a specific flat roof system?', a: 'Chicago energy code requires meeting specific R-value insulation requirements for flat roofs. TPO systems can be paired with rigid insulation to meet these requirements. Your contractor will spec the correct assembly to meet current code.' },
    ],
  },
  {
    slug: 'storm-damage-roof-replacement',
    name: 'Storm Damage Roof Replacement',
    title: 'Storm Damage Roof Replacement Chicago',
    metaDescription: 'Roof replacement after storm damage in Chicago. Hail and wind specialists, insurance claim assistance, licensed contractors, free estimates.',
    intro: 'Chicago gets hit by major hailstorms and wind events every year. When storm damage is extensive enough to require full replacement, homeowner insurance typically covers the cost. Our verified contractors have experience with storm damage assessment and insurance claim documentation.',
    bodyText: 'Storm damage roof replacement in Chicago follows a specific process. After a storm, document damage with photographs within 48 hours. Have a licensed contractor inspect and provide a written damage assessment before calling your insurance company. File the claim with the contractor written assessment in hand. Request that the contractor be present during the insurance adjuster visit. Illinois homeowners typically have 12 to 24 months from the storm date to file a hail damage claim. The most important factor in getting a claim approved is the quality of documentation. Experienced contractors know how to document hail spatter patterns, granule displacement, and structural impact in a way that satisfies insurance adjusters. Hail damage is not always visible from the ground. Small granule bruises and dented metal components require a ladder or drone inspection to properly identify.',
    faq: [
      { q: 'Will insurance cover my roof replacement after a Chicago hailstorm?', a: 'Most homeowner policies cover roof replacement when hail or wind causes sufficient damage. The key is documentation. Get a contractor written assessment before calling your insurer. Insurance covers storm damage, not normal aging.' },
      { q: 'How do I know if my roof was damaged in a Chicago storm?', a: 'Signs include granules in gutters, dented aluminum vents or flashing, bruising on shingles visible from close up, and water stains appearing on interior ceilings after the storm. A free inspection from a licensed contractor is the most reliable way to assess damage.' },
      { q: 'What is the timeline for filing a hail damage claim in Illinois?', a: 'Illinois homeowners typically have 12 to 24 months from the date of a storm to file a hail damage claim. Check your specific policy for exact terms. Do not wait, as documentation becomes harder to confirm as time passes.' },
      { q: 'Should I use a storm chaser contractor after a Chicago hailstorm?', a: 'Be cautious. After major storms, out-of-state contractors flood Chicago neighborhoods. Always verify Illinois IDFPR license before signing anything. Licensed local contractors who will be in business for the warranty period are a safer choice.' },
    ],
  },
]
