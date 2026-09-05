import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("homepage preserves the portfolio and prioritizes the two featured projects", async () => {
  const page = await read("app/page.tsx");
  assert.match(page, /Industrial Design/);
  assert.match(page, /NIT Rourkela/);
  assert.match(page, /Imposter Arcade/);
  assert.match(page, /Imposter Night/);
  assert.match(page, /Northstar/);
  assert.ok(page.indexOf("Imposter Arcade") < page.indexOf("Northstar"));
  assert.doesNotMatch(page, /Find the Imposter/);
});

test("game guide documents the verified offline flow and privacy rules", async () => {
  const page = await read("app/imposter-arcade/page.tsx");
  for (const statement of [
    "5–15 players",
    "either connect all players' phones to the host Windows laptop's hotspot",
    "connect the host Windows laptop and all phones to the same router",
    "Internet access is not required",
    "Imposter Arcade Host.exe",
    "allow access on Private networks",
    "Nothing is installed on their phones",
    "exactly one player",
    "three-minute limit",
    "do not participate",
    "current portable host package is built for 64-bit Windows 10/11",
  ]) assert.match(page, new RegExp(statement.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  assert.match(page, /Find the Imposter/);
  assert.ok(page.indexOf("Imposter Night") < page.indexOf("Find the Imposter"));
  assert.match(page, /imposter-intro\.mp4/);
  assert.doesNotMatch(page, /outro\.mp4/);
});

test("original character direction avoids named third-party character designs", async () => {
  const source = (await Promise.all([read("app/page.tsx"), read("app/imposter-arcade/page.tsx"), read("app/globals.css")])).join("\n");
  assert.doesNotMatch(source, /Among Us|Squid Game/i);
  assert.match(source, /crimson masked Impostor, teal Doctor, and neutral Players/);
  assert.doesNotMatch(source, /They are not based on characters/);
});

test("follow developer control opens the supplied Instagram QR", async () => {
  const [frame, follow, styles] = await Promise.all([read("app/site-frame.tsx"), read("app/follow-developer.tsx"), read("app/globals.css")]);
  assert.match(frame, /<FollowDeveloper \/>/);
  assert.match(follow, /Follow developer/);
  assert.match(follow, /@ARSHAD19__X/);
  assert.match(follow, /instagram-qr-arshad19-x\.jpg/);
  assert.match(follow, /aria-modal="true"/);
  assert.match(styles, /\.follow-backdrop[^}]*height:100dvh/);
  assert.match(styles, /\.follow-backdrop[^}]*overflow-y:auto/);
  assert.match(styles, /\.follow-qr[^}]*aspect-ratio:1/);
  assert.match(styles, /\.follow-qr img[^}]*object-position:50% 34%/);
  await access(new URL("public/images/instagram-qr-arshad19-x.jpg", root));
});

test("all local portfolio and downloadable game assets exist", async () => {
  const paths = [
    "public/images/arshad-khan.jpg",
    "public/images/imposter-feature-hero.png",
    "public/images/imposter-night-mode.png",
    "public/images/find-the-imposter-mode.png",
    "public/media/imposter-intro.mp4",
    "public/downloads/Imposter-Arcade-1.3-Final.zip",
    "public/og.png",
  ];
  await Promise.all(paths.map((path) => access(new URL(path, root))));
  const zip = await stat(new URL("public/downloads/Imposter-Arcade-1.3-Final.zip", root));
  assert.ok(zip.size > 49_000_000 && zip.size < 55_000_000);
});
