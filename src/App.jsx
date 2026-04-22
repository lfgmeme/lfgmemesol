import { useState } from 'react'
import './index.css'

const GOLD = '#F0BF22'
const CA   = 'FkH9pdeNMGdes2DQBuEy2DWf9FCEP74YMxNe9pump'

const ROADMAP = [
  { phase: 'PHASE 1', name: 'WAKE UP',      done: true  },
  { phase: 'PHASE 2', name: 'BAGWORK',      done: true  },
  { phase: 'PHASE 3', name: 'GET LOUD',     done: false, active: true },
  { phase: 'PHASE 4', name: 'TAKE OVER',    done: false, active: true },
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
  { label: 'THE LORE',     href: '#lore'       },
  { label: 'TOKENOMICS',   href: '#tokenomics'  },
  { label: 'ROADMAP',      href: '#roadmap'     },
  { label: 'MEME GALLERY', href: '#gallery'     },
  { label: 'HOW TO BUY',   href: '#howtobuy'    },
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
      {/* Desktop — 3-col grid for true centering */}
      <div
        className="hidden lg:flex items-center justify-between h-full px-10 lg:px-20"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
        }}
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
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '20px',
                letterSpacing: '0.7px',
                textAlign: 'center',
                verticalAlign: 'bottom',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Telegram"
            className="flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ width: 32, height: 32, opacity: 0.45 }}
          >
            <img src="/telegram.svg" alt="Telegram" width={20} height={20} />
          </a>
          <a href="#" aria-label="X / Twitter"
            className="flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ width: 32, height: 32, opacity: 0.45 }}
          >
            <img src="/x.svg" alt="X / Twitter" width={20} height={20} />
          </a>
          <a
            href="#howtobuy"
            className="uppercase text-black hover:brightness-110 transition whitespace-nowrap"
            style={{
              fontFamily: "'Finger Paint', cursive",
              fontSize: 14,
              background: GOLD,
              borderRadius: 100,
              padding: '8px 20px',
              textDecoration: 'none',
            }}
          >
            JOIN THE CULT
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between h-full px-5">
        <a href="#hero">
          <img src="/Container.svg" alt="LFG" style={{ width: 110, height: 48 }} />
        </a>
        <button className="p-1.5 text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden px-6 pt-3 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(2,5,9,0.97)', borderTop: '1px solid rgba(240,191,34,0.07)' }}
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="uppercase text-white/55 hover:text-[#F0BF22] py-1"
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '20px',
                letterSpacing: '0.7px',
                textAlign: 'center',
                verticalAlign: 'bottom',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#howtobuy"
            onClick={() => setOpen(false)}
            className="uppercase text-black text-center hover:brightness-110 transition"
            style={{ fontFamily: "'Finger Paint', cursive", fontSize: 13, background: GOLD, borderRadius: 100, padding: '8px 20px', textDecoration: 'none' }}
          >
            JOIN THE CULT
          </a>
        </div>
      )}
    </header>
  )
}

// ─────────────────────────────────────────────────────────
// 2. Hero
// ─────────────────────────────────────────────────────────
function Hero() {
  const [copied, copy] = useCopy(CA)
  return (
    <section
      id="hero"
      className="bg-s1 relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 81 }}
    >
      <div
        className="relative z-10 w-full flex items-center px-10 lg:px-20"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        {/* Left content */}
        <div className="flex flex-col items-start z-10" style={{ flex: '0 0 auto', maxWidth: 540 }}>
          <img
            src="/LFG.svg"
            alt="LFG"
            className="select-none"
            style={{
              width: 440,
              maxWidth: '100%',
              filter: `drop-shadow(0 0 40px rgba(240,191,34,0.55)) drop-shadow(0 0 90px rgba(240,191,34,0.2))`,
              marginBottom: 24,
            }}
            draggable={false}
          />

          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 36,
              letterSpacing: '1.8px',
              color: '#fff',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            BORN TO SCREAM. BUILT TO SEND.
          </p>

          <p
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 20,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: 36,
              lineHeight: 1.6,
              maxWidth: 400,
            }}
          >
            This isn't just a coin. It's a movement. Join the cult of eternal moonflights.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#howtobuy"
              className="uppercase hover:brightness-110 transition"
              style={{
                fontFamily: "'Finger Paint', cursive",
                fontSize: 14,
                background: GOLD,
                color: '#000',
                borderRadius: 100,
                padding: '10px 24px',
                textDecoration: 'none',
              }}
            >
              BUY NOW
            </a>
            <a
              href="#footer"
              className="uppercase transition"
              style={{
                fontFamily: "'Finger Paint', cursive",
                fontSize: 14,
                color: GOLD,
                border: `1.5px solid ${GOLD}`,
                borderRadius: 100,
                padding: '10px 24px',
                textDecoration: 'none',
              }}
            >
              JOIN THE CULT
            </a>
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase flex items-center gap-2 transition hover:border-white/50"
              style={{
                fontFamily: "'Finger Paint', cursive",
                fontSize: 14,
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.3)',
                borderRadius: 100,
                padding: '10px 20px',
                textDecoration: 'none',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
              VIEW CHART
            </a>
          </div>
        </div>

        {/* Right — fish */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <img
            src="/pppng 2.svg"
            alt="LFG Character"
            className="float hero-char select-none"
            style={{
              width: 'clamp(320px, 45vw, 640px)',
              filter: 'drop-shadow(0 0 60px rgba(240,191,34,0.3))',
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* Mobile fish */}
      <div
        className="lg:hidden flex justify-center"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, opacity: 0.45, pointerEvents: 'none' }}
      >
        <img
          src="/pppng 2.svg"
          alt=""
          className="select-none"
          style={{ width: 260, filter: 'drop-shadow(0 0 30px rgba(240,191,34,0.25))' }}
          draggable={false}
        />
      </div>

      {/* Bottom gradient transition */}
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
      <div className="px-10 lg:px-20" style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div
          className="bg-s2 rounded-3xl text-center my-5"
          style={{
            border: '1px solid rgba(240,191,34,0.18)',
            backdropFilter: 'blur(10px)',
            padding: '56px 64px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Finger Paint', cursive",
              fontSize: 60,
              letterSpacing: '-3px',
              color: '#fff',
              marginBottom: 28,
              lineHeight: 1,
            }}
          >
            THE <span style={{ color: GOLD }}>LORE</span>
          </h2>

          <p
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 18,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.95,
              marginBottom: 28,
              maxWidth: 560,
              margin: '0 auto 28px',
            }}
          >
            In the drama of the chain, a token was born. Not just any token — this battle cry of degens,
            dreamers, and moon chasers. LFG isn't $$$, it's a movement, unfiltered and unstoppable.
            We're here to dominate.
          </p>

          <p
            style={{
              fontFamily: "'Finger Paint', cursive",
              fontSize: 18,
              color: GOLD,
            }}
          >
            Zero promises. Dank vibes. Maximum chaos.
          </p>
          <img src="/favicon.svg" alt="icon" style={{ width: 32, height: 32, margin: '28px auto 0' }} />
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
    { value: '1B',    label: 'TOTAL SUPPLY' },
    { value: '100%',  label: 'LP BURNT'     },
    { value: '0%',    label: 'TAXES'        },
    { value: '100%',  label: 'COMMUNITY'    },
  ]
  return (
    <section id="tokenomics" className="bg-s2 relative py-10 lg:py-12 px-5 mb-16 lg:mb-32 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #020509, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #020509, transparent)' }}
      />

      <div className="relative z-10" style={{ maxWidth: 1280, margin: '20px auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 60,
            letterSpacing: '-3px',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 64,
          }}
        >
          TOKEN<span style={{ color: GOLD }}>OMICS</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(s => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center"
              style={{
                background: 'rgba(11,16,32,0.2)',
                border: '1px solid rgba(240,191,34,0.2)',
                backdropFilter: 'blur(3px)',
                borderRadius: 16,
                padding: '32px 24px',
              }}
            >
              <span
                className="gold-glow"
                style={{
                  fontFamily: "'Finger Paint', cursive",
                  fontSize: 48,
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: 10,
                  display: 'block',
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 16,
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
        <img src="/favicon.svg" alt="icon" style={{ width: 44, height: 44, margin: '50px auto 0', filter: 'drop-shadow(0 0 10px rgba(240,191,34,0.3))' }} />
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// 5. Meme Gallery
// ─────────────────────────────────────────────────────────
const MEME_ICONS = ["3d-flip-thick.gif","3d-flip.gif","aflame.gif","alarm.gif","alarms.gif","alert.gif","anime-speed.gif","banana-dance.gif","beers.gif","blankies.gif","blaze.gif","blink.gif","bobble.gif","boing.gif","bonk-doge.gif","bonk.gif","boom.gif","bounce.gif","box.gif","breaking-news.gif","breathe.gif","bubble.gif","bulge.gif","burn.gif","butterfly.gif","cat-slap.gif","clone-army.gif","combust.gif","cube.gif","cute-hop.gif","ddr.gif","deal-with-it.gif","depth-tilt.gif","double-roll.gif","drift.gif","drop-bounce.gif","drop.gif","earthquake.gif","elastic-corner-pinch.gif","elastic.gif","electricity.gif","excited.gif","excuse-me.gif","explode.gif","figure-8.gif","fire-frame.gif","fire-pixel.gif","fireplace.gif","fireworks.gif","flag-wave.gif","flame.gif","flick.gif","fling.gif","flip.gif","flutter.gif","fps.gif","gigachad.gif","gitchroll.gif","glitch-out.gif","glitch.gif","glitching.gif","glitchwave.gif","glitchy.gif","gravity-flip.gif","grayscale.gif","gulp.gif","headbop.gif","heart-hypno.gif","heart-locket.gif","heartbeat-flash.gif","heartbeat.gif","heat-haze.gif","hologram.gif","hop.gif","hovering.gif","hype-jam.gif","hype-shake.gif","hype.gif","hyperspace.gif","hypnotize.gif","intensifies.gif","jail.gif","jam.gif","jammies.gif","jiggle.gif","jitter.gif","ken-burns.gif","laser-eyes.gif","lean.gif","leap.gif","lick.gif","lightning-flash.gif","lightning.gif","loading-eight.gif","loading-five.gif","loading-four.gif","loading-nine.gif","loading-seven.gif","loading-six.gif","loading-three.gif","loading-two.gif","loading.gif","lurk.gif","magnet.gif","math.gif","matrix-rain.gif","mc-fire.gif","mega-bounce.gif","melt.gif","misalign.gif","mitosis.gif","music.gif","negative-blink.gif","nod.gif","nodders.gif","nyan-cat.gif","old-man-yells.gif","on-fire.gif","orbit-drift.gif","orbit-eight.gif","orbit-five.gif","orbit-four.gif","orbit-nine.gif","orbit-seven.gif","orbit-six.gif","orbit-three.gif","orbit-two.gif","orbit.gif","origami-fold.gif","pace.gif","panic.gif","party-blob.gif","party-parrot.gif","party.gif","peace-out.gif","peek-corner.gif","pet.gif","phase.gif","pixelate.gif","polar-bear.gif","polish.gif","pop-through.gif","pop.gif","portal-peek.gif","portal-warp.gif","posterize-breath.gif","pounce.gif","prance.gif","pulse.gif","pyramid.gif","quiver.gif","radar-ping.gif","rain.gif","rave-lights.gif","rave.gif","recoil-pop.gif","rgb-split.gif","ripple.gif","roast.gif","roll.gif","rotate-180.gif","rotate-45.gif","rotate-90.gif","rubber-stamp.gif","rubber.gif","runway-landing.gif","runway-takeoff.gif","scanline.gif","scanning.gif","scared.gif","scroll.gif","shake.gif","shimmer.gif","shudder.gif","shy-peek.gif","sideeye-slide.gif","sign.gif","skibidi.gif","skid-stop.gif","slap.gif","slice.gif","slide-bounce.gif","slide-spin.gif","slide.gif","snap.gif","solarize-wave.gif","sparkle-color.gif","sparkle-party.gif","sparkle-rainbow.gif","sparkle.gif","sphere.gif","spin.gif","spiral-in.gif","spiral-zoom.gif","spotlight.gif","squad.gif","squeeze.gif","stomp.gif","stretch.gif","strobe-soft.gif","sway.gif","sweep.gif","swirl.gif","teleport.gif","thanos-snap.gif","tidal-wave.gif","tilt-nod.gif","tilt-zoom.gif","tilt.gif","toilet-bounce.gif","toilet-spin-thick.gif","toilet-spin.gif","tornado.gif","touch-grass.gif","treasure-chest.gif","triggered.gif","tsunami.gif","tumble.gif","twirl.gif","underwater.gif","washing-machine.gif","wave-ocean.gif","wave.gif","weird.gif","wiggle-shear.gif","wildfire.gif","will-slap.gif","wipe.gif","wobble-scale.gif","wobble.gif","wormhole.gif","zoom-close.gif","zoom-in.gif","zoom.gif"];

function MemeGallery() {
  const [page, setPage] = useState(0)
  const perPage = 8
  const pages   = Math.ceil(MEME_ICONS.length / perPage)
  const visible = MEME_ICONS.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="gallery" className="py-10 lg:py-12 px-5" style={{ background: '#020509' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 60,
            letterSpacing: '-3px',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 56,
          }}
        >
          MEME <span style={{ color: GOLD }}>GALLERY</span>
        </h2>

        <div className="flex items-center gap-5 lg:gap-8">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex-shrink-0 text-white/70 hover:text-white disabled:opacity-20 transition select-none"
            style={{ fontFamily: 'serif', fontSize: 44, lineHeight: 1 }}
          >
            ‹
          </button>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {visible.map((icon, i) => (
              <div
                key={i}
                className="aspect-square flex items-center justify-center transition-transform hover:scale-105"
                style={{
                  background: 'rgba(11,16,32,0.4)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 16,
                  overflow: 'hidden'
                }}
              >
                <img src={`/icons/${icon}`} alt="meme" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
            disabled={page >= pages - 1}
            className="flex-shrink-0 text-white/70 hover:text-white disabled:opacity-20 transition select-none"
            style={{ fontFamily: 'serif', fontSize: 44, lineHeight: 1 }}
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
    <section id="roadmap" className="bg-s3 relative py-10 lg:py-12 px-5 mt-10 lg:mt-20 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #020509, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #020509, transparent)' }}
      />

      <div className="relative z-10" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 60,
            letterSpacing: '-3px',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 64,
          }}
        >
          ROAD<span style={{ color: GOLD }}>MAP</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-4 flex-wrap">
          {ROADMAP.map((phase, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center"
              style={{
                width: 218,
                minHeight: 154,
                background: 'rgba(11,16,32,0.2)',
                border: `1px solid rgba(240,191,34,${phase.done || phase.active ? '0.4' : '0.15'})`,
                backdropFilter: 'blur(3px)',
                borderRadius: 16,
                padding: '24px 20px',
                opacity: phase.done || phase.active ? 1 : 0.55,
              }}
            >
              <img src="/favicon.svg" alt="icon" style={{ width: 48, height: 48, marginBottom: 16, filter: 'drop-shadow(0 0 10px rgba(240,191,34,0.3))' }} />
              <p
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  color: GOLD,
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                {phase.phase}
              </p>
              <p
                style={{
                  fontFamily: "'Finger Paint', cursive",
                  fontSize: 24,
                  color: phase.done || phase.active ? '#fff' : 'rgba(255,255,255,0.5)',
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
    {
      num: '01',
      title: 'GET WALLET',
      desc: 'Download Phantom Wallet or PumpFun App from official sites.',
    },
    {
      num: '02',
      title: 'GET SOL',
      desc: 'Buy SOL on an exchange and transfer to your wallet or app.',
    },
    {
      num: '03',
      title: 'SWAP FOR LFG',
      desc: 'Go to Jupiter, swap inside Phantom, or use PumpFun App to buy. Paste CA, swap SOL for $LFG.',
    },
  ]
  return (
    <section id="howtobuy" className="relative py-10 lg:py-12 px-5" style={{ background: '#020509' }}>
      <div className="relative z-10" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "'Finger Paint', cursive",
            fontSize: 60,
            letterSpacing: '-3px',
            color: '#fff',
            lineHeight: 1,
            marginBottom: 56,
          }}
        >
          HOW TO <span style={{ color: GOLD }}>BUY</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map(s => (
            <div
              key={s.num}
              className="flex flex-col"
              style={{
                background: '#0B1020',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 16,
                padding: '36px 32px',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src="/favicon.svg" alt="icon" style={{ width: 44, height: 44, filter: 'drop-shadow(0 0 10px rgba(240,191,34,0.3))' }} />
                <span
                  className="gold-glow"
                  style={{
                    fontFamily: "'Finger Paint', cursive",
                    fontSize: 52,
                    color: GOLD,
                    lineHeight: 1,
                    display: 'block',
                  }}
                >
                  {s.num}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 24,
                  color: '#fff',
                  letterSpacing: '1px',
                  marginBottom: 12,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 16,
                  color: '#99A1AF',
                  lineHeight: 1.6,
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
    <footer id="footer" className="bg-s3 relative py-10 lg:py-12 px-5 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #020509, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(2,5,9,0.9), transparent)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center" style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Big LFG text & Logo */}
        <div className="flex items-center justify-center gap-5 mb-8 w-full">
          <p
            className="gold-glow"
            style={{
              fontFamily: "'Finger Paint', cursive",
              fontSize: 64,
              color: GOLD,
              lineHeight: 1,
            }}
          >
            LFG
          </p>
          <img src="/favicon.svg" alt="LFG" style={{ width: 64, height: 64, filter: 'drop-shadow(0 0 15px rgba(240,191,34,0.4))' }} />
        </div>

        {/* CA pill */}
        <button
          onClick={copy}
          className="flex items-center gap-2 mx-auto mb-6 transition hover:opacity-80 active:scale-[0.98]"
          style={{
            background: '#0B1020',
            borderRadius: 100,
            padding: '12px 24px',
            color: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <span
            style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 14,
              color: 'rgba(255,255,255,0.35)',
              marginRight: 4,
            }}
          >
            CA:
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              maxWidth: 400,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {CA}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 ml-1"
          >
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          {copied && <span style={{ color: GOLD, fontSize: 12, marginLeft: 4 }}>Copied!</span>}
        </button>

        {/* Disclaimer */}
        <p
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 16,
            color: '#fff',
            lineHeight: 1.7,
            marginBottom: 32,
            maxWidth: 480,
            margin: '0 auto 32px',
          }}
        >
          $LFG is a meme coin with no intrinsic value or financial return expectation.
          There is no formal team or roadmap for $LFG. The coin is for entertainment purposes only.
        </p>

        {/* JOIN THE CULT button */}
        <div className="flex justify-center mb-8 w-full">
          <a
            href="#howtobuy"
            className="uppercase text-black hover:brightness-110 transition whitespace-nowrap"
            style={{
              fontFamily: "'Finger Paint', cursive",
              fontSize: 14,
              background: GOLD,
              borderRadius: 100,
              padding: '12px 28px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            JOIN THE CULT
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mb-8 w-full">
          <a
            href="#"
            aria-label="Telegram"
            className="w-10 h-10 rounded-full flex items-center justify-center transition hover:border-white/30 hover:opacity-100"
            style={{ border: '1px solid rgba(255,255,255,0.12)', opacity: 0.4 }}
          >
            <img src="/telegram.svg" alt="Telegram" width={16} height={16} />
          </a>
          <a
            href="#"
            aria-label="X / Twitter"
            className="w-10 h-10 rounded-full flex items-center justify-center transition hover:border-white/30 hover:opacity-100"
            style={{ border: '1px solid rgba(255,255,255,0.12)', opacity: 0.4 }}
          >
            <img src="/x.svg" alt="X / Twitter" width={14} height={14} />
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 14,
            color: 'rgba(255,255,255,0.2)',
          }}
        >
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
