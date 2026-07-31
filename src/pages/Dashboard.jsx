import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Cloth from '../components/canvasui/Cloth';
import Droplets from '../components/canvasui/Droplets';
import ProjectAtmosphere from '../components/ProjectAtmosphere';

const domains = [
  {
    n: 'I',
    title: 'People',
    subtitle: 'Lead with clarity',
    gloss: 'Build teams, navigate conflict, coach performance, and keep stakeholders moving in the same direction.',
    weight: 42,
    progress: 65,
    path: '/principles',
    image: '/art/domain-people-tree.jpg',
    wisdom: 'Roots before reach.',
    lesson: 'Trust carries what authority cannot.',
  },
  {
    n: 'II',
    title: 'Process',
    subtitle: 'Shape the work',
    gloss: 'Choose the right delivery approach, manage uncertainty, and turn plans into measurable outcomes.',
    weight: 50,
    progress: 45,
    path: '/domains',
    image: '/art/domain-process-mountain.jpg',
    wisdom: 'The terrain chooses the path.',
    lesson: 'Method bends; accountability does not.',
  },
  {
    n: 'III',
    title: 'Business Environment',
    subtitle: 'Deliver the value',
    gloss: 'Connect the project to strategy, compliance, benefits, and the change it exists to create.',
    weight: 8,
    progress: 30,
    path: '/models-methods',
    image: '/art/domain-business-fish-card-v3.jpg',
    captionPosition: 'top',
    wisdom: 'Movement is not value.',
    lesson: 'The work matters when its benefit arrives.',
  },
];

const Dashboard = () => (
  <div>
    <section className="pmp-hero">
      <ProjectAtmosphere />
      <div className="pmp-hero-grid">
        <div className="pmp-hero-copy">
          <div className="pmp-eyebrow">
            <span>The Way of the Project</span>
            <span className="pmp-edition">07 / Edition</span>
          </div>

          <h1>Read the current. Shape the course.</h1>
          <p>
            A project, like water, gains power from direction—not force. Align the
            people, read the terrain, adapt the plan, and carry value to its destination.
          </p>

          <div className="pmp-hero-actions">
            <Link to="/domains" className="pmp-button-light">
              Enter the guide <ArrowRight size={15} />
            </Link>
            <Link to="/exam-prep" className="pmp-button-ghost">Prepare for the exam</Link>
          </div>

          <div className="pmp-weight-line" aria-label="Exam domain weights">
            {domains.map((domain) => (
              <div key={domain.n}>
                <span>{domain.title}</span>
                <strong>{domain.weight}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="pmp-cloth-stage">
          <div className="pmp-art-caption">
            <span>The river remembers every decision.</span>
            <span>Move through the rain</span>
          </div>
          <Droplets
            className="pmp-droplets"
            intensity={0.68}
            speed={0.5}
            scale={0.72}
            dropWidth={0.82}
            dropLength={1.05}
            refraction={0.24}
            blur={0.15}
            fallSpeed={0.58}
            wiggle={0.48}
            staticDrops={0.52}
            interactive
            interactionRadius={0.2}
            interactionStrength={0.78}
            interactionDistortion={2.4}
            tint={[0.76, 0.86, 0.94]}
            tintStrength={0.18}
          >
            <Cloth
              className="pmp-cloth"
              pin="left"
              wind={1.35}
              speed={0.38}
              amplitude={18}
              drape={28}
              brush={1.25}
              brushSize={180}
              damping={1.3}
              light={0.62}
              sheen={0.08}
              shadow={0.42}
              cornerRadius={3}
              perspective={1450}
            >
              <img
                src="/art/pmp-journey.jpg"
                alt="Three project paths converging at a luminous pavilion"
                className="pmp-journey-art"
              />
            </Cloth>
            <blockquote className="pmp-wisdom-card">
              <span>A project meditation</span>
              <p>Purpose is the riverbed.</p>
              <small>Plans may bend; value must still arrive.</small>
            </blockquote>
          </Droplets>
        </div>
      </div>
      <div className="pmp-scroll-mark" aria-hidden="true"><span /> Explore the manual</div>
    </section>

    <section className="pmp-intro">
      <div>
        <span className="numeral text-sm font-semibold">§ 01</span>
        <p className="label mt-3">The examination landscape</p>
      </div>
      <div>
        <h2>Study the system, not a stack of facts.</h2>
        <p>
          The exam rewards judgment: what to do next, whom to involve, and which
          delivery path fits the work. This manual makes those relationships visible.
        </p>
      </div>
    </section>

    <section className="pmp-domains">
      <div className="pmp-section-heading">
        <div>
          <span className="label">Your learning path</span>
          <h2>Three domains. One practice.</h2>
        </div>
        <p>Follow the exam weight, or begin where your judgment needs the most work.</p>
      </div>

      <ol className="pmp-domain-list">
        {domains.map((domain) => (
          <li key={domain.n}>
            <Link to={domain.path} className="pmp-domain-card">
              <span className="pmp-domain-number">{domain.n}</span>
              <div className="pmp-domain-copy">
                <span>{domain.subtitle}</span>
                <h3>{domain.title}</h3>
                <p>{domain.gloss}</p>
              </div>
              <figure className={`pmp-domain-visual ${domain.captionPosition === 'top' ? 'pmp-domain-visual-caption-top' : ''}`}>
                <img
                  src={domain.image}
                  alt=""
                  loading="lazy"
                  style={{ objectPosition: domain.imagePosition || 'center' }}
                />
                <figcaption>
                  <span>{domain.wisdom}</span>
                  <small>{domain.lesson}</small>
                </figcaption>
              </figure>
              <div className="pmp-domain-metric">
                <span>Exam weight</span>
                <strong>{domain.weight}<small>%</small></strong>
              </div>
              <div className="pmp-domain-progress">
                <div><span>Studied</span><strong>{domain.progress}%</strong></div>
                <i><b style={{ width: `${domain.progress}%` }} /></i>
                <span className="pmp-domain-link">Open chapter <ArrowRight size={14} /></span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  </div>
);

export default Dashboard;
