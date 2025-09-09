import Link from 'next/link';
import AdSlot from '../../components/AdSlot';

/**
 * Article page describing how gaming provided community and resilience. The
 * content borrows text from the static HTML build generated previously,
 * wrapped in a simple Next.js component with inline styles matching the
 * dark fantasy theme of the site.
 */
export default function HowGamingKeptMeAlive() {
  return (
    <div
      style={{
        fontFamily: "'Cinzel', serif",
        backgroundColor: '#190B36',
        color: '#F5F5F5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#120B23',
          borderBottom: '2px solid #311257',
        }}
      >
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ width: '150px' }} />
        </Link>
        <h1 style={{ marginTop: '20px' }}>How Gaming Kept Me Alive</h1>
      </header>
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <article style={{ lineHeight: 1.6 }}>
          <p>
            Gaming has always been more than a pastime—it’s been a lifeline. In my darkest moments,
            picking up a controller or logging into a virtual world gave me purpose and connection. This
            blog shares my journey of how games and communities like ours offered an escape,
            friendship, and motivation when I needed it most.
          </p>
          <p>
            From late‑night raids with strangers who became friends to single‑player adventures that
            mirrored my own struggles, the stories we create in‑game can inspire resilience off‑screen.
            It’s okay to lean on our favorite worlds for strength and solidarity, and it’s even better
            when we do it together.
          </p>
          {/* Mid‑article ad slot */}
          <AdSlot label="Mid Article" slot="" />
          <p>
            If you or someone you know is struggling, reach out. Call the ACTSS Crisis Line at
            970‑824‑2400 or the Suicide &amp; Crisis Lifeline at 988. You’re never alone in this
            community.
          </p>
        </article>
      </main>
      <footer
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#120B23',
          borderTop: '2px solid #311257',
        }}
      >
        &copy; 2025 Dank Peer Support
      </footer>
    </div>
  );
}
