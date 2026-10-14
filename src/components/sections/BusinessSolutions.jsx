import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { businessTypes } from '../../data/growth'
import { getService } from '../../data/catalogue'

/**
 * "What Are You Planning to Build?"
 *
 * Five selectable business-type cards (an ARIA tab list). The selected card
 * opens a detail panel with what may apply to that business, links to the
 * relevant existing service pages, and a pre-filled enquiry flow
 * (/contact?plan=<id>).
 */
function BusinessSolutions({ id = 'business-solutions' }) {
  const baseId = useId()
  const [activeId, setActiveId] = useState(businessTypes[0].id)
  const panelRef = useRef(null)
  const active = businessTypes.find((type) => type.id === activeId) ?? businessTypes[0]

  // On small screens the panel sits below all five cards, so bring it into view.
  const select = (typeId) => {
    setActiveId(typeId)
    if (window.matchMedia('(max-width: 680px)').matches) {
      requestAnimationFrame(() =>
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      )
    }
  }

  const onKeyDown = (event) => {
    const index = businessTypes.findIndex((type) => type.id === activeId)
    let next = null
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % businessTypes.length
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp')
      next = (index - 1 + businessTypes.length) % businessTypes.length
    if (next === null) return
    event.preventDefault()
    setActiveId(businessTypes[next].id)
    document.getElementById(`${baseId}-tab-${businessTypes[next].id}`)?.focus()
  }

  return (
    <section className="section bs-section" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Business solutions"
          title="What Are You Planning to Build?"
          description="Choose your type of business to see the services that are typically relevant. We confirm what actually applies to you — requirements depend on your business, location and the applicable regulations."
          center
        />

        <div className="bs-cards" role="tablist" aria-label="Business types" onKeyDown={onKeyDown}>
          {businessTypes.map((type, index) => {
            const selected = type.id === activeId
            return (
              <Reveal key={type.id} delay={index * 60} className="bs-card-wrap">
                <button
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${type.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={`bs-card${selected ? ' is-active' : ''}`}
                  onClick={() => select(type.id)}
                >
                  <span className="bs-card__icon">
                    <Icon name={type.icon} size={24} />
                  </span>
                  <span className="bs-card__title">{type.title}</span>
                  <span className="bs-card__text">{type.short}</span>
                  <span className="bs-card__cta">
                    {selected ? 'Selected' : 'View solutions'}
                    <Icon name={selected ? 'chevronDown' : 'arrowRight'} size={15} />
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        <div
          className="bs-panel"
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active.id}`}
          key={active.id}
          ref={panelRef}
        >
          <div className="bs-panel__intro">
            <span className="bs-panel__icon">
              <Icon name={active.icon} size={26} />
            </span>
            <h3>{active.title}</h3>
            <p>{active.intro}</p>

            <h4 className="bs-panel__label">What you may need to consider</h4>
            <ul className="bs-panel__list">
              {active.considerations.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  {item}
                </li>
              ))}
            </ul>

            <p className="bs-panel__note">
              <Icon name="alertCircle" size={15} />
              Not every registration or licence is mandatory for every business. We help you
              identify what applies to yours.
            </p>

            <div className="bs-panel__actions">
              <Link to={`/contact?plan=${active.id}`} className="btn btn--primary">
                Get guidance for {active.title}
                <Icon name="arrowRight" size={17} />
              </Link>
            </div>
          </div>

          <div className="bs-panel__services">
            {active.groups.map((group) => {
              const services = group.services.map(getService).filter(Boolean)
              if (services.length === 0) return null
              return (
                <div className="bs-group" key={group.label}>
                  <h4>{group.label}</h4>
                  <ul>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link to={`/services/${service.slug}`}>
                          {service.name}
                          <Icon name="chevronRight" size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSolutions
