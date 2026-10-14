import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import SearchCommand from '../components/sections/SearchCommand'
import TrustStrip from '../components/sections/TrustStrip'
import BusinessSolutions from '../components/sections/BusinessSolutions'
import GrowthPartner from '../components/sections/GrowthPartner'
import JourneySteps from '../components/sections/JourneySteps'
import ServiceFinder from '../components/sections/ServiceFinder'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ServiceTabs from '../components/sections/ServiceTabs'
import ServiceRecommender from '../components/sections/ServiceRecommender'
import Testimonials from '../components/sections/Testimonials'
import Partners from '../components/sections/Partners'
import FaqSection from '../components/sections/FaqSection'
import CtaBand from '../components/sections/CtaBand'
import { getService } from '../data/catalogue'
import { company } from '../data/company'
import { stagePaths } from '../data/growth'

const quickLinks = ['gst', 'company', 'fssai', 'trademark', 'itr']

/**
 * Smooth-scrolls to an in-page section. Used instead of a plain #hash link so
 * the button works on every click, not only the first.
 */
function scrollToSection(event, id) {
  const target = document.getElementById(id)
  if (!target) return
  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}

function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="hero hero--growth">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">{company.tagline}</p>

            <h1>
              Your Business Journey.
              <span>Our Partnership.</span>
            </h1>

            <p className="hero__lede">
              From starting your business to managing compliance and exploring growth
              opportunities, we help you navigate every stage of your entrepreneurial journey.
            </p>

            <div className="hero__actions">
              <Link to="/services/category/start-business" className="btn btn--primary btn--lg">
                Start Your Business
                <Icon name="arrowRight" size={18} />
              </Link>
              <a
                href="#business-solutions"
                className="btn btn--outline btn--lg"
                onClick={(event) => scrollToSection(event, 'business-solutions')}
              >
                Explore Business Solutions
              </a>
            </div>

            <div className="hero__search">
              <SearchCommand />
              <div className="hero__quick">
                <span>Popular:</span>
                {quickLinks.map((slug) => {
                  const service = getService(slug)
                  if (!service) return null
                  return (
                    <Link key={slug} to={`/services/${slug}`} className="hero__quick-link">
                      {service.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right column: three quick paths by stage, each to a real category. */}
          <aside className="hero__brand hero__stages" aria-labelledby="hero-stages-title">
            <p className="hero__brand-label" id="hero-stages-title">
              Where are you today?
            </p>
            <ul className="stage-list">
              {stagePaths.map((path) => (
                <li key={path.to}>
                  <Link to={path.to} className="stage-link">
                    <span className="stage-link__icon">
                      <Icon name={path.icon} size={20} />
                    </span>
                    <span className="stage-link__body">
                      <strong>{path.label}</strong>
                      <span>{path.hint}</span>
                    </span>
                    <Icon name="arrowRight" size={16} className="stage-link__go" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hero__stages-foot">
              <p>Not sure? Tell us your idea and we will suggest the next steps.</p>
              <Link to="/contact?plan=start" className="link-arrow">
                Talk to us
                <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Only shown once the client supplies its own figures (config/brand.js). */}
      {company.show.stats ? <TrustStrip /> : null}

      <BusinessSolutions id="business-solutions" />
      <GrowthPartner />
      <JourneySteps />

      {/* Existing service catalogue, preserved. */}
      <ServiceFinder />
      <ServiceTabs id="solutions" />
      <ServiceRecommender />
      <WhyChooseUs />

      {company.show.testimonials ? <Testimonials /> : null}
      {company.show.partners ? <Partners /> : null}
      <FaqSection />

      <CtaBand
        id="get-started"
        title="Every Great Business Starts With the Right Partner."
        description="Tell us about your business idea. We'll help you explore the next steps."
        primaryLabel="Let's Grow Together"
        primaryTo="/contact?plan=grow"
      />
    </>
  )
}

export default Home
