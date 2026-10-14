import { Link } from 'react-router-dom'
import { company } from '../../data/company'

/**
 * Brand logo — a typeset wordmark with an inline SVG mark.
 *
 * Rendered from `company.name` (src/config/brand.js), so renaming the brand
 * renames the logo everywhere with no image to redraw. When the client
 * supplies a final logo file, place it in src/assets/brand/ and swap the
 * <span className="logo__mark"> / logo__name pair for an <img>.
 *
 * Names such as "VyapaarSetu" are split at the first internal capital so the
 * second half can carry the accent colour ("Vyapaar" + "Setu").
 */
function splitName(name) {
  const match = name.match(/^([A-Z]?[a-z]+)([A-Z].*)$/)
  return match ? [match[1], match[2]] : [name, '']
}

function Mark() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="logo-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1464d2" />
          <stop offset="1" stopColor="#13a89e" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#logo-mark-gradient)" />
      <path
        d="M11 27.5 18.5 19l4.5 4.5L29.5 14"
        fill="none"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="29.5" cy="14" r="2.8" fill="#fff" />
    </svg>
  )
}

function Logo({ inverse = false, to = '/', interactive = true, size = 'md', className = '' }) {
  const classes = `logo logo--text${size !== 'md' ? ` logo--${size}` : ''}${
    inverse ? ' logo--inverse' : ''
  }${className ? ` ${className}` : ''}`

  const [first, second] = splitName(company.name)

  const content = (
    <>
      <span className="logo__mark">
        <Mark />
      </span>
      <span className="logo__text">
        <span className="logo__name">
          {first}
          {second ? <span className="logo__name-accent">{second}</span> : null}
        </span>
        <span className="logo__tagline">{company.tagline}</span>
      </span>
    </>
  )

  if (!interactive) {
    return (
      <span className={classes} role="img" aria-label={`${company.name} — ${company.tagline}`}>
        {content}
      </span>
    )
  }

  return (
    <Link to={to} className={classes} aria-label={`${company.name} — home`}>
      {content}
    </Link>
  )
}

export default Logo
