import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFrame } from "./site-frame";

export const metadata: Metadata = {
  title: "Designer & Product Builder",
  description:
    "Portfolio of Arshad Khan — industrial designer, AI product builder, and creator of Imposter Arcade.",
};

const capabilities = [
  ["01", "Product thinking", "Turning fuzzy ideas into focused, testable experiences."],
  ["02", "Human-centered systems", "Designing flows that feel clear, calm, and useful."],
  ["03", "AI & rapid prototypes", "Building working MVPs to learn from real interactions."],
  ["04", "Launch & improve", "Testing edge cases, refining details, and shipping with intent."],
];

export default function Home() {
  return (
    <SiteFrame>
      <main>
        <section className="hero shell" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> INDUSTRIAL DESIGN · NIT ROURKELA</p>
            <h1>I design ideas into <span className="text-gradient glitch" data-text="experiences">experiences</span> people remember.</h1>
            <p className="hero-lede">
              I&apos;m Arshad Khan — a product builder exploring the space between human behavior,
              digital systems, AI, and play.
            </p>
            <div className="button-row">
              <Link className="button button-primary magnetic" href="/imposter-arcade">Explore flagship project <span>↗</span></Link>
              <a className="button button-ghost magnetic" href="#about">Meet the designer</a>
            </div>
            <div className="hero-stats" aria-label="Portfolio highlights">
              <div><strong>01</strong><span>Flagship game</span></div>
              <div><strong>02</strong><span>Featured products</span></div>
              <div><strong>100%</strong><span>Curiosity driven</span></div>
            </div>
          </div>
          <div className="portrait-wrap reveal delay-1">
            <div className="portrait-orbit" aria-hidden="true" />
            <Image className="portrait" src="/images/arshad-khan.jpg" alt="Arshad Khan" width={620} height={760} priority />
            <div className="portrait-tag"><span>PLAYER 01</span><strong>ARSHAD KHAN</strong></div>
            <span className="floating-code">DESIGN × BUILD</span>
          </div>
        </section>

        <section className="marquee-band" aria-label="Creative disciplines">
          <div>PRODUCT DESIGN <i>✦</i> CREATIVE TECHNOLOGY <i>✦</i> AI PROTOTYPING <i>✦</i> GAME EXPERIENCES <i>✦</i> PRODUCT DESIGN <i>✦</i> CREATIVE TECHNOLOGY</div>
        </section>

        <section className="section shell" id="work">
          <div className="section-heading reveal">
            <div><p className="eyebrow">{"// FEATURED WORK"}</p><h2>Projects with a pulse.</h2></div>
            <p>Two explorations of how thoughtful systems can change the way people gather, focus, and connect.</p>
          </div>

          <article className="flagship-card reveal tilt" data-achievement="Flagship project discovered">
            <div className="project-visual">
              <Image src="/images/imposter-feature-hero.png" alt="Friends playing Imposter Night through phones connected to a host laptop" fill sizes="(max-width: 900px) 100vw, 58vw" />
              <span className="project-number">PROJECT_01</span>
              <div className="scanline" aria-hidden="true" />
            </div>
            <div className="project-copy">
              <p className="eyebrow red">FLAGSHIP · VERSION 1.3</p>
              <h3>Imposter Arcade</h3>
              <p className="project-subtitle">Imposter Night — a room-sized social thriller.</p>
              <p>A portable offline party game where a laptop becomes the private narrator and every phone becomes a secret role controller. No internet. No installs. Just suspicion.</p>
              <div className="tag-row">
                <span>5–15 players</span><span>Offline LAN</span><span>Private roles</span><span>Windows host</span>
              </div>
              <div className="button-row compact">
                <Link className="button button-primary magnetic" href="/imposter-arcade">Enter the case study <span>↗</span></Link>
                <a className="text-link" href="/downloads/Imposter-Arcade-1.3-Final.zip" download data-download>Download Windows ZIP ↓</a>
              </div>
              <p className="microcopy">Players join in a mobile browser. The second word-deduction mode lives inside the full game.</p>
            </div>
          </article>

          <article className="northstar-card reveal tilt">
            <div className="northstar-copy">
              <p className="eyebrow cyan">PROJECT_02 · SECONDARY</p>
              <h3>Northstar</h3>
              <p className="project-subtitle">A calmer digital home.</p>
              <p>A human-centered productivity system designed to turn scattered plans into a connected rhythm for focus, reflection, and meaningful progress.</p>
              <div className="northstar-pillars">
                <span>Plan with intention</span><span>Focus and reset</span><span>One connected system</span>
              </div>
              <a className="button button-cyan magnetic" href="https://northstar-private-beta.terrific-beryllium.workers.dev/" target="_blank" rel="noreferrer">Visit Northstar beta <span>↗</span></a>
            </div>
            <div className="northstar-ui" aria-label="Abstract preview of the Northstar interface">
              <div className="ns-top"><span>northstar / today</span><i /></div>
              <div className="ns-grid">
                <div className="ns-sidebar"><b /><b /><b /><b /></div>
                <div className="ns-content"><p>Good morning, Arshad.</p><h4>What matters today?</h4><div className="ns-task active"><i /> Ship meaningful work <span>01</span></div><div className="ns-task"><i /> Reset and reflect <span>02</span></div><div className="ns-chart"><span /><span /><span /><span /><span /></div></div>
              </div>
            </div>
          </article>
        </section>

        <section className="section shell" id="skills">
          <div className="section-heading reveal">
            <div><p className="eyebrow">{"// HOW I WORK"}</p><h2>Thinking in systems. Building through play.</h2></div>
          </div>
          <div className="capability-grid">
            {capabilities.map(([number, title, body], index) => (
              <article className={`capability-card reveal delay-${(index % 3) + 1}`} key={title}>
                <span>{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell about" id="about">
          <div className="about-kicker reveal"><span>ABOUT_PLAYER_01</span><strong>AK</strong></div>
          <div className="about-copy reveal delay-1">
            <p className="eyebrow">{"// THE HUMAN BEHIND THE SCREEN"}</p>
            <h2>Curious by default.<br />Builder by choice.</h2>
            <p>I&apos;m an Industrial Design student at NIT Rourkela who likes moving between research, interface design, storytelling, and working software. I care about how a product feels before I care about how loudly it announces itself.</p>
            <p>My work starts with people, grows through prototypes, and gets sharper through real use.</p>
            <a className="text-link" href="mailto:arshadrabbanipune@gmail.com?subject=Project%20enquiry">Start a conversation ↗</a>
          </div>
        </section>

        <section className="cta-section shell reveal" id="contact">
          <p className="eyebrow">{"// READY FOR THE NEXT LEVEL?"}</p>
          <h2>Let&apos;s build something worth remembering.</h2>
          <a className="button button-primary magnetic" href="mailto:arshadrabbanipune@gmail.com?subject=Project%20enquiry">Enter my inbox <span>↗</span></a>
        </section>
      </main>
    </SiteFrame>
  );
}
