export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom,#150018,#050505)',
        color: 'white',
      }}
    >
      <section
        style={{
          maxWidth: '1200px',
          margin: 'auto',
          padding: '80px 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-block',
              padding: '10px 18px',
              borderRadius: '999px',
              background: 'rgba(255,0,255,.1)',
              border: '1px solid rgba(255,0,255,.3)',
              marginBottom: '24px',
            }}
          >
            BITZONEPY • GAMING PREMIUM
          </div>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '900',
              lineHeight: '.95',
              marginBottom: '30px',
            }}
          >
            PCs Gamer
            <br />
            <span style={{ color: '#ff00cc' }}>High-End</span>
          </h1>

          <p
            style={{
              color: '#d0d0d0',
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '40px',
            }}
          >
            Setups gamer premium con RGB, alto rendimiento y hardware preparado
            para gaming competitivo y streaming.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '18px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/595982012989"
              style={{
                padding: '18px 32px',
                borderRadius: '20px',
                background: 'linear-gradient(90deg,#d100ff,#6d28ff)',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/bitzonepy"
              style={{
                padding: '18px 32px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,.15)',
                color: 'white',
              }}
            >
              @bitzonepy
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1600&auto=format&fit=crop"
            alt="Gaming PC"
            style={{
              width: '100%',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,.1)',
            }}
          />
        </div>
      </section>
    </main>
  )
}
