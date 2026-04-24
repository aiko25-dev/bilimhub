import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../api';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      localStorage.setItem('user', JSON.stringify(res.data));
      alert("Сәтті кірдіңіз!");
      navigate("/profile");
    } catch (error) {
      alert("Қате: Email немесе пароль дұрыс емес!");
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-logo">Bilim<span>Hub</span></div>
        <p className="auth-sub">Өз аккаунтыңызға кіріңіз</p>
        
        <div className="auth-tabs">
          <button className="auth-tab active">Кіру</button>
          <Link to="/register" className="auth-tab" style={{ textDecoration: 'none' }}>Тіркелу</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email пошта</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="example@mail.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Құпия сөз</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="••••••••" required />
          </div>
          <button type="submit" className="form-btn">Кіру</button>
        </form>
      </div>
    </div>
  );
}
