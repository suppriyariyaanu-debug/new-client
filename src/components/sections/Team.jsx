import Avatar from '../ui/Avatar'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import { company, team, teamIntro } from '../../data/company'

/**
 * The team.
 *
 * Four across on desktop, two on tablet, a swipeable rail on phones. The
 * portrait frames are intentionally blank (photos removed at the client's
 * request).
 */
function Team({ id = 'team' }) {
  return (
    <section className="section section--paper" id={id}>
      <div className="container">
        <SectionHead
          eyebrow="Our Team"
          title={`The people behind ${company.name}`}
          description={teamIntro}
          center
        />

        <div className="team-grid">
          {team.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 70}>
              <Avatar />
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
