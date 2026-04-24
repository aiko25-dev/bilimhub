import { useState, useEffect } from 'react';
import { getCourses, createCourse, updateCourse, deleteCourse, getUsers } from '../api';
import '../styles/Admin.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('courses');
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ title: '', price: '', description: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'courses') {
        const res = await getCourses();
        setCourses(res.data);
      } else if (activeTab === 'users') {
        const res = await getUsers();
        setUsers(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateCourse(editId, formData);
      } else {
        await createCourse(formData);
      }
      setFormData({ title: '', price: '', description: '' });
      setEditId(null);
      fetchData();
    } catch (error) {
      alert("Қате шықты / Error occurred");
    }
  };

  const handleEdit = (course) => {
    setEditId(course.id);
    setFormData({ title: course.title, price: course.price, description: course.description });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Өшіруді растайсыз ба? (Confirm delete?)")) {
      try {
        await deleteCourse(id);
        fetchData();
      } catch (error) {
        alert("Өшіру кезінде қате шықты");
      }
    }
  };

  return (
    <div className="page active admin-page" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '2rem' }}>Админ панель / Admin Dashboard</h2>
      
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <button 
          className="btn-primary" 
          style={{ background: activeTab === 'courses' ? 'var(--primary-color)' : '#ccc' }} 
          onClick={() => setActiveTab('courses')}
        >Курстар кестесі</button>
        <button 
          className="btn-primary" 
          style={{ background: activeTab === 'users' ? 'var(--primary-color)' : '#ccc' }} 
          onClick={() => setActiveTab('users')}
        >Қолданушылар кестесі</button>
      </div>

      {activeTab === 'courses' && (
        <>
          <form onSubmit={handleSubmit} className="admin-form" style={{ marginBottom: '3rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: '12px', boxShadow: '0 4px 6px var(--shadow-color)' }}>
            <h3 style={{ marginBottom: '1rem' }}>{editId ? 'Курсты өңдеу (Edit)' : 'Жаңа курс қосу (Add)'}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" name="title" placeholder="Курс атауы (Title)" value={formData.title} onChange={handleInputChange} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              <input type="number" name="price" placeholder="Бағасы (Price)" value={formData.price} onChange={handleInputChange} required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              <textarea name="description" placeholder="Сипаттама (Description)" value={formData.description} onChange={handleInputChange} style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', minHeight: '100px' }} />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>{editId ? 'Сақтау (Save)' : 'Қосу (Add)'}</button>
                {editId && <button type="button" onClick={() => {setEditId(null); setFormData({title:'', price:'', description:''})}} className="btn-secondary" style={{ background: '#ccc', color: '#333', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}>Болдырмау</button>}
              </div>
            </div>
          </form>

          {loading ? <p>Жүктелуде...</p> : (
            <div style={{ overflowX: 'auto' }}>
              <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--card-bg)', borderRadius: '12px', overflow: 'hidden' }}>
                <thead style={{ background: 'var(--primary-color)', color: 'white' }}>
                  <tr>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>ID</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Атауы</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Бағасы</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Әрекеттер (Actions)</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map(c => (
                    <tr key={c.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem' }}>{c.id}</td>
                      <td style={{ padding: '1rem' }}>{c.title}</td>
                      <td style={{ padding: '1rem' }}>{c.price} ₸</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button onClick={() => handleEdit(c)} className="btn-edit" style={{ marginRight: '0.5rem', padding: '0.4rem 0.8rem', background: '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Өңдеу</button>
                        <button onClick={() => handleDelete(c.id)} className="btn-delete" style={{ padding: '0.4rem 0.8rem', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Өшіру</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {activeTab === 'users' && (
        <div style={{ overflowX: 'auto' }}>
          <h3 style={{ marginBottom: '1rem' }}>Тіркелген қолданушылар кестесі (Деректер базасы)</h3>
          {loading ? <p>Жүктелуде...</p> : (
            <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--card-bg)', borderRadius: '12px', overflow: 'hidden' }}>
              <thead style={{ background: 'var(--primary-color)', color: 'white' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>ID</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Аты-жөні</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Рөл (Role)</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Тіркелген уақыты</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem' }}>{u.id}</td>
                    <td style={{ padding: '1rem' }}>{u.name}</td>
                    <td style={{ padding: '1rem' }}>{u.email}</td>
                    <td style={{ padding: '1rem' }}>{u.role}</td>
                    <td style={{ padding: '1rem' }}>{new Date(u.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
