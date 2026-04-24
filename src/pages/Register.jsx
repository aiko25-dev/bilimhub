import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../api';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      localStorage.setItem('user', JSON.stringify(res.data));
      alert("Сәтті тіркелдіңіз!");
      navigate("/profile");
    } catch (error) {
      alert("Қате: Тіркелу мүмкін емес!");
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <div className="auth-logo">Bilim<span>Hub</span></div>
        <p className="auth-sub">Жаңа аккаунт жасаңыз</p>
        
        <div className="auth-tabs">
          <Link to="/login" className="auth-tab" style={{ textDecoration: 'none' }}>Кіру</Link>
          <button className="auth-tab active">Тіркелу</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Аты-жөніңіз</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Ерлан Қанатұлы" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email пошта</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="example@mail.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Құпия сөз</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="••••••••" required />
          </div>
          <button type="submit" className="form-btn">Тіркелу</button>
        </form>
      </div>
    </div>
  );
}
