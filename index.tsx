import Link from 'next/link';
import AdSlot from '../components/AdSlot';

/**
 * Home page for Dank Peer Support. This page contains a hero section,
 * mission statement, program highlights, a featured post teaser, and
 * resource links. All styling is done inline for simplicity and to
 * avoid external dependencies like Tailwind in this example repository.
 */
export default function Home() {
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
        {/* Logo and site name */}
        <img src="/logo.png" alt="Dank Peer Support Logo" style={{ width: '200px' }} />
        <h1 style={{ marginTop: '20px' }}>Dank Peer Support</h1>
        <p style={{ color: '#D1B3E0' }}>Where gamers lift each other up</p>
      </header>
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <section>
          <h2>Our Mission</h2>
          <p>
            Dank Peer Support is a community‑driven platform where humor and heartfelt support go hand in
            hand. We provide resources and a supportive network to help gamers thrive in both virtual and
            real worlds.
          </p>
        </section>
        {/* Top ad placement */}
        <AdSlot label="Top Banner" slot="" />
        <section>
          <h2>Programs</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            <div
              style={{
                border: '1px solid #311257',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: '#120B23',
              }}
            >
              <h3>Respawn Blog</h3>
              <p>Read personal stories and tips on mental health and gaming.</p>
            </div>
            <div
              style={{
                border: '1px solid #311257',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: '#120B23',
              }}
            >
              <h3>Squad Finder</h3>
              <p>Connect with peers for co‑op play and mutual support.</p>
            </div>
            <div
              style={{
                border: '1px solid #311257',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: '#120B23',
              }}
            >
              <h3>IRL Fitness</h3>
              <p>Balance gaming with physical fitness through community challenges.</p>
            </div>
            <div
              style={{
                border: '1px solid #311257',
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: '#120B23',
              }}
            >
              <h3>Resources</h3>
              <p>Links to crisis lines, tutorials, and mental health guides.</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Featured Post</h2>
          <p>
            {/* Link to the article in the posts folder. We use .html extension to align
               with static exports and simple linking, but Next.js will handle routing when built */}
            <Link href="/posts/how-gaming-kept-me-alive">
              <span style={{ color: '#BB86FC' }}>How Gaming Kept Me Alive</span>
            </Link>
          </p>
        </section>
        <section>
          <h2>Resources</h2>
          <ul>
            <li>ACTSS Crisis Line: 970‑824‑2400</li>
            <li>988 Suicide &amp; Crisis Lifeline</li>
            <li>Peer Support Disclaimer: We are a community, not professionals.</li>
          </ul>
        </section>
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