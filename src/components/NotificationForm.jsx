import { useState } from 'react';

export default function NotificationForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSend = () => {
    if(!email || !email.includes('@')) return;
    setSubmitted(true);
    setEmail(""); 
  };

  if (submitted) {
    return (
      <div className="hero-btns" style={{ marginTop: '30px' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#d1fae5', padding: '12px 24px', borderRadius: '10px', border: '1px solid #10b981', fontWeight: '600' }}>
          ✓ Жаңалықтарға сәтті жазылдыңыз!
        </div>
      </div>
    );
  }

  return (
    <div className="hero-btns" style={{ marginTop: '30px' }}>
      <input 
        type="email"
        className="search-input"
        style={{ width: '260px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Жеңілдік алу үшін почтаңызды жазыңыз..." 
      />
      <button className="btn-primary" onClick={handleSend}>Жазылу</button>
    </div>
  );
}