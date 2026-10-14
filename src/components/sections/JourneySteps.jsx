import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { journeySteps } from '../../data/growth'

/** The four-step business journey. Horizontal on desktop, stacked on mobile. */
function JourneySteps({ id = 'your-journey' }) {
  return (
    <section className="section js-section" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="How we work together"
          title="Your Business Journey, Step by Step"
          description="A clear, simple path from your first idea to a business you can focus on growing."
          center
        />

        <ol className="js-steps">
          {journeySteps.map((item, index) => (
            <Reveal as="li" className="js-step" key={item.step} delay={index * 80}>
              <div className="js-step__top">
                <span className="js-step__num" aria-hidden="true">
                  {item.step}
                </span>
                <span className="js-step__icon">
                  <Icon name={item.icon} size={22} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </ol>

        <div className="js-actions">
          <Link to="/contact?plan=start" className="btn btn--primary btn--lg">
            Tell Us Your Idea
            <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JourneySteps
