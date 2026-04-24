import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };
  
  return (
    <nav>
      <Link to="/" className="logo">Bilim<span>Hub</span></Link>
      <div className="nav-links">
        <Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''}>Курстар</Link>
        <Link to="/mentors" className={location.pathname === '/mentors' ? 'active' : ''}>Менторлар</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Біз туралы</Link>
        {user && (
          <>
            <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''} style={{ color: 'var(--pink-mid)', fontWeight: '600' }}>Профиль</Link>
            {user.role === 'admin' || true ? ( // Show admin for now or check role
              <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''} style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Админ</Link>
            ) : null}
          </>
        )}
      </div>
      <div className="nav-right">
        {user ? (
          <button onClick={handleLogout} className="nav-btn outline" style={{cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem'}}>Шығу</button>
        ) : (
          <>
            <Link to="/login" className="nav-btn outline">Кіру</Link>
            <Link to="/register" className="nav-btn">Тіркелу</Link>
          </>
        )}
      </div>
    </nav>
  );
}