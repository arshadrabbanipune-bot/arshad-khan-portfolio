import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFrame } from "../site-frame";

export const metadata: Metadata = {
  title: "Imposter Arcade — Offline LAN Party Game",
  description: "The design and build story behind Imposter Night, a private-role party game that runs entirely on a local Wi-Fi network.",
  openGraph: { title: "IMPOSTER ARCADE", description: "Offline LAN party game by Arshad Khan", images: ["/og.png"] },
};

const setup = [
  ["Download and extract", "Download the complete ZIP on a Windows 10/11 laptop, then extract every file into one folder."],
  ["Create the room network", "There are two ways: either connect all players' phones to the host Windows laptop's hotspot, or connect the host Windows laptop and all phones to the same router. Internet access is not required."],
  ["Launch the host", "Run Imposter Arcade Host.exe. If Windows asks, allow access on Private networks so phones can reach the game."],
  ["Join from phones", "Players scan the QR code shown on the laptop or open its local address. Nothing is installed on their phones."],
  ["Test and begin", "Test the host audio, select Imposter Night, choose the settings, and start once everyone appears in the lobby."],
];

const rules = [
  ["01 / SECRET ROLES", "Nobody sees the whole truth", "For 5–15 players, the narrator privately assigns one Impostor and one Doctor. Their identities remain hidden until the game ends."],
  ["02 / NIGHT ACTION", "Fifteen silent seconds", "The Impostor privately chooses one player to eliminate. A gunshot plays only on the host after the choice—not on the role-holder's phone."],
  ["03 / DOCTOR ACTION", "One player can be saved", "The Doctor privately selects exactly one player. The Doctor cannot save everyone, and the Doctor's screen returns to the same neutral state as other players."],
  ["04 / DISCUSSION", "Make your case", "After the night result, the host starts a timed discussion. The final ten seconds tick down before time-up and the voting announcement."],
  ["05 / PRIVATE VOTE", "Vote or Skip", "Every living player votes privately during a visible three-minute limit. If everyone votes early, the result is announced immediately."],
  ["06 / RESTRICTED REVOTE", "A tie gets one sharper ballot", "A tied first ballot triggers a revote among the tied candidates. Players who chose Skip on the first ballot do not participate, and Skip is removed."],
];

export default function ImposterArcadePage() {
  return (
    <SiteFrame>
      <main>
        <section className="game-hero shell">
          <Link className="back-link" href="/">← RETURN TO PORTFOLIO</Link>
          <div className="game-title-row">
            <div className="reveal"><p className="eyebrow red">FLAGSHIP CASE STUDY · V1.3</p><h1>Imposter <span>Night</span></h1></div>
            <div className="game-intro-copy reveal delay-1">
              <p><strong>A laptop becomes the narrator. Every phone becomes a private controller.</strong> Imposter Night turns one room and one local Wi-Fi network into a tense social deduction game.</p>
              <div className="game-badges"><span>5–15 players</span><span>Offline LAN</span><span>No phone install</span><span>Windows host</span></div>
              <div className="button-row"><a className="button button-primary magnetic" href="/downloads/Imposter-Arcade-1.3-Final.zip" download data-download>Download for Windows ↓</a><a className="text-link" href="#setup">Setup guide</a></div>
            </div>
          </div>
          <div className="hero-media reveal">
            <Image src="/images/imposter-night-mode.png" alt="Original crimson masked Impostor, teal Doctor, and neutral Players in a moonlit game setting" fill priority sizes="(max-width: 900px) 100vw, 1180px" />
            <span className="mode-marker">PRIMARY_MODE // ONLINE: LOCAL</span>
          </div>
        </section>

        <nav className="game-nav" aria-label="Game page sections"><div className="shell"><a href="#story">01 Story</a><a href="#trailer">02 Teaser</a><a href="#setup">03 Setup</a><a href="#gameplay">04 Gameplay</a><a href="#second-mode">05 Second mode</a><a href="#faq">06 FAQ</a><a href="#download">07 Download</a></div></nav>

        <section className="case-section shell" id="story">
          <div className="case-grid">
            <aside className="case-sidebar reveal"><p className="eyebrow">{"// THE BRIEF"}</p><h2>Thrilling together.<br />Private by design.</h2></aside>
            <div className="case-content reveal delay-1"><p>I wanted the energy of a party game without accounts, app stores, or internet dependency. The difficult part was not drawing screens—it was coordinating secret information across many browsers while keeping the host authoritative, recovery predictable, and audio perfectly timed.</p><div className="fact-grid"><div className="fact"><span>Network</span><strong>Local Wi-Fi only</strong></div><div className="fact"><span>Player devices</span><strong>Any modern mobile browser</strong></div><div className="fact"><span>Host package</span><strong>Portable Windows ZIP</strong></div><div className="fact"><span>Core principle</span><strong>Roles stay private</strong></div></div></div>
          </div>
        </section>

        <section className="case-section shell" id="trailer">
          <div className="case-grid"><aside className="case-sidebar reveal"><p className="eyebrow">{"// SIGNAL FOUND"}</p><h2>A glimpse of the atmosphere.</h2></aside><div className="video-frame reveal delay-1"><video controls muted playsInline preload="metadata" poster="/images/imposter-feature-hero.png"><source src="/media/imposter-intro.mp4" type="video/mp4" />Your browser does not support this video.</video><div className="video-caption"><span>TEASER · MUTED BY DEFAULT</span><span>OUTRO REMAINS INSIDE THE GAME</span></div></div></div>
        </section>

        <section className="case-section shell" id="setup">
          <div className="case-grid"><aside className="case-sidebar reveal"><p className="eyebrow">{"// START A SESSION"}</p><h2>From ZIP to game night.</h2></aside><div className="steps">{setup.map(([title,copy])=><article className="step reveal" key={title}><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div>
        </section>

        <section className="case-section shell" id="gameplay">
          <div className="section-heading reveal"><div><p className="eyebrow">{"// HOW IMPOSTER NIGHT WORKS"}</p><h2>Trust nobody.<br />Watch everybody.</h2></div><p>Players may claim to be the Doctor, but only the private narrator knows who truly holds each role. Action countdowns stay silent on phones so nobody can identify a role by sound.</p></div>
          <div className="rules-grid">{rules.map(([label,title,copy])=><article className="rule reveal" key={label}><b>{label}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="case-section shell" id="second-mode">
          <article className="secondary-mode reveal"><div className="secondary-mode-image"><Image src="/images/find-the-imposter-mode.png" alt="Holographic clue cards surrounding a group during the secondary word-deduction mode" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="secondary-mode-copy"><p className="eyebrow cyan">SECONDARY MODE · STILL EVOLVING</p><h2>Find the Imposter</h2><p>A lighter word-deduction game for 3–15 players. Most players receive related private words while one person must blend in. Random clue turns lead into discussion and private voting.</p><p>The first ballot includes Skip; a tie creates a restricted no-Skip revote. Hosts can choose a single session or a multi-round match.</p><p className="microcopy">This mode stays secondary while development continues. Imposter Night is the flagship experience.</p></div></article>
        </section>

        <section className="case-section shell" id="faq">
          <div className="case-grid"><aside className="case-sidebar reveal"><p className="eyebrow">{"// SUPPORT LOG"}</p><h2>Questions before the room goes dark.</h2></aside><div className="faq reveal delay-1">
            <details><summary>Does the game need internet?</summary><p>No. The host and phones only need the same local Wi-Fi router or laptop hotspot. Internet access is unnecessary during play.</p></details>
            <details><summary>Do players download an app or ZIP?</summary><p>No. Only the Windows host receives the ZIP. Players scan the room QR code and use their existing mobile browser.</p></details>
            <details><summary>Why does Windows show a firewall prompt?</summary><p>The host must accept Private-network access so other devices on the room network can reach the local game server. Public-network access is not required.</p></details>
            <details><summary>What happens if a phone refreshes?</summary><p>The game uses reconnect information to restore an active player when possible. Rejoin promptly using the same browser and room address.</p></details>
            <details><summary>Can a MacBook host the current version?</summary><p>Not yet. Phones and Macs may join as browser players, but the current portable host package is built for 64-bit Windows 10/11.</p></details>
            <details><summary>What does the host laptop need?</summary><p>A 64-bit Windows 10/11 laptop, 4 GB RAM or more, a working Wi-Fi adapter, speakers, and roughly 150 MB of free space after extraction.</p></details>
          </div></div>
        </section>

        <section className="case-section shell" id="download">
          <div className="download-panel reveal"><div><p className="eyebrow red">WINDOWS BUILD · VERSION 1.3</p><h2>Bring the suspicion offline.</h2><p>Portable ZIP · approximately 49 MB · no Git, Node.js, account, or development tools required to run.</p></div><a className="button button-primary magnetic" href="/downloads/Imposter-Arcade-1.3-Final.zip" download data-download>Download game ZIP ↓</a></div>
        </section>
      </main>
    </SiteFrame>
  );
}
