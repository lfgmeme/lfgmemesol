import { useState } from 'react'
import './index.css'

const GOLD = '#F0BF22'
const CA = 'Fh5fNaGMHQfencSGj83kyp26RrB3fCoYtYuLvXaRpump'

const ROADMAP = [
  { phase: 'PHASE 1', name: 'WAKE UP', done: true },
  { phase: 'PHASE 2', name: 'BAGWORK', done: true },
  { phase: 'PHASE 3', name: 'GET LOUD', done: false, active: true },
  { phase: 'PHASE 4', name: 'TAKE OVER', done: false, active: true },
  { phase: 'PHASE 5', name: 'ETERNAL MOON', done: false, active: true },
]

function useCopy(text, ms = 2000) {
  const [done, setDone] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setDone(true)
    setTimeout(() => setDone(false), ms)
  }
  return [done, copy]
}

const NAV_LINKS = [
  { label: 'THE LORE', href: '#lore' },
  { label: 'TOKENOMICS', href: '#tokenomics' },
  { label: 'ROADMAP', href: '#roadmap' },
  { label: 'MEME GALLERY', href: '#gallery' },
  { label: 'HOW TO BUY', href: '#howtobuy' },
]

// ─────────────────────────────────────────────────────────
// 1. Navbar
// ─────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(2,5,9,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(240,191,34,0.08)',
        height: 81,
      }}
    >
      {/* Desktop */}
      <div
        className="hidden lg:flex items-center justify-between h-full px-10 lg:px-20"
        style={{ maxWidth: 1440, margin: '0 auto' }}
      >
        <a href="#hero" className="flex items-center">
          <img src="/Container.svg" alt="LFG" style={{ width: 110, height: 48 }} />
        </a>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link uppercase text-white/70 hover:text-[#F0BF22] transition-colors whitespace-nowrap"
              style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 400, letterSpacing: '0.7px' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <a href="#" aria-label="Telegram"
            className="flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ width: 32, height: 32, opacity: 0.45 }}
          >
            <img src="/telegram.svg" alt="Telegram" width={20} height={20} />
          </a> */}
          <a href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
            className="flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ width: 32, height: 32, opacity: 0.45 }}
          >
            <img src="/x.svg" alt="X / Twitter" width={20} height={20} />
          </a>
          <a
            href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer"
            className="uppercase text-black hover:brightness-110 transition whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Finger Paint', cursive", fontSize: 14, background: GOLD, borderRadius: 100, padding: '8px 20px', textDecoration: 'none' }}
          >
            JOIN THE CULT
          </a>
        </div>
      </div>

      {/* Mobile header bar */}
      <div className="mob-px lg:hidden flex items-center justify-between h-full">
        <a href="#hero">
          <img src="/Container.svg" alt="LFG" style={{ width: 100, height: 44 }} />
        </a>
        <button
          className="flex items-center justify-center text-white cursor-pointer"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          style={{ width: 44, height: 44 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Full-screen menu */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideInRight 0.25s cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* background image */}
          <img
            src="/1%201.svg"
            alt=""
            aria-hidden="true"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', objectPosition: 'center top', zIndex: 0, pointerEvents: 'none' }}
          />

          {/* all content sits above the tint */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1 }}>

            {/* Header */}
            <div
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 20px', height: 72, borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '8px 0' }}>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 20px',
                    height: 64,
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    {l.label}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              ))}
            </nav>

            {/* Footer area */}
            <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <a
                  href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <img src="/x.svg" alt="X" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
                </a>
              </div>
              <a
                href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Finger Paint', cursive", fontSize: 13, color: '#000', background: GOLD, borderRadius: 100, height: 48, textDecoration: 'none', letterSpacing: '0.3px', textTransform: 'uppercase', cursor: 'pointer' }}
              >
                JOIN THE CULT
              </a>
            </div>

          </div>
        </div>
      )}
    </header>

  )
}

// ─────────────────────────────────────────────────────────
// 2. Hero
// ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="bg-s1 relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 81 }}
    >
      <div
        className="mob-px relative z-10 w-full flex items-center"
        style={{ maxWidth: 1440, margin: '0 auto', paddingTop: 48, paddingBottom: 100 }}
      >
        {/* Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full lg:w-auto" style={{ flex: '0 0 auto', maxWidth: 540 }}>
          <img
            src="/LFG.svg"
            alt="LFG"
            className="select-none"
            style={{
              width: 'clamp(240px, 72vw, 440px)',
              maxWidth: '100%',
              filter: `drop-shadow(0 0 40px rgba(240,191,34,0.55)) drop-shadow(0 0 90px rgba(240,191,34,0.2))`,
              marginBottom: 20,
            }}
            draggable={false}
          />

          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(22px, 5.5vw, 36px)',
              letterSpacing: '1.8px',
              color: '#fff',
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            BORN TO SCREAM. BUILT TO SEND.
          </p>

          <p
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 'clamp(17px, 3.8vw, 23px)',
              color: '#ffffff',
              marginBottom: 32,
              lineHeight: 1.6,
              maxWidth: 380,
            }}
          >
            This isn't just a coin. It's a movement. Join the cult of eternal moonflights.
          </p>

          {/* Buttons — stack on narrow, wrap on wider */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 w-full sm:w-auto">
            <a
              href="https://jup.ag/?sell=So11111111111111111111111111111111111111112&buy=Fh5fNaGMHQfencSGj83kyp26RrB3fCoYtYuLvXaRpump"
              target="_blank" rel="noopener noreferrer"
              className="uppercase hover:brightness-110 transition cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: "'Finger Paint', cursive", fontSize: 14, background: GOLD, color: '#000', borderRadius: 100, padding: '12px 28px', textDecoration: 'none', textAlign: 'center' }}
            >
              BUY NOW
            </a>
            <a
              href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer"
              className="uppercase transition cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: "'Finger Paint', cursive", fontSize: 14, color: GOLD, border: `1.5px solid ${GOLD}`, borderRadius: 100, padding: '12px 28px', textDecoration: 'none', textAlign: 'center' }}
            >
              JOIN THE CULT
            </a>
            <a
              href="https://dexscreener.com/solana/6paudmcr1otwv16uu7geswwi1fxeoiej2yumzugfu27g"
              target="_blank" rel="noopener noreferrer"
              className="uppercase flex items-center justify-center gap-2 transition hover:border-white/50 cursor-pointer w-full sm:w-auto"
              style={{ fontFamily: "'Finger Paint', cursive", fontSize: 14, color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 100, padding: '12px 24px', textDecoration: 'none' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              VIEW CHART
            </a>
          </div>
        </div>

        {/* Desktop fish */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          {/* outer: float up/down | inner: vibrate jitter */}
          <div className="float" style={{ lineHeight: 0 }}>
            <div className="fish-bump" style={{ lineHeight: 0 }}>
              <img
                src="/pppng 2.svg"
                alt="LFG Character"
                className="hero-char select-none vibrate fish-interactive"
                style={{ width: 'clamp(240px, 34vw, 480px)', filter: 'drop-shadow(0 0 60px rgba(240,191,34,0.3))' }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fish — larger + more visible */}
      <div
        className="lg:hidden flex justify-center float"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.55 }}
      >
        <div className="fish-bump" style={{ lineHeight: 0 }}>
          <img
            src="/pppng 2.svg"
            alt=""
            className="select-none vibrate fish-interactive"
            style={{ width: 'clamp(200px, 55vw, 300px)', filter: 'drop-shadow(0 0 30px rgba(240,191,34,0.3))' }}
            draggable={false}
          />
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #020509, transparent)' }}
      />
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 3. The Lore
// ─────────────────────────────────────────────────────────
function Lore() {
  return (
    <section id="lore" className="relative py-10 lg:py-12">
      <div className="mob-px" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          className="bg-s2 rounded-3xl text-center my-5"
          style={{
            border: '1px solid rgba(240,191,34,0.18)',
            backdropFilter: 'blur(10px)',
            padding: 'clamp(28px, 7vw, 56px) clamp(20px, 5vw, 64px)',
          }}
        >
          <h2
            style={{
              fontFamily: "'Finger Paint', cursive",
              fontSize: 'clamp(34px, 9vw, 60px)',
              letterSpacing: 'clamp(-1px, -0.04em, -3px)',
              color: '#fff',
              marginBottom: 24,
              lineHeight: 1,
            }}
          >
            THE <span style={{ color: GOLD }}>LORE</span>
          </h2>

          <p
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 'clamp(15px, 3.5vw, 18px)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.95,
              maxWidth: 560,
              margin: '0 auto 24px',
            }}
          >
            In the drama of the chain, a token was born. Not just any token — this battle cry of degens,
            dreamers, and moon chasers. LFG isn't $$$, it's a movement, unfiltered and unstoppable.
            We're here to dominate.
          </p>

          <p style={{ fontFamily: "'Finger Paint', cursive", fontSize: 'clamp(14px, 3.5vw, 18px)', color: GOLD }}>
            Zero promises. Dank vibes. Maximum chaos.
          </p>
          <img src="/favicon.svg" alt="icon" style={{ width: 32, height: 32, margin: '24px auto 0' }} />
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 4. Tokenomics
// ─────────────────────────────────────────────────────────
function Tokenomics() {
  const stats = [
    { value: '1B', label: 'TOTAL SUPPLY' },
    { value: '100%', label: 'LP BURNT' },
    { value: '0%', label: 'TAXES' },
    { value: '100%', label: 'COMMUNITY' },
  ]
  return (
    <section id="tokenomics" className="mob-px bg-s2 relative py-10 lg:py-12 mb-16 lg:mb-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #020509, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to top, #020509, transparent)' }} />

      <div className="relative z-10" style={{ maxWidth: 1280, margin: '20px auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 'clamp(28px, 8vw, 60px)',
            letterSpacing: 'clamp(-1px, -0.04em, -3px)',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 'clamp(32px, 7vw, 64px)',
          }}
        >
          TOKEN<span style={{ color: GOLD }}>OMICS</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map(s => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center p-5 lg:p-8"
              style={{
                background: 'rgba(11,16,32,0.2)',
                border: '1px solid rgba(240,191,34,0.2)',
                backdropFilter: 'blur(3px)',
                borderRadius: 16,
              }}
            >
              <span
                className="gold-glow"
                style={{
                  fontFamily: "'Finger Paint', cursive",
                  fontSize: 'clamp(28px, 6vw, 48px)',
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: 8,
                  display: 'block',
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 'clamp(12px, 2.5vw, 16px)',
                  color: '#99A1AF',
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <img src="/favicon.svg" alt="icon" style={{ width: 44, height: 44, margin: '40px auto 0', filter: 'drop-shadow(0 0 10px rgba(240,191,34,0.3))' }} />
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 5. Meme Gallery
// ─────────────────────────────────────────────────────────
const MEME_ICONS = ["3d-flip-thick.gif", "3d-flip.gif", "aflame.gif", "alarm.gif", "alarms.gif", "alert.gif", "anime-speed.gif", "banana-dance.gif", "beers.gif", "blankies.gif", "blaze.gif", "blink.gif", "bobble.gif", "boing.gif", "bonk-doge.gif", "bonk.gif", "boom.gif", "bounce.gif", "box.gif", "breaking-news.gif", "breathe.gif", "bubble.gif", "bulge.gif", "burn.gif", "butterfly.gif", "cat-slap.gif", "clone-army.gif", "combust.gif", "cube.gif", "cute-hop.gif", "ddr.gif", "deal-with-it.gif", "depth-tilt.gif", "double-roll.gif", "drift.gif", "drop-bounce.gif", "drop.gif", "earthquake.gif", "elastic-corner-pinch.gif", "elastic.gif", "electricity.gif", "excited.gif", "excuse-me.gif", "explode.gif", "figure-8.gif", "fire-frame.gif", "fire-pixel.gif", "fireplace.gif", "fireworks.gif", "flag-wave.gif", "flame.gif", "flick.gif", "fling.gif", "flip.gif", "flutter.gif", "fps.gif", "gigachad.gif", "gitchroll.gif", "glitch-out.gif", "glitch.gif", "glitching.gif", "glitchwave.gif", "glitchy.gif", "gravity-flip.gif", "grayscale.gif", "gulp.gif", "headbop.gif", "heart-hypno.gif", "heart-locket.gif", "heartbeat-flash.gif", "heartbeat.gif", "heat-haze.gif", "hologram.gif", "hop.gif", "hovering.gif", "hype-jam.gif", "hype-shake.gif", "hype.gif", "hyperspace.gif", "hypnotize.gif", "intensifies.gif", "jail.gif", "jam.gif", "jammies.gif", "jiggle.gif", "jitter.gif", "ken-burns.gif", "laser-eyes.gif", "lean.gif", "leap.gif", "lick.gif", "lightning-flash.gif", "lightning.gif", "loading-eight.gif", "loading-five.gif", "loading-four.gif", "loading-nine.gif", "loading-seven.gif", "loading-six.gif", "loading-three.gif", "loading-two.gif", "loading.gif", "lurk.gif", "magnet.gif", "math.gif", "matrix-rain.gif", "mc-fire.gif", "mega-bounce.gif", "melt.gif", "misalign.gif", "mitosis.gif", "music.gif", "negative-blink.gif", "nod.gif", "nodders.gif", "nyan-cat.gif", "old-man-yells.gif", "on-fire.gif", "orbit-drift.gif", "orbit-eight.gif", "orbit-five.gif", "orbit-four.gif", "orbit-nine.gif", "orbit-seven.gif", "orbit-six.gif", "orbit-three.gif", "orbit-two.gif", "orbit.gif", "origami-fold.gif", "pace.gif", "panic.gif", "party-blob.gif", "party-parrot.gif", "party.gif", "peace-out.gif", "peek-corner.gif", "pet.gif", "phase.gif", "pixelate.gif", "polar-bear.gif", "polish.gif", "pop-through.gif", "pop.gif", "portal-peek.gif", "portal-warp.gif", "posterize-breath.gif", "pounce.gif", "prance.gif", "pulse.gif", "pyramid.gif", "quiver.gif", "radar-ping.gif", "rain.gif", "rave-lights.gif", "rave.gif", "recoil-pop.gif", "rgb-split.gif", "ripple.gif", "roast.gif", "roll.gif", "rotate-180.gif", "rotate-45.gif", "rotate-90.gif", "rubber-stamp.gif", "rubber.gif", "runway-landing.gif", "runway-takeoff.gif", "scanline.gif", "scanning.gif", "scared.gif", "scroll.gif", "shake.gif", "shimmer.gif", "shudder.gif", "shy-peek.gif", "sideeye-slide.gif", "sign.gif", "skibidi.gif", "skid-stop.gif", "slap.gif", "slice.gif", "slide-bounce.gif", "slide-spin.gif", "slide.gif", "snap.gif", "solarize-wave.gif", "sparkle-color.gif", "sparkle-party.gif", "sparkle-rainbow.gif", "sparkle.gif", "sphere.gif", "spin.gif", "spiral-in.gif", "spiral-zoom.gif", "spotlight.gif", "squad.gif", "squeeze.gif", "stomp.gif", "stretch.gif", "strobe-soft.gif", "sway.gif", "sweep.gif", "swirl.gif", "teleport.gif", "thanos-snap.gif", "tidal-wave.gif", "tilt-nod.gif", "tilt-zoom.gif", "tilt.gif", "toilet-bounce.gif", "toilet-spin-thick.gif", "toilet-spin.gif", "tornado.gif", "touch-grass.gif", "treasure-chest.gif", "triggered.gif", "tsunami.gif", "tumble.gif", "twirl.gif", "underwater.gif", "washing-machine.gif", "wave-ocean.gif", "wave.gif", "weird.gif", "wiggle-shear.gif", "wildfire.gif", "will-slap.gif", "wipe.gif", "wobble-scale.gif", "wobble.gif", "wormhole.gif", "zoom-close.gif", "zoom-in.gif", "zoom.gif"];

function MemeGallery() {
  const [page, setPage] = useState(0)
  const perPage = 8
  const pages = Math.ceil(MEME_ICONS.length / perPage)
  const visible = MEME_ICONS.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="gallery" className="mob-px py-10 lg:py-12" style={{ background: '#020509' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 'clamp(28px, 8vw, 60px)',
            letterSpacing: 'clamp(-1px, -0.04em, -3px)',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 'clamp(28px, 6vw, 56px)',
          }}
        >
          MEME <span style={{ color: GOLD }}>GALLERY</span>
        </h2>

        {/* Desktop: arrows on sides | Mobile: arrows hidden here */}
        <div className="flex items-center gap-3 lg:gap-8">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="hidden sm:flex flex-shrink-0 items-center justify-center text-white/70 hover:text-white disabled:opacity-20 transition select-none cursor-pointer"
            style={{ width: 44, height: 44, fontSize: 44, lineHeight: 1, fontFamily: 'serif' }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
            {visible.map((icon, i) => (
              <div
                key={i}
                className="aspect-square flex items-center justify-center transition-transform hover:scale-105"
                style={{
                  background: 'rgba(11,16,32,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
              >
                <img src={`/icons/${icon}`} alt="meme" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
            disabled={page >= pages - 1}
            className="hidden sm:flex flex-shrink-0 items-center justify-center text-white/70 hover:text-white disabled:opacity-20 transition select-none cursor-pointer"
            style={{ width: 44, height: 44, fontSize: 44, lineHeight: 1, fontFamily: 'serif' }}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Pagination dots + mobile arrows */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {/* Mobile prev arrow */}
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="sm:hidden flex items-center justify-center text-white/70 hover:text-white disabled:opacity-20 transition select-none cursor-pointer"
            style={{ width: 36, height: 36, fontSize: 36, lineHeight: 1, fontFamily: 'serif' }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: Math.min(pages, 10) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="transition-all cursor-pointer"
                style={{
                  width: i === page ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === page ? GOLD : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
            {pages > 10 && (
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 4 }}>
                {page + 1}/{pages}
              </span>
            )}
          </div>

          {/* Mobile next arrow */}
          <button
            onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
            disabled={page >= pages - 1}
            className="sm:hidden flex items-center justify-center text-white/70 hover:text-white disabled:opacity-20 transition select-none cursor-pointer"
            style={{ width: 36, height: 36, fontSize: 36, lineHeight: 1, fontFamily: 'serif' }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 6. Roadmap
// ─────────────────────────────────────────────────────────
function Roadmap() {
  return (
    <section id="roadmap" className="mob-px bg-s3 relative py-10 lg:py-12 mt-10 lg:mt-20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #020509, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to top, #020509, transparent)' }} />

      <div className="relative z-10" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 'clamp(28px, 8vw, 60px)',
            letterSpacing: 'clamp(-1px, -0.04em, -3px)',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 'clamp(32px, 7vw, 64px)',
          }}
        >
          ROAD<span style={{ color: GOLD }}>MAP</span>
        </h2>

        {/* 2x2 + full-width last on mobile, 5-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {ROADMAP.map((phase, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center p-5 lg:p-6${i === ROADMAP.length - 1 ? ' col-span-2 lg:col-span-1' : ''}`}
              style={{
                minHeight: 140,
                background: 'rgba(11,16,32,0.2)',
                border: '1px solid rgba(255,255,255,0.35)',
                backdropFilter: 'blur(3px)',
                borderRadius: 16,
              }}
            >
              <img src="/favicon.svg" alt="icon" style={{ width: 40, height: 40, marginBottom: 12, filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.25))' }} />
              <p
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                {phase.phase}
              </p>
              <p
                style={{
                  fontFamily: "'Finger Paint', cursive",
                  fontSize: 'clamp(14px, 3vw, 22px)',
                  color: '#fff',
                  lineHeight: 1.2,
                }}
              >
                {phase.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 7. How To Buy
// ─────────────────────────────────────────────────────────
function HowToBuy() {
  const steps = [
    { num: '01', title: 'GET WALLET', desc: 'Download Phantom Wallet or PumpFun App from official sites.' },
    { num: '02', title: 'GET SOL', desc: 'Buy SOL on an exchange and transfer to your wallet or app.' },
    { num: '03', title: 'SWAP FOR LFG', desc: 'Go to Jupiter, swap inside Phantom, or use PumpFun App to buy. Paste CA, swap SOL for $LFG.' },
  ]
  return (
    <section id="howtobuy" className="mob-px relative py-10 lg:py-12" style={{ background: '#020509' }}>
      <div className="relative z-10" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 'clamp(28px, 8vw, 60px)',
            letterSpacing: 'clamp(-1px, -0.04em, -3px)',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 'clamp(28px, 6vw, 56px)',
          }}
        >
          HOW TO <span style={{ color: GOLD }}>BUY</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
          {steps.map(s => (
            <div
              key={s.num}
              className="flex flex-col items-center text-center px-6 pt-6 pb-10 lg:px-10 lg:pt-10 lg:pb-14"
              style={{
                background: '#0B1020',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
              }}
            >
              <img
                src="/favicon.svg"
                alt="icon"
                style={{ width: 48, height: 48, marginTop: 16, marginBottom: 14, filter: 'drop-shadow(0 0 12px rgba(240,191,34,0.4))' }}
              />
              <span
                className="gold-glow"
                style={{
                  fontFamily: "'Finger Paint', cursive",
                  fontSize: 'clamp(40px, 8vw, 56px)',
                  color: GOLD,
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 20,
                  color: '#fff',
                  letterSpacing: '1.5px',
                  marginBottom: 10,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 15,
                  color: '#99A1AF',
                  lineHeight: 1.65,
                  maxWidth: 220,
                  marginBottom: 16,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 8. Footer
// ─────────────────────────────────────────────────────────
function Footer() {
  const [copied, copy] = useCopy(CA)
  return (
    <footer id="footer" className="mob-px bg-s3 relative overflow-hidden" style={{ paddingTop: 72, paddingBottom: 56 }}>
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #020509, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(2,5,9,0.9), transparent)' }} />

      <div className="relative z-10 flex flex-col items-center text-center" style={{ maxWidth: 640, margin: '0 auto' }}>

        {/* Logo + icon */}
        <div className="flex items-center justify-center gap-4" style={{ marginBottom: 28 }}>
          <p
            className="gold-glow"
            style={{ fontFamily: "'Finger Paint', cursive", fontSize: 'clamp(44px, 12vw, 64px)', color: GOLD, lineHeight: 1 }}
          >
            LFG
          </p>
          <img src="/favicon.svg" alt="LFG" style={{ width: 56, height: 56, filter: 'drop-shadow(0 0 15px rgba(240,191,34,0.4))' }} />
        </div>

        {/* CA pill */}
        <button
          onClick={copy}
          className="flex items-center gap-2 mx-auto transition hover:opacity-80 active:scale-[0.98] cursor-pointer w-full"
          style={{
            background: '#0B1020',
            borderRadius: 100,
            padding: '11px 16px',
            border: '1px solid rgba(255,255,255,0.08)',
            maxWidth: 420,
            marginBottom: 32,
          }}
        >
          <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>CA:</span>
          <span
            style={{
              fontFamily: 'Inter, monospace',
              fontSize: 13,
              color: 'rgba(255,255,255,0.6)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: '1 1 0',
              minWidth: 0,
            }}
          >
            {CA}
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copied && <span style={{ color: GOLD, fontSize: 12, flexShrink: 0 }}>Copied!</span>}
        </button>

        {/* Disclaimer */}
        <p
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: 36,
          }}
        >
          $LFG is a meme coin with no intrinsic value or financial return expectation.
          There is no formal team or roadmap for $LFG. The coin is for entertainment purposes only.
        </p>

        {/* JOIN THE CULT */}
        <div className="flex justify-center w-full" style={{ marginBottom: 32 }}>
          <a
            href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer"
            className="uppercase text-black hover:brightness-110 transition whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Finger Paint', cursive", fontSize: 14, background: GOLD, borderRadius: 100, padding: '13px 32px', textDecoration: 'none', display: 'inline-block' }}
          >
            JOIN THE CULT
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 w-full" style={{ marginBottom: 36 }}>
          <a
            href="https://x.com/LetsFkinGoooo" target="_blank" rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="w-11 h-11 rounded-full flex items-center justify-center transition hover:opacity-80 cursor-pointer"
            style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.06)' }}
          >
            <img src="/x.svg" alt="X / Twitter" width={14} height={14} style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.2)' }}>
          © 2026 LFG. Built by the cult, for the cult.
        </p>

      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────
// Root App
// ─────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="flex flex-col gap-10 lg:gap-16" style={{ background: '#020509', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Lore />
      <Tokenomics />
      <Roadmap />
      <MemeGallery />
      <HowToBuy />
      <Footer />
    </div>
  )
}
