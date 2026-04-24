import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('courses');
  const [user, setUser] = useState({ name: 'Аяулым Қанатқызы', email: '' });

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return 'АҚ';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  return (
    <div className="profile-layout">
      <div className="profile-header-card">
        <div className="profile-avatar-big">{getInitials(user.name)}</div>
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>{user.email || 'Оқушы'} • Платформада 2 ай бойы</p>
          <div className="profile-badges">
            <span className="profile-badge">🔥 14 күн қатарынан оқу</span>
            <span className="profile-badge" style={{ background: 'var(--green)' }}>🏆 Топ 10% оқушы</span>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button className={`profile-tab ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveTab('courses')}>Менің курстарым</button>
        <button className={`profile-tab ${activeTab === 'certs' ? 'active' : ''}`} onClick={() => setActiveTab('certs')}>Сертификаттар (1)</button>
        <button className={`profile-tab ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>Баптаулар</button>
      </div>

      <div className="profile-panel active">
        {activeTab === 'courses' && (
          <>
            <h4 style={{ marginBottom: '16px', fontSize: '18px' }}>Ағымдағы оқу процесі (Видео уроктар)</h4>
            
            <Link to="/lesson" className="enrolled-card" style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
              <div className="enrolled-emoji" style={{ background: '#dbeafe' }}>💻</div>
              <div className="enrolled-info">
                <h4>React негіздері: 0-ден Pro-ға дейін</h4>
                <p>Қазіргі сабақ: 3-модуль. React Hooks (useState, useEffect) (Видео сабақ)</p>
                <div className="progress-bar-wrap">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '45%' }}></div>
                  </div>
                  <div className="progress-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>45% аяқталды</span>
                    <span>12/28 сабақ</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/lesson" className="enrolled-card" style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
              <div className="enrolled-emoji" style={{ background: '#fce7f3' }}>🎨</div>
              <div className="enrolled-info">
                <h4>UI/UX Дизайн және Figma</h4>
                <p>Қазіргі сабақ: 2-модуль. Wireframe сызу (Видео сабақ)</p>
                <div className="progress-bar-wrap">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '15%' }}></div>
                  </div>
                  <div className="progress-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>15% аяқталды</span>
                    <span>3/20 сабақ</span>
                  </div>
                </div>
              </div>
            </Link>
          </>
        )}

        {activeTab === 'certs' && (
          <div style={{ padding: '20px', background: 'var(--card-bg)', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '20px' }}>Менің сертификаттарым</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '8px' }}>
              <div style={{ fontSize: '50px' }}>🎓</div>
              <div>
                <h3 style={{ margin: 0, color: 'var(--text-color)' }}>JavaScript Негіздері</h3>
                <p style={{ margin: '5px 0', color: 'var(--text-light)' }}>Берілген күні: 12 Сәуір 2026</p>
                <button className="btn-primary" style={{ marginTop: '10px', padding: '8px 16px', fontSize: '14px', border: 'none', cursor: 'pointer' }}>Жүктеп алу (PDF)</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div style={{ padding: '20px', background: 'var(--card-bg)', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '20px' }}>Профиль баптаулары</h4>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={(e) => { e.preventDefault(); alert('Баптаулар сақталды!'); }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Аты-жөніңіз</label>
                <input type="text" defaultValue={user.name} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email пошта</label>
                <input type="email" defaultValue={user.email} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Жаңа құпия сөз</label>
                <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)' }} />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '10px', border: 'none', cursor: 'pointer' }}>Өзгерістерді сақтау</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
