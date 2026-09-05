"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function FollowDeveloper() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  return (
    <>
      <button className="follow-button" type="button" onClick={() => setOpen(true)}>
        Follow developer <span>↗</span>
      </button>
      {open && (
        <div className="follow-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section className="follow-dialog" role="dialog" aria-modal="true" aria-labelledby="follow-title">
            <button ref={closeRef} className="follow-close" type="button" onClick={() => setOpen(false)} aria-label="Close Instagram QR code">×</button>
            <p className="eyebrow">{"// FOLLOW THE BUILD"}</p>
            <h2 id="follow-title">Follow the developer</h2>
            <div className="follow-qr">
              <Image src="/images/instagram-qr-arshad19-x.jpg" alt="Instagram QR code for Arshad Khan, username arshad19__x" width={788} height={1314} priority={false} />
            </div>
            <strong>@ARSHAD19__X</strong>
            <p>Scan the QR code or open the profile to follow new projects and game updates.</p>
            <a className="button button-primary" href="https://www.instagram.com/arshad19__x/" target="_blank" rel="noreferrer">Open Instagram <span>↗</span></a>
          </section>
        </div>
      )}
    </>
  );
}
