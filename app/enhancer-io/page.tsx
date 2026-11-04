import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFrame } from "../site-frame";

export const metadata: Metadata = {
  title: "Enhancer.io — Local Image & PDF Workspace",
  description: "How Arshad Khan built Enhancer.io: a Windows app for local image enhancement, wallpaper composition, PDF creation, compression and image conversion.",
  alternates: { canonical: "/enhancer-io" },
  openGraph: {
    title: "Enhancer.io — Your images. More possibilities.",
    description: "A local image and PDF workspace designed and built by Arshad Khan.",
    url: "/enhancer-io",
    images: [{ url: "/images/enhancer-workspace.webp", width: 1600, height: 1000, alt: "Enhancer.io running on Windows" }],
  },
};

const tools = [
  ["01", "Enhance & restore", "Local GPU enhancement with faithful restoration, optional creative detail, and blur reduction. Compare your original with the processed result before saving."],
  ["02", "Compose a wallpaper", "Keep the whole photo or choose a deliberate crop. Match your screen, preview the desktop, and export at your selected dimensions with padding when needed."],
  ["03", "Images to PDF", "Bring up to 32 images into one document. Arrange pages, choose size, orientation and margins, then name the PDF before downloading."],
  ["04", "Compress & convert", "Reduce image or PDF size with measured savings, or convert HEIC and common image formats to JPG, PNG, WebP or BMP. All processing stays on the device."],
];

const decisions = [
  ["See the result first", "The After preview stays empty until processing finishes. Original and processed desktop previews are stacked so the user can judge the change."],
  ["Make progress trustworthy", "The interface reports processing stages, supports cancellation and preserves the original when a job fails. Compression keeps the original when a candidate is larger."],
  ["Give quality a clear meaning", "Source resolution and upscaled dimensions are labelled separately. Exporting more pixels does not promise recovered detail, and library items retain their source and usage information."],
];

export default function EnhancerPage() {
  return <SiteFrame><main className="enhancer-case">
    <section className="eh-hero shell">
      <Link className="back-link" href="/#work">← RETURN TO FEATURED WORK</Link>
      <div className="eh-hero-grid">
        <div><p className="eyebrow eh-purple">PRODUCT CASE STUDY · WINDOWS V0.6.0</p><h1>Your images.<br /><span>More possibilities.</span></h1></div>
        <div className="eh-intro"><p className="eh-product-name">Enhancer.io</p><p>An image enhancer that grew into an everyday image and PDF workspace. Built around one idea: useful tools should feel simple, and personal files should stay on the user&apos;s device.</p><div className="tag-row"><span>Local GPU</span><span>Windows desktop</span><span>Image + PDF tools</span></div><a className="button eh-button" href="#workspace">Explore the workspace <span>↓</span></a></div>
      </div>
      <figure className="eh-hero-image"><Image src="/images/enhancer-workspace.webp" alt="Actual Enhancer.io Windows interface showing the local image workspace" width={1600} height={1000} sizes="(max-width: 900px) 100vw, 1180px" preload /><figcaption>ACTUAL APP CAPTURE <span>DESIGNED & BUILT BY ARSHAD KHAN</span></figcaption></figure>
      <dl className="eh-project-facts"><div><dt>My role</dt><dd>Product design & development</dd></div><div><dt>Platform</dt><dd>Windows + browser tools</dd></div><div><dt>Focus</dt><dd>Clarity, privacy & useful control</dd></div><div><dt>Built with</dt><dd>Electron · Next.js · TypeScript</dd></div></dl>
    </section>

    <section className="case-section shell" id="workspace"><div className="case-grid"><aside className="case-sidebar"><p className="eyebrow eh-purple">{"// THE STARTING POINT"}</p><h2>A photo should fit your life.</h2></aside><div className="case-content"><p>The project started with a frustrating wallpaper problem: a portrait image either left empty stripes on a wide screen or lost important content to a crop. The workflow needed to show those choices clearly and help people improve an image without losing control of it.</p><p>From there, I built a Windows app with local enhancement, original-versus-result previews, desktop composition, a curated image library and tools for the smaller file tasks people do every day.</p></div></div></section>

    <section className="case-section shell" id="capabilities"><div className="section-heading"><div><p className="eyebrow eh-purple">{"// ONE CONNECTED WORKSPACE"}</p><h2>From a better image<br />to a useful file.</h2></div><p>Enhancement is the starting point. Composition, conversion and document tools make the result easier to use.</p></div><div className="eh-tools-grid">{tools.map(([number,title,body])=><article className="eh-tool" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="case-section shell"><figure className="eh-screen"><Image src="/images/enhancer-file-tools.webp" alt="Enhancer.io file toolbox with Images to PDF, Compress and Image converter controls" width={1600} height={1000} sizes="(max-width: 900px) 100vw, 1180px" /><figcaption>THE FILE TOOLBOX <span>LOCAL PROCESSING · NO PAID API REQUIRED</span></figcaption></figure></section>

    <section className="case-section shell"><div className="case-grid"><aside className="case-sidebar"><p className="eyebrow eh-purple">{"// DESIGN DECISIONS"}</p><h2>Trust is part<br />of the interface.</h2></aside><div className="eh-decisions">{decisions.map(([title,body],index)=><article key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>

    <section className="case-section shell"><div className="case-grid"><aside className="case-sidebar"><p className="eyebrow eh-purple">{"// UNDER THE INTERFACE"}</p><h2>Built to work<br />on your device.</h2></aside><div className="case-content"><p>Electron brings the web interface to Windows. Native inference powers GPU enhancement; browser workers handle image conversion and document tasks. Files are processed locally, with bounded jobs, cleanup and cancellation.</p><p>PDF compression offers a structure-preserving path and an explicit image-only option. HEIC is supported as an input format. The app explains the trade-offs before changing a file rather than hiding them behind a single button.</p><div className="tag-row"><span>React</span><span>TypeScript</span><span>Electron</span><span>Real-ESRGAN</span><span>ONNX Runtime</span><span>PDF-LIB</span><span>PDF.js</span><span>libheif</span></div><p className="microcopy">Current build: Windows 64-bit, v0.6.0. Format and file-size limits apply. Enhancement quality depends on the source image; missing detail cannot always be recovered.</p></div></div></section>

    <section className="case-section shell" id="next"><div className="eh-closing"><div><p className="eyebrow eh-purple">{"// BUILT, TESTED, STILL EVOLVING"}</p><h2>Small improvements.<br />A bigger creative toolkit.</h2><p>My next focus is expanding useful image collections and refining everyday editing workflows around real feedback.</p></div><div className="eh-closing-actions"><a className="button eh-button" href="mailto:arshadrabbanipune@gmail.com?subject=Enhancer.io%20project%20enquiry">Ask about Enhancer.io <span>↗</span></a><Link className="text-link" href="/#work">Explore more work ↗</Link></div></div></section>
  </main></SiteFrame>;
}
