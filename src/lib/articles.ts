export type Article = {
  slug: string
  title: string
  metaDescription: string
  sections: { heading: string; text: string }[]
}

export const articles: Article[] = [
  {
    slug: 'how-to-choose',
    title: 'How to Choose a Roof Repair Company in Chicago',
    metaDescription: 'What to look for when hiring a roof repair company in Chicago — licensing, insurance, reviews, warranties, and red flags to avoid.',
    sections: [
      { heading: 'Verify licensing and insurance first', text: 'In Illinois, roofing contractors are not required to hold a state license, but the City of Chicago requires a Chicago Roofing Contractor license for most roofing work. Always ask for the license number and verify it with the city. General liability insurance is essential — without it, you could be liable for injuries on your property.' },
      { heading: 'Check Google reviews carefully', text: 'A high star rating with few reviews means less than a 4.6 rating with 150+ reviews. Read the actual text of recent reviews. Look for patterns: slow response, poor communication, or unfinished work are red flags. Responding to negative reviews professionally is a good sign.' },
      { heading: 'Get at least two estimates', text: 'Roofing prices vary significantly in Chicago. Getting two or three free estimates gives you a realistic sense of fair pricing and lets you compare warranty terms. Be cautious of estimates that are dramatically lower than others — this often signals cut corners or substandard materials.' },
      { heading: 'Ask about the warranty', text: 'A reputable company provides a written warranty on both labor and materials. Labor warranties cover workmanship — leaks caused by improper installation. Material warranties come from the manufacturer. Ask for both in writing before signing anything.' },
      { heading: 'Watch for red flags', text: 'Be wary of door-to-door solicitors after storms, companies that ask for full payment upfront, contractors without a physical address, and anyone who refuses to provide a written estimate. These are common signs of storm chasers or unlicensed operators.' },
      { heading: 'Why our list saves you time', text: 'We pre-verify every company on our list for licensing, insurance, Google rating, and warranty terms. You can call any company on our list with confidence that the basics are already checked.' },
    ],
  },
  {
    slug: 'average-cost',
    title: 'Average Cost of Roof Repair in Chicago',
    metaDescription: 'How much does roof repair cost in Chicago? A breakdown of prices by repair type, material, and roof size.',
    sections: [
      { heading: 'Minor repairs: $200–$500', text: 'Small jobs like patching a few shingles, sealing around a vent pipe, or fixing a small section of flashing typically run $200–$500 in Chicago. These can usually be completed in a few hours and do not require permits.' },
      { heading: 'Moderate repairs: $500–$1,500', text: 'Mid-range repairs include replacing larger sections of shingles, repairing significant flashing damage, fixing ice dam damage, or patching a flat roof section. These jobs often take a full day and pricing depends heavily on materials.' },
      { heading: 'Major repairs: $1,500–$5,000+', text: 'Large repairs — widespread shingle replacement, major flat roof patching, or structural work around chimneys — can run $1,500 to $5,000 or more. At this price point, it is worth getting an opinion on whether a full replacement makes more sense.' },
      { heading: 'Full replacement: $8,000–$25,000+', text: 'A full roof replacement on a typical Chicago single-family home runs $8,000–$15,000 for standard asphalt shingles. Premium materials, complex rooflines, or larger homes push costs higher. Flat roof replacements are priced per square foot — typically $5–$15 depending on material.' },
      { heading: 'What affects the price', text: 'Key factors include roof size (measured in squares — 100 square feet each), pitch (steep roofs cost more to work on), material (asphalt, metal, slate, TPO), the extent of damage, and whether permits are required. Emergency or same-day calls may carry a small surcharge.' },
      { heading: 'How to get an accurate estimate', text: 'All companies on our list offer free on-site estimates. The estimate should be written, itemized, and include labor, materials, disposal, and permit costs. Do not accept verbal estimates only.' },
    ],
  },
  {
    slug: 'signs-your-roof',
    title: 'Signs Your Roof Needs Immediate Repair',
    metaDescription: 'How to tell if your roof needs urgent repair. Warning signs Chicago homeowners should not ignore.',
    sections: [
      { heading: 'Water stains on ceilings or walls', text: 'Brown or yellow stains on your ceiling are a strong indicator of an active or recent roof leak. The stain may appear far from the actual entry point — water travels along rafters and insulation. Act immediately, especially before rain.' },
      { heading: 'Missing or curling shingles', text: 'Shingles that are missing, cracked, curling at the edges, or covered in moss have reached the end of their lifespan. Even a few compromised shingles can allow water to enter the roof deck and cause rot.' },
      { heading: 'Granules in gutters', text: 'Asphalt shingles lose granules as they age. If you notice black, sand-like granules in your gutters or downspouts, your shingles are deteriorating and likely need replacement soon.' },
      { heading: 'Sagging sections', text: 'A roof that appears to sag or bow in sections indicates structural damage — often rotted decking or compromised rafters. This is a serious safety issue and requires immediate professional assessment.' },
      { heading: 'Daylight in the attic', text: 'If you can see light coming through the roof boards when standing in your attic, water and pests can get in too. Check your attic after dark with a flashlight for the same signs.' },
      { heading: 'Flashing damage', text: 'Flashing — the metal strips around chimneys, skylights, and vents — is a common failure point. Cracked, lifted, or rusted flashing allows water to seep into the home. This is often invisible from the ground but shows up as ceiling stains.' },
      { heading: 'When to call immediately', text: 'Call for emergency service if you see active water entry during rain, large sections of missing shingles after a storm, visible structural damage, or mold forming on interior walls or ceilings. These situations worsen rapidly and should not wait.' },
    ],
  },
  {
    slug: 'after-storm-damage',
    title: 'What to Do After Storm Damage to Your Roof in Chicago',
    metaDescription: 'Step-by-step guide for Chicago homeowners after a storm damages their roof. Insurance tips, temporary fixes, and how to find a trusted roofer.',
    sections: [
      { heading: 'Step 1: Stay safe and assess from the ground', text: 'Do not climb onto a storm-damaged roof. Assess the exterior from the ground or through an attic window. Look for missing shingles, damaged flashing, fallen debris, or dented gutters. Take photos immediately for insurance documentation.' },
      { heading: 'Step 2: Stop interior damage', text: 'If water is actively entering the home, place buckets to catch drips and move valuables away from wet areas. Lay down towels or plastic sheeting to protect flooring. Do not turn on overhead lights if there is water near the fixture.' },
      { heading: 'Step 3: Document everything', text: 'Photograph all exterior damage, interior staining, and any debris from the storm. Note the date and time. This documentation is essential for your insurance claim. Do not discard any damaged materials until your adjuster has seen them.' },
      { heading: 'Step 4: Call your insurance company', text: 'Report the damage to your homeowner insurance company as soon as possible. Most policies require timely reporting after a storm event. Your insurer will send an adjuster to assess the damage.' },
      { heading: 'Step 5: Get a temporary repair to prevent further damage', text: 'Before your insurance adjuster arrives, you can authorize a contractor to place a temporary tarp or cover over damaged areas to prevent further water entry. This is covered by most policies and does not affect your claim.' },
      { heading: 'Step 6: Get a professional estimate', text: 'Once the adjuster has been, get a written estimate from a licensed contractor before committing to any permanent repair. Compare the estimate to what your insurer offers. If there is a significant discrepancy, you can negotiate or hire a public adjuster.' },
      { heading: 'Beware of storm chasers', text: 'After major Chicago storms, out-of-town contractors flood the area offering quick, cheap repairs. Many are unlicensed, uninsured, and do poor work. Use only local, verified contractors — like those on our list.' },
    ],
  },
  {
    slug: 'how-we-rank-companies',
    title: 'How We Rank Roof Repair Companies in Chicago',
    metaDescription: 'Our methodology for evaluating and ranking roof repair companies in Chicago — transparent, editorial, and never pay-to-play.',
    sections: [
      { heading: 'Our goal', text: 'We built this ranking to solve a real problem: when a Chicago homeowner needs a roofer fast, they should not have to sort through paid ads, fake reviews, and unlicensed operators. Our list gives homeowners a starting point they can trust.' },
      { heading: 'Factor 1: Licensing and insurance', text: 'We verify that each company holds a valid Chicago Roofing Contractor license and carries general liability insurance. This is a hard requirement — companies without both are excluded entirely.' },
      { heading: 'Factor 2: Google reviews', text: 'We look at both the star rating and the number of reviews. Volume matters — a 5.0 with 8 reviews is far less reliable than a 4.7 with 200 reviews. We also read the text of reviews to identify recurring patterns.' },
      { heading: 'Factor 3: Response time', text: 'We test or verify each company\'s claimed response times for emergency situations. Same-day availability is a key differentiator and is reflected in the Emergency tag on our cards.' },
      { heading: 'Factor 4: Warranty terms', text: 'We collect and compare the warranty terms each company offers on labor and materials. Longer, more comprehensive warranties score higher.' },
      { heading: 'Factor 5: Pricing transparency', text: 'We favor companies that provide written, itemized estimates with no hidden fees. Vague pricing or refusal to provide a written quote lowers a company\'s score.' },
      { heading: 'What does not affect ranking', text: 'Companies cannot pay to be ranked higher. We do not accept sponsored placement. Our compensation comes from referral fees, which are disclosed separately and do not influence rankings.' },
      { heading: 'How often we update', text: 'We review rankings periodically — at minimum every quarter, and immediately when we receive credible reports of poor service, license issues, or closure.' },
    ],
  },
]
