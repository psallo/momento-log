import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ─── Scroll animation hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'How It Works', href: '#howitworks' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          <span className="nav__logo-pin">📍</span>
          <span>Momento Log</span>
        </a>
        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#download" className="nav__cta" onClick={() => setMenuOpen(false)}>
              Download
            </a>
          </li>
        </ul>
        <button
          className={`nav__hamburger ${menuOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-glow" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">📍 Now Available on iOS</div>
          <h1 className="hero__title">
            Your Memories<br />
            <span className="hero__title-accent">Deserve a Second Chance</span>
          </h1>
          <p className="hero__desc">
            Momento Log remembers what you forget — and brings it back exactly
            when you return to the places that matter most.
          </p>
          <div className="hero__actions">
            <a href="#download" className="btn btn--primary btn--lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a href="#features" className="btn btn--ghost btn--lg">Explore Features ↓</a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><strong>4</strong><span>Languages</span></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><strong>iOS</strong><span>App</span></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><strong>100%</strong><span>Private</span></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><strong>AI</strong><span>Powered</span></div>
          </div>
        </div>
        <div className="hero__visual">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

/* ─── Phone Mockup ─── */
function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone__frame">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="phone__map">
            <div className="phone__map-grid" />
            <div className="phone__pin phone__pin--1">
              <span>📍</span>
              <div className="phone__pin-card">
                <div className="phone__pin-emoji">🍜</div>
                <div className="phone__pin-text">Hidden ramen spot</div>
              </div>
            </div>
            <div className="phone__pin phone__pin--2">
              <span>📍</span>
              <div className="phone__pin-card phone__pin-card--right">
                <div className="phone__pin-emoji">☕</div>
                <div className="phone__pin-text">Perfect café corner</div>
              </div>
            </div>
            <div className="phone__pin phone__pin--3">
              <span>📍</span>
              <div className="phone__pin-card">
                <div className="phone__pin-emoji">🅿️</div>
                <div className="phone__pin-text">Free parking!</div>
              </div>
            </div>
          </div>
          <div className="phone__notification">
            <div className="phone__notif-icon">📍</div>
            <div className="phone__notif-text">
              <strong>Momento Log</strong>
              <span>You're near your saved ramen spot!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="phone__glow" />
    </div>
  )
}

/* ─── Features ─── */
const FEATURES = [
  {
    icon: '📍',
    title: 'Location-Triggered Memories',
    desc: 'Save a thought once — let the place do the rest. When you step back into range, your memory surfaces automatically. No searching, no scrolling.',
    accent: '#6366f1',
  },
  {
    icon: '🎙️',
    title: 'AI Voice Analysis',
    desc: 'Speak naturally. Our AI transcribes your recording, suggests a title, and picks the right category — so capturing an idea takes seconds, not minutes.',
    accent: '#8b5cf6',
  },
  {
    icon: '🗺️',
    title: 'Map & List Views',
    desc: 'See every memory pinned on the map, or browse chronologically by list. Your personal city of memories, always at your fingertips.',
    accent: '#06b6d4',
  },
  {
    icon: '📷',
    title: 'Photo Memories',
    desc: 'Words sometimes fall short. Attach up to 5 photos per memory — the view from that rooftop, the dish that changed your life, the sign you almost walked past.',
    accent: '#10b981',
  },
  {
    icon: '🔔',
    title: 'Smart Geofence',
    desc: 'Customize your notification radius from 100m to 1.5km. Whether it\'s a single café or an entire neighborhood — you decide when memories wake up.',
    accent: '#f59e0b',
  },
  {
    icon: '🔒',
    title: 'Private by Design',
    desc: 'Everything lives on your device. No account required, no cloud sync, no tracking. Your memories belong to you — and only you.',
    accent: '#ef4444',
  },
]

function Features() {
  return (
    <section className="section section--light" id="features">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Features</div>
          <h2 className="section-title">Everything you need to never forget again</h2>
          <p className="section-desc">
            Momento Log combines smart location technology with AI to make memory capture effortless.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card reveal" key={f.title} style={{ '--delay': `${i * 0.08}s` }}>
              <div className="feature-card__icon" style={{ '--accent': f.accent }}>
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Use Cases ─── */
const USE_CASES = [
  {
    emoji: '🍽️',
    title: 'Restaurant Discoveries',
    scenario: '"I found a perfect ramen spot down that narrow alley."',
    detail: 'Save it. Add a photo. Leave a voice note about what made it special. The next time you\'re in the neighborhood, Momento Log will remind you it exists — even if you\'d completely forgotten.',
    color: '#fff4e6',
    accent: '#f59e0b',
  },
  {
    emoji: '🅿️',
    title: 'Smart Parking',
    scenario: '"There\'s always free parking behind that grocery store."',
    detail: 'Drop a pin with a quick note. Never circle the block again. Those little shortcuts you discover once and then desperately try to remember — now they stay with you forever.',
    color: '#eef2ff',
    accent: '#6366f1',
  },
  {
    emoji: '✈️',
    title: 'Travel Gems',
    scenario: '"That viewpoint at sunset was absolutely breathtaking."',
    detail: 'Travel memories fade fast. Save the café where you wrote your journal, the market stall with handmade crafts, the beach path nobody else knew about. Relive them on your next visit.',
    color: '#ecfdf5',
    accent: '#10b981',
  },
  {
    emoji: '🏥',
    title: 'Life Tips & Local Knowledge',
    scenario: '"The pharmacist at this branch actually explains everything."',
    detail: 'The quiet corner of the park that\'s always empty. The shortcut that saves 10 minutes. The ATM with no fees. Your personal city guide — built from your own experience.',
    color: '#fef2f2',
    accent: '#ef4444',
  },
  {
    emoji: '🛍️',
    title: 'Shopping Spots',
    scenario: '"This boutique has pieces you won\'t find anywhere else."',
    detail: 'Pop-ups, seasonal markets, that one hardware store that stocks everything — save them before they slip your mind. Building your own curated shopping map has never been easier.',
    color: '#f0fdf4',
    accent: '#22c55e',
  },
  {
    emoji: '💡',
    title: 'Personal Milestones',
    scenario: '"This is the bench where I made the decision to change everything."',
    detail: 'Not every memory is practical. Some places hold moments that shaped you. Mark them, leave yourself a message, and revisit the feeling whenever you pass by.',
    color: '#faf5ff',
    accent: '#8b5cf6',
  },
]

function UseCases() {
  return (
    <section className="section section--dark" id="usecases">
      <div className="container">
        <div className="section-header section-header--dark reveal">
          <div className="section-badge section-badge--dark">Use Cases</div>
          <h2 className="section-title section-title--light">Every place has a story worth keeping</h2>
          <p className="section-desc section-desc--light">
            Momento Log fits into every part of your life — from daily commutes to once-in-a-lifetime travels.
          </p>
        </div>
        <div className="usecases-grid">
          {USE_CASES.map((uc, i) => (
            <div
              className="usecase-card reveal"
              key={uc.title}
              style={{ '--delay': `${i * 0.07}s`, '--card-bg': uc.color, '--card-accent': uc.accent }}
            >
              <div className="usecase-card__emoji">{uc.emoji}</div>
              <h3 className="usecase-card__title">{uc.title}</h3>
              <p className="usecase-card__scenario">{uc.scenario}</p>
              <p className="usecase-card__detail">{uc.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
const STEPS = [
  {
    num: '01',
    icon: '✏️',
    title: 'Save a Memory',
    desc: 'At any location, tap to create a memory. Write notes, record your voice, or snap photos — whatever captures the moment best.',
  },
  {
    num: '02',
    icon: '📡',
    title: 'Set Your Zone',
    desc: 'Choose a notification radius — from 100m for a specific café to 1.5km for an entire district. You control when the memory activates.',
  },
  {
    num: '03',
    icon: '✨',
    title: 'Rediscover',
    desc: 'Walk back into range and Momento Log quietly surfaces your memory. No searching. No effort. Just the right memory at the right moment.',
  },
]

function HowItWorks() {
  return (
    <section className="section section--light" id="howitworks">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">How It Works</div>
          <h2 className="section-title">Simple to save. Magical to rediscover.</h2>
        </div>
        <div className="steps">
          {STEPS.map((step, i) => (
            <div className="step reveal" key={step.num} style={{ '--delay': `${i * 0.15}s` }}>
              <div className="step__connector" />
              <div className="step__num">{step.num}</div>
              <div className="step__icon">{step.icon}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Emotional Section ─── */
function EmotionalSection() {
  return (
    <section className="emotional">
      <div className="emotional__bg" />
      <div className="container">
        <div className="emotional__inner reveal">
          <div className="emotional__quote">"</div>
          <h2 className="emotional__title">
            How many perfect moments<br />have you already lost to time?
          </h2>
          <p className="emotional__body">
            The restaurant you meant to return to but never found again. The shortcut
            you discovered on a rainy Tuesday. The view that stopped you in your tracks.
            The parking spot that saved your afternoon.
          </p>
          <p className="emotional__body">
            These moments happen every day — and every day, most of them vanish.
            Not because they weren't worth keeping, but because we never had a way to hold onto them.
          </p>
          <p className="emotional__emphasis">
            Momento Log is that way.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section className="section section--light" id="pricing">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-badge">Pricing</div>
          <h2 className="section-title">Start free. Go unlimited.</h2>
          <p className="section-desc">
            Momento Log is free to download with all core features. Upgrade to Premium for unlimited memories and AI-powered voice analysis.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card reveal">
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Free</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$0</span>
              </div>
              <p className="pricing-card__note">Forever free</p>
            </div>
            <ul className="pricing-card__features">
              <li><span className="check check--on">✓</span> Up to 10 memories</li>
              <li><span className="check check--on">✓</span> Location-triggered notifications</li>
              <li><span className="check check--on">✓</span> Photo attachments</li>
              <li><span className="check check--on">✓</span> Map & list views</li>
              <li><span className="check check--on">✓</span> 4 languages</li>
              <li><span className="check check--off">✗</span> AI voice analysis</li>
              <li><span className="check check--off">✗</span> Unlimited memories</li>
            </ul>
            <a href="#download" className="btn btn--outline btn--full">Get Started Free</a>
          </div>

          <div className="pricing-card pricing-card--premium reveal" style={{ '--delay': '0.1s' }}>
            <div className="pricing-card__badge">Most Popular</div>
            <div className="pricing-card__header">
              <h3 className="pricing-card__name">Premium</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">$2.99</span>
                <span className="pricing-card__period">/month</span>
              </div>
              <p className="pricing-card__note">or $25.00/year · save 30%</p>
            </div>
            <ul className="pricing-card__features">
              <li><span className="check check--on">✓</span> <strong>Unlimited memories</strong></li>
              <li><span className="check check--on">✓</span> Location-triggered notifications</li>
              <li><span className="check check--on">✓</span> Photo attachments</li>
              <li><span className="check check--on">✓</span> Map & list views</li>
              <li><span className="check check--on">✓</span> 4 languages</li>
              <li><span className="check check--on">✓</span> <strong>AI voice transcription</strong></li>
              <li><span className="check check--on">✓</span> <strong>AI title & category suggestions</strong></li>
            </ul>
            <a href="#download" className="btn btn--primary btn--full">Start with Premium</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Download CTA ─── */
function DownloadCTA() {
  return (
    <section className="download" id="download">
      <div className="download__bg" />
      <div className="container">
        <div className="download__inner reveal">
          <h2 className="download__title">Start remembering more, starting today.</h2>
          <p className="download__desc">
            Free to download. No account needed. Your first 10 memories are on us.
          </p>
          <div className="download__actions">
            <a
              href="https://apps.apple.com"
              className="btn btn--white btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
          </div>
          <p className="download__fine">iOS 16+ · Free · No account required</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">📍 Momento Log</span>
            <p className="footer__tagline">Your places remember for you.</p>
          </div>
          <div className="footer__links">
            <a href="#features">Features</a>
            <a href="#usecases">Use Cases</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Momento Log. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─── */
export default function App() {
  useScrollReveal()
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <EmotionalSection />
      <Pricing />
      <DownloadCTA />
      <Footer />
    </div>
  )
}
