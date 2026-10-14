import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { company } from '../../data/company'

/**
 * Closing call to action. Defaults keep every existing usage unchanged;
 * the homepage passes its own heading, copy and primary button.
 */
function CtaBand({
  title = 'Ready to take your business forward?',
  description = `Talk to a ${company.name} expert today.`,
  primaryLabel = 'Get Started',
  primaryTo = '/contact',
  showPhone = true,
  id,
}) {
  return (
    <section className="cta-band" id={id}>
      <div className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="cta-band__actions">
          {showPhone ? (
            <a href={company.phoneHref} className="btn btn--ghost-light btn--lg">
              <Icon name="phone" size={17} />
              Talk to an Expert
            </a>
          ) : null}
          <Link to={primaryTo} className="btn btn--primary btn--lg">
            {primaryLabel}
            <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
