'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  ProjectsSection,
  WorkSection,
} from './sections'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const KNOWN_VIEWS = ['home', 'about', 'work', 'projects', 'certifications', 'contact']

const TYPE_LINES = [
  'Building AI systems that create leverage',
  'Building intelligent systems with LLMs',
  'Turning AI ideas into useful products',
]

export function Portfolio() {
  const [view, setView] = useState('home')
  const [dark, setDark] = useState(false)
  const [typed, setTyped] = useState('')

  // Hash-based routing (kept from the original single-page portfolio)
  useEffect(() => {
    const route = () => {
      const id = window.location.hash.slice(1) || 'home'
      setView(KNOWN_VIEWS.includes(id) ? id : 'home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', route)
    route()
    return () => window.removeEventListener('hashchange', route)
  }, [])

  // Typewriter effect
  const typeState = useRef({ li: 0, ci: 0, deleting: false })
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const s = typeState.current
      const current = TYPE_LINES[s.li]
      setTyped(current.slice(0, s.ci))

      if (!s.deleting) {
        s.ci++
        if (s.ci > current.length) {
          s.deleting = true
          timer = setTimeout(tick, 1200)
          return
        }
      } else {
        s.ci--
        if (s.ci === 0) {
          s.deleting = false
          s.li = (s.li + 1) % TYPE_LINES.length
        }
      }
      timer = setTimeout(tick, s.deleting ? 42 : 72)
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  const navigate = useCallback((id: string) => {
    window.location.hash = id
  }, [])

  const sparkle = useCallback((e: React.MouseEvent) => {
    const glyphs = ['✦', '✧', '·']
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('span')
      el.className = 'spark'
      el.textContent = glyphs[i % 3]
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      const angle = Math.random() * Math.PI * 2
      const distance = 45 + Math.random() * 110
      el.style.setProperty('--x', Math.cos(angle) * distance + 'px')
      el.style.setProperty('--y', Math.sin(angle) * distance + 'px')
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 900)
    }
  }, [])

  return (
    <div className={`site${dark ? ' dark' : ''}`}>
      <header>
        <div className="wrap">
          <nav>
            <button
              className="brand"
              onClick={() => navigate('home')}
              style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0 }}
            >
              Merin Anna Philip<i>.</i>
            </button>

            <div className="links">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  className={view === n.id ? 'active' : undefined}
                  onClick={() => navigate(n.id)}
                >
                  {n.label}
                </button>
              ))}
            </div>

            <div className="navRight">
              <button
                className="pill theme"
                aria-label="Toggle theme"
                onClick={() => setDark((d) => !d)}
              >
                {dark ? '☀' : '☾'}
              </button>
              <button className="pill talk" onClick={() => navigate('contact')}>
                Let&apos;s talk ↗
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* HOME — the Paris skyline art appears only here, behind the hero content */}
        <section className={`view${view === 'home' ? ' active' : ''}`} id="home">
          <div className="hero">
            <div className="heroInner wrap">
              <div className="tinyLine" />
              <div className="hello">Hello, I&apos;m</div>

              <h1>
                <span className="name" onClick={sparkle}>
                  Merin Anna Philip
                </span>
              </h1>

              <div className="roles">
                AI Engineer <span>|</span> Builder <span>|</span> Developer <span>|</span> Problem
                Solver
              </div>

              <div className="typing">{typed}</div>

              <button className="meet" onClick={() => navigate('about')}>
                Meet me ↓
              </button>
            </div>
          </div>
        </section>

        <AboutSection active={view === 'about'} />
        <WorkSection active={view === 'work'} />
        <ProjectsSection active={view === 'projects'} />
        <CertificationsSection active={view === 'certifications'} />
        <ContactSection active={view === 'contact'} />
      </main>

      <footer>
        <div className="wrap foot">
          <small>© 2026 Merin Anna Philip ♥ · Built with ♥ and a lot of coffee.</small>

          <div className="socials">
            <a
              className="social"
              href="https://www.linkedin.com/in/merinannaphilip75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              className="social"
              href="https://github.com/Merinphilip757"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              className="social"
              href="mailto:merinphilip7575@email.com"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
