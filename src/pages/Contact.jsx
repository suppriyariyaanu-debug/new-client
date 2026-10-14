import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import EnquiryForm from '../components/sections/EnquiryForm'
import { company } from '../data/company'
import { getService } from '../data/catalogue'
import { getEnquiryTopic } from '../data/growth'

function Contact() {
  // ?plan=<id> arrives from the homepage cards and CTAs; it pre-fills the form.
  const [params] = useSearchParams()
  const plan = params.get('plan')
  const topic = getEnquiryTopic(plan)
  const topicServices = topic ? topic.services.map(getService).filter(Boolean) : []

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <Icon name="chevronRight" size={13} />
            <span aria-current="page">Contact Us</span>
          </nav>

          <p className="eyebrow">Talk to an expert</p>
          <h1>
            Tell us what you
            <span> need help with</span>
          </h1>
          <p className="page-hero__lede">
            Share a few details and the right person will come back to you during business
            hours. Prefer to talk? Call us directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>

            {topic ? (
              <div className="contact-topic">
                <p className="contact-topic__label">You are enquiring about</p>
                <strong>{topic.title}</strong>
                {topicServices.length ? (
                  <>
                    <p>Services that are often relevant — we will confirm what applies to you:</p>
                    <ul className="contact-topic__chips">
                      {topicServices.map((service) => (
                        <li key={service.slug}>
                          <Link to={`/services/${service.slug}`}>{service.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            ) : null}

            <ul className="contact-list">
              <li>
                <span className="contact-list__icon">
                  <Icon name="phone" size={18} />
                </span>
                <div>
                  <strong>Phone</strong>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon">
                  <Icon name="mail" size={18} />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={company.emailHref}>{company.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon">
                  <Icon name="clock" size={18} />
                </span>
                <div>
                  <strong>Office hours</strong>
                  <span>{company.hours}</span>
                </div>
              </li>
              <li>
                <span className="contact-list__icon">
                  <Icon name="globe" size={18} />
                </span>
                <div>
                  <strong>Locations</strong>
                  <span>{company.locations.join(' · ')}</span>
                </div>
              </li>
            </ul>

            <div className="contact-note">
              <Icon name="checkCircle" size={17} />
              <p>
                We will confirm what applies to your business, the documents needed and the
                fee before any work begins.
              </p>
            </div>
          </div>

          <div className="enquiry-card">
            <header className="enquiry-card__head">
              <h2>Send an enquiry</h2>
              <p>Fields marked with an asterisk are required.</p>
            </header>
            <EnquiryForm
              key={plan || 'general'}
              topic={topic?.title}
              initialRequirement={topic?.requirement ?? ''}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
