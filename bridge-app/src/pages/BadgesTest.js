
function BadgesTest() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        🏆 Badge Collection 🏆
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
        Showcase your achievements and unlock exclusive rewards
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Sample Badge Cards */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗡️</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Daily Warrior</h3>
          <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Login for 7 consecutive days</p>
          <div style={{
            background: 'linear-gradient(45deg, #48bb78, #38a169)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '15px',
            display: 'inline-block'
          }}>
            EARNED ✓
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👑</div>
          <h3 style={{ marginBottom: '0.5rem' }}>BriDGe Elite</h3>
          <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Exclusive Pro member badge</p>
          <div style={{
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '15px',
            display: 'inline-block'
          }}>
            PRO BADGE
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
          opacity: 0.6
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem', position: 'relative' }}>
            🥷
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>🔒</div>
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>Code Ninja</h3>
          <p style={{ opacity: 0.8, marginBottom: '1rem' }}>Solve 100 coding problems</p>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            height: '8px',
            marginBottom: '0.5rem',
            overflow: 'hidden'
          }}>
            <div style={{
              background: '#8b5cf6',
              height: '100%',
              width: '73%',
              borderRadius: '10px'
            }}></div>
          </div>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>73/100</span>
        </div>
      </div>

      <div style={{
        marginTop: '4rem',
        background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '600px',
        margin: '4rem auto 0'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>🚀 Unlock BriDGe Pro Badges</h2>
        <p style={{ marginBottom: '2rem' }}>Get exclusive badges and premium perks</p>
        <button style={{
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          padding: '1rem 2rem',
          borderRadius: '25px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}

export default BadgesTest;