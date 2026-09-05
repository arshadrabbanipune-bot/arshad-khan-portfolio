import Link from "next/link";
import { Experience } from "./experience";
import { FollowDeveloper } from "./follow-developer";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Experience />
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <nav className="shell nav" aria-label="Primary navigation">
          <Link className="logo" href="/" aria-label="Arshad Khan home"><span>AK</span><i>®</i></Link>
          <div className="nav-links">
            <Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/imposter-arcade">Game</Link><Link href="/#contact">Contact</Link>
          </div>
          <a className="nav-cta" href="mailto:arshadrabbanipune@gmail.com?subject=Project%20enquiry"><span className="status-dot" /> Available to build</a>
          <FollowDeveloper />
        </nav>
      </header>
      {children}
      <footer className="footer shell">
        <div><Link className="logo" href="/"><span>AK</span><i>®</i></Link><p>Designed and built with curiosity in India.</p></div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/arshad-khan-080231353/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/arshadrabbanipune-bot" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.instagram.com/arshad19__x/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://x.com/ArshadKhandc3w" target="_blank" rel="noreferrer">X ↗</a>
        </div>
        <p>© {new Date().getFullYear()} Arshad Khan</p>
      </footer>
    </>
  );
}
