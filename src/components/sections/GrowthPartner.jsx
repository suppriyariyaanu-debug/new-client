import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { growthPillars } from '../../data/growth'

/** "More Than Registrations. A Partner in Your Growth." */
function GrowthPartner({ id = 'growth-partner' }) {
  return (
    <section className="section section--paper gp-section" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Your growth partner"
          title="More Than Registrations. A Partner in Your Growth."
          description="Getting registered is one step. Building a business that runs smoothly and keeps growing takes the right support at every stage."
          center
        />

        <div className="gp-grid">
          {growthPillars.map((pillar, index) => (
            <Reveal className="gp-card" key={pillar.title} delay={index * 70}>
              <span className="gp-card__icon">
                <Icon name={pillar.icon} size={24} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GrowthPartner
