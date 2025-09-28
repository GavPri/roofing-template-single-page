# CLAUDE_CONTEXT.md - Top Tier Roofing Landing Page

## Project Overview
Building a high-converting, SEO-optimized landing page for Top Tier Roofing, a premium residential and commercial roofing company. The site must rank well for local roofing searches and convert visitors into leads.

## Company Information
**Company Name:** Top Tier Roofing  
**Tagline:** "Excellence Above Every Home"  
**Location:** Austin, Texas (serving Greater Austin area)  
**Founded:** 2015  
**Specialties:** Residential & Commercial Roofing, Storm Damage Repair, Roof Inspections  
**License:** Texas RRC License #RT-12345  
**Phone:** (512) 555-ROOF  
**Email:** info@toptierroofing.com  
**Years in Business:** 9+ years  
**Completed Projects:** 2,500+  
**Team Size:** 25+ certified professionals  

## SEO Requirements & Guidelines
- **Primary Keywords:** "roofing contractor Austin", "roof repair Austin", "commercial roofing Austin"
- **Secondary Keywords:** "storm damage repair", "roof replacement", "roof inspection", "emergency roofing"
- **Local SEO Focus:** Austin, Round Rock, Cedar Park, Pflugerville, Georgetown
- **Target Audience:** Homeowners and commercial property managers in Austin area
- **Schema Markup:** LocalBusiness, Service, Review schemas required
- **Page Speed:** Target <3 seconds load time
- **Mobile-First:** Responsive design mandatory

## Technical Stack Rules
- **Framework:** Next.js/React
- **Styling:** Shadcn/ui components + custom style guide
- **No Style Changes:** Do not modify appearance/styling unless explicitly requested
- **Component Structure:** Each section is a separate, reusable component
- **Logo:** Pre-made logo file will be provided
- **Icons:** Use Lucide React icons where needed

## Site Structure & Components

### 1. Header/Navigation Component
**Component Name:** `Header.tsx`
**SEO Requirements:**
- Logo with alt text "Top Tier Roofing - Austin's Premier Roofing Contractor"
- A "Call Us" button linked to the telephone number above
- Navigation items should include target keywords
- Sticky navigation for better UX

**Content Structure:**
- Logo (left)
- Navigation: Home, Services, Gallery, About, Contact, Emergency Service
- Phone: (512) 555-ROOF (right)
- CTA Button: "Free Estimate"

**Technical Notes:**
- Use semantic `<nav>` element
- Implement proper ARIA labels
- Mobile hamburger menu required

### 2. Hero Section Component
**Component Name:** `Hero.tsx`
**SEO Requirements:**
- H1 tag with primary keyword: "Austin's #1 Roofing Contractor"
- Include location in subheading
- Strong CTA above the fold
- Trust indicators (licensed, insured, years in business)

**Content Structure:**
- H1: "Austin's #1 Roofing Contractor"
- Subheading: "Serving Greater Austin with Excellence for 9+ Years"
- Key benefits: Licensed & Insured, 24/7 Emergency Service, Free Inspections
- Primary CTA: "Get Free Estimate"
- Secondary CTA: "Call (512) 555-ROOF"
- Background: High-quality roofing project image

**Technical Notes:**
- Hero image should be optimized WebP format
- Include structured data for business info
- Load above-the-fold content first

### 3. Services Section Component
**Component Name:** `Services.tsx`
**SEO Requirements:**
- H2 with secondary keyword: "Complete Roofing Services in Austin"
- Each service should target specific keywords
- Include service areas in descriptions
- Link to dedicated service pages (if applicable)

**Services to Include:**
1. **Residential Roofing** - New installations, replacements
2. **Commercial Roofing** - Flat roofs, TPO, EPDM systems
3. **Storm Damage Repair** - Insurance claims assistance
4. **Emergency Roofing** - 24/7 response, tarping, temporary repairs
5. **Roof Inspections** - Free estimates, maintenance checkups
6. **Gutter Services** - Installation, repair, cleaning

**Technical Notes:**
- Use service schema markup
- Include relevant icons for each service
- Maintain consistent card layout

### 4. Why Choose Us Section Component
**Component Name:** `WhyChooseUs.tsx`
**SEO Requirements:**
- H2: "Why Austin Homeowners Trust Top Tier Roofing"
- Include trust signals and differentiators
- Use local testimonials/reviews

**Key Points:**
- 9+ Years Serving Austin Area
- 2,500+ Completed Projects
- Licensed & Fully Insured
- A+ BBB Rating
- 5-Star Google Reviews
- Manufacturer Certified
- Local Family-Owned Business
- Free Estimates & Inspections

### 5. Testimonials Section Component
**Component Name:** `Testimonials.tsx`
**SEO Requirements:**
- H2: "What Austin Customers Say About Us"
- Include customer names and locations (Austin area cities)
- Use review schema markup
- Link to Google My Business reviews

**Sample Testimonials:**
- "Top Tier Roofing replaced our storm-damaged roof in Cedar Park. Professional, fast, and excellent quality!" - Sarah M., Cedar Park
- "Best roofing company in Austin! They handled our insurance claim perfectly." - Mike R., Round Rock
- "Emergency roof repair on Sunday night - they were there within 2 hours!" - Jennifer L., Austin

**Technical Notes:**
- Implement review schema
- Include star ratings (5/5)
- Carousel or grid layout

### 6. Service Areas Section Component
**Component Name:** `ServiceAreas.tsx`
**SEO Requirements:**
- H2: "Roofing Services Throughout Greater Austin"
- List all service cities for local SEO
- Include "roofing contractor in [city]" phrases

**Service Areas:**
- Austin, TX
- Round Rock, TX
- Cedar Park, TX
- Pflugerville, TX
- Georgetown, TX
- Leander, TX
- Lakeway, TX
- Bee Cave, TX

### 7. Gallery Section Component
**Component Name:** `Gallery.tsx`
**SEO Requirements:**
- H2: "Our Austin Roofing Projects"
- All images need descriptive alt text
- Include project types and locations
- Optimize images for fast loading

**Gallery Categories:**
- Before/After Storm Repairs
- New Residential Installations
- Commercial Roofing Projects
- Emergency Repairs

**Technical Notes:**
- Use WebP format with fallbacks
- Implement lazy loading
- Include image schema markup

### 8. Contact Section Component
**Component Name:** `Contact.tsx`
**SEO Requirements:**
- H2: "Get Your Free Roofing Estimate Today"
- Include NAP (Name, Address, Phone) consistently
- Embed Google Maps
- Contact form with proper labels

**Contact Information:**
- Address: 1234 Roofing Way, Austin, TX 78701
- Phone: (512) 555-ROOF
- Email: info@toptierroofing.com
- Hours: Mon-Fri 7AM-7PM, Sat 8AM-5PM, 24/7 Emergency

**Form Fields:**
- Name, Phone, Email, Address, Service Needed, Message
- Include "How did you hear about us?" for tracking

### 9. Emergency Banner Component
**Component Name:** `EmergencyBanner.tsx`
**Purpose:** Floating banner for storm/emergency situations
**Content:** "Storm Damage? We're Here 24/7! Call (512) 555-ROOF"

### 10. Footer Component
**Component Name:** `Footer.tsx`
**SEO Requirements:**
- Include all NAP information
- Link to privacy policy, terms of service
- Social media links
- Service area links
- Copyright with current year

**Content Structure:**
- Company info and description
- Quick links to all main pages
- Service area links
- License information
- Social media icons
- Copyright notice

## Content Guidelines

### Voice & Tone
- Professional yet approachable
- Emphasize local expertise and community connection
- Focus on quality, reliability, and customer service
- Use action-oriented language
- Include safety and insurance messaging

### SEO Content Rules
- Include location keywords naturally in headings and content
- Use semantic HTML structure (h1, h2, h3 hierarchy)
- Write for users first, search engines second
- Include call-to-action in every section
- Maintain keyword density of 1-2% for primary keywords

### Image Requirements
- All images must have descriptive alt text
- Include location in alt text where relevant
- Use WebP format with JPEG fallbacks
- Optimize for mobile viewing
- Include schema markup for images

## Development Rules

### Component Development
1. **No Styling Changes:** Do not modify visual appearance unless explicitly requested
2. **Use Existing Components:** Utilize shadcn/ui components and existing style guide
3. **Semantic HTML:** Use proper HTML5 semantic elements
4. **Accessibility:** Include ARIA labels, proper contrast, keyboard navigation
5. **Mobile-First:** Design for mobile, enhance for desktop

### Performance Requirements
- Lazy load images below the fold
- Minimize JavaScript bundle size
- Use next/image for optimized image loading
- Implement proper caching headers
- Compress all assets

### SEO Implementation
- Include proper meta tags in head
- Implement structured data (JSON-LD)
- Use canonical URLs
- Include Open Graph and Twitter Card meta tags
- Generate XML sitemap

## Schema Markup Requirements

### LocalBusiness Schema
```json
{
  "@type": "RoofingContractor",
  "name": "Top Tier Roofing",
  "address": "1234 Roofing Way, Austin, TX 78701",
  "telephone": "(512) 555-ROOF",
  "areaServed": ["Austin", "Round Rock", "Cedar Park", "Pflugerville"],
  "priceRange": "$$"
}
```

### Service Schema
Include for each service offered with specific geographic areas.

### Review Schema
Implement for testimonials section with aggregate rating.

## Content Management
- All content should be easily editable
- Use constants file for reusable content
- Implement proper TypeScript interfaces
- Include comments for future developers

## Launch Checklist
- [ ] All components implemented with proper SEO
- [ ] Schema markup validated
- [ ] Images optimized and alt text added
- [ ] Mobile responsiveness tested
- [ ] Page speed optimized (<3 seconds)
- [ ] Contact forms functional
- [ ] Google Analytics/Search Console setup
- [ ] Local business listings updated

## Notes for Claude
- Follow these guidelines strictly
- Ask for clarification before making styling changes
- Focus on component functionality and SEO implementation
- Use the existing design system and shadcn components
- Prioritize performance and accessibility in all implementations