export function AboutSection({ active }: { active: boolean }) {
  return (
    <section className={`view${active ? ' active' : ''}`} id="about">
      <div className="wrap page">
        <div className="kicker">01 / Meet Me</div>
        <h2 className="title">A little about me.</h2>

        <p className="intro">
          I&apos;m interested in the space where AI ideas become useful systems — building, testing,
          debugging and learning along the way.
        </p>

        <div className="grid">
          <div className="card">
            <h3>About me</h3>
            <p>
              I&apos;m an AI Engineer focused on LLM applications, agentic workflows, RAG and backend
              AI engineering. I like taking an idea from &quot;what if?&quot; to something that
              actually works.
            </p>
          </div>

          <div className="card">
            <h3>What I&apos;m into</h3>
            <div className="tags">
              <span className="tag">AI Engineering</span>
              <span className="tag">LLMs</span>
              <span className="tag">Agentic AI</span>
              <span className="tag">RAG</span>
              <span className="tag">Python</span>
              <span className="tag">Backend</span>
              <span className="tag">Learning by building</span>
            </div>
          </div>
        </div>

        <div className="three" style={{ marginTop: 20 }}>
          <div className="card">
            <h3>Currently doing</h3>
            <p>Building AI systems and working on backend engineering with LLM powered workflows.</p>
          </div>

          <div className="card">
            <h3>Currently learning</h3>
            <p>
              Agentic systems, evaluation, reliability, production RAG and the engineering around AI
              applications.
            </p>
          </div>

          <div className="card">
            <h3>What I like</h3>
            <p>
              Building things, understanding why they fail, and turning messy ideas into clearer
              systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WorkSection({ active }: { active: boolean }) {
  return (
    <section className={`view${active ? ' active' : ''}`} id="work">
      <div className="wrap page">
        <div className="kicker">02 / Work</div>
        <h2 className="title">Work &amp; experience.</h2>

        <p className="intro">
          A look at what I&apos;ve worked on, what I&apos;ve learned, and how my focus has moved
          toward AI engineering.
        </p>

        <div className="list">
          <div className="item">
            <div className="date">Jun 2026 — Sep 2026</div>
            <div>
              <h3>Backend AI Engineer — Intern</h3>
              <p>
                FlyRank AI · Building and deploying backend AI systems, LLM-powered workflows, and API
                integrations for an AI-driven organic growth platform. Working with production-grade
                agentic AI architectures, REST APIs, and LLM orchestration frameworks as part of a US
                based engineering team.
              </p>
            </div>
            <div className="type">AI / Backend</div>
          </div>

          <div className="item">
            <div className="date">Jul 2026 — Aug 2026</div>
            <div>
              <h3>Data Storytelling Sprint Extern</h3>
              <p>
                Extern, Inc. in collaboration with PwC · Analyzed a 500 startup dataset on funding vs.
                profitability, presenting findings that funding size was essentially uncorrelated with
                profitability, challenging the &quot;bigger checks, better startups&quot; assumption.
                Delivered a data storytelling presentation using Flourish and Canva, paired with a
                narration script, to communicate findings to a non-technical audience.
              </p>
            </div>
            <div className="type">Data</div>
          </div>

          <div className="item">
            <div className="date">Jun 2025 — Jul 2025</div>
            <div>
              <h3>AI / Artificial Intelligence Intern</h3>
              <p>
                NoviTech R&amp;D Pvt Ltd · Designed and developed AI-driven solutions using machine
                learning techniques and Python for real-world datasets. Performed data preprocessing,
                feature engineering, and model tuning to improve model performance and accuracy. Built
                and evaluated classification and predictive models, contributing to scalable and
                efficient intelligent systems.
              </p>
            </div>
            <div className="type">AI / Data</div>
          </div>

          <div className="item">
            <div className="date">Jul 2024 — Aug 2025</div>
            <div>
              <h3>AI / Machine Learning &amp; Python Intern</h3>
              <p>
                RETECH Solutions Pvt Ltd · Built predictive machine learning models using scikit-learn,
                achieving strong accuracy on held out test sets. Applied feature engineering, data
                preprocessing, and model evaluation using accuracy, precision, and recall metrics.
                Collaborated with the team to test models for real world deployment scenarios,
                contributing to end-to-end ML pipelines.
              </p>
            </div>
            <div className="type">ML / Data</div>
          </div>
        </div>

        <div className="edu">
          <div className="kicker">Education</div>
          <div className="eduTitle">Where I studied.</div>

          <div className="card">
            <h3>B.Tech — Artificial Intelligence &amp; Data Science</h3>
            <p>Dhanalakshmi College of Engineering, Chennai · CGPA 8.4</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    num: 'PROJECT 01',
    title: 'Multi-Agent Research Assistant',
    body: 'A 4-agent LangGraph system for decomposing research topics, multi-step reasoning and report generation.',
    href: 'https://github.com/Merinphilip757/multi-agent-research-assistant',
  },
  {
    num: 'PROJECT 02',
    title: 'EstateIQ — AI Real Estate Agent',
    body: 'A multi-agent LangGraph system combining structured financial data with legal and market documents through RAG.',
    href: 'https://github.com/Merinphilip757/estateiq-ai-real-estate-agent',
  },
  {
    num: 'PROJECT 03',
    title: 'StockSense AI — Market Dashboard',
    body: 'A real-time Indian stock market intelligence dashboard delivering live NSE prices, candlestick/line charts with SMA/EMA overlays, and BUY/SELL signal logic. Includes ML powered next day price prediction via Linear Regression and a normalised multi stock comparison view.',
    href: 'https://github.com/Merinphilip757/StockSense-AI',
  },
  {
    num: 'PROJECT 04',
    title: 'Business Sales & Profit Dashboard',
    body: 'An interactive Excel dashboard analyzing 8,314 sales transactions ($1.93M revenue) across 49 US states. Features KPI summaries, monthly trend charts, category/sub category profit breakdowns, and dynamic slicers for Year, Month, Category, and State.',
    href: 'https://github.com/Merinphilip757/business-sales-profit-dashboard',
  },
  {
    num: 'PROJECT 05',
    title: 'Marico AI Sales Intelligence Agent',
    body: "An enterprise grade AI Sales Intelligence & Decision Support System built for Marico's FMCG commercial data combining forecasting, RPI optimization, ROI analysis, and distribution modeling into a natural language AI agent. Delivers predictive and prescriptive insights across sales, pricing, promotions, and retail activation through an interactive Streamlit dashboard.",
    href: 'https://github.com/Merinphilip757/marico-salesiq-agent',
  },
]

export function ProjectsSection({ active }: { active: boolean }) {
  return (
    <section className={`view${active ? ' active' : ''}`} id="projects">
      <div className="wrap page">
        <div className="kicker">03 / Projects</div>
        <h2 className="title">Things I&apos;ve built.</h2>

        <p className="intro">
          Projects that helped me move from learning concepts to engineering complete AI systems.
        </p>

        <div className="projects">
          {projects.map((p) => (
            <div className="card project" key={p.num}>
              <div className="num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                View project ↗
              </a>
            </div>
          ))}
        </div>

        <div className="big">
          <div className="kicker">Beyond the projects</div>
          <p>
            Every project is also a learning record: what broke, what I changed, what I understood
            better, and what I would build differently next time.
          </p>
        </div>
      </div>
    </section>
  )
}

export function CertificationsSection({ active }: { active: boolean }) {
  return (
    <section className={`view${active ? ' active' : ''}`} id="certifications">
      <div className="wrap page">
        <div className="kicker">04 / Certifications</div>
        <h2 className="title">Certified &amp; credentialed.</h2>

        <p className="intro">A snapshot of the credentials backing my technical work.</p>

        <div className="five">
          <div className="card">
            <h3>Microsoft — RAG-Based Solutions</h3>
            <p>
              Developed a RAG-based solution using Microsoft Foundry, covering MCP, LangChain, and
              multi-agent tooling.
            </p>
          </div>

          <div className="card">
            <h3>AWS — Generative AI with Diffusion Models</h3>
            <p>Applied generative AI techniques with diffusion models, Flask, and Python.</p>
          </div>

          <div className="card">
            <h3>AWS Academy Graduate — Cloud Foundations</h3>
            <p>Foundational certification in AWS cloud concepts and services.</p>
          </div>

          <div className="card">
            <h3>Master Data Management for Beginners</h3>
            <p>TCS iON certification covering Python and REST APIs.</p>
          </div>

          <div className="card">
            <h3>Accenture North America — Data Analytics &amp; Visualization Job Simulation</h3>
            <p>Forage job simulation covering Pandas, NumPy, and data visualization.</p>
          </div>
        </div>

        <div className="big">
          <div className="kicker">A small note</div>
          <p>
            Beyond the projects themselves, these certifications reflect a commitment to continuous
            learning and growth.
          </p>
        </div>
      </div>
    </section>
  )
}

export function ContactSection({ active }: { active: boolean }) {
  return (
    <section className={`view${active ? ' active' : ''}`} id="contact">
      <div className="wrap page contact">
        <div className="kicker">05 / Contact</div>
        <h2 className="title">Pick a way to say hi.</h2>

        <p className="intro">
          Have an interesting idea, project or opportunity? Drop a note or connect with me.
        </p>

        <div className="contactLinks">
          <a
            className="contactLink pink"
            href="https://www.linkedin.com/in/merinannaphilip75"
            target="_blank"
            rel="noopener noreferrer"
          >
            💗 LinkedIn
          </a>

          <a className="contactLink" href="mailto:merinphilip7575@email.com">
            💌 Drop a note
          </a>

          <a className="contactLink" href="mailto:merinphilip7575@email.com">
            💬 Chat
          </a>
        </div>
      </div>
    </section>
  )
}
