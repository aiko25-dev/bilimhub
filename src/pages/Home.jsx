import NotificationForm from '../components/NotificationForm';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page active">
      <main>
        <section className="hero">
          <span className="hero-accent">Жаңа бағыт</span>
          <h1>Болашақ <em>білім</em> осында</h1>
          <p>Біздің платформада ең үздік менторлардан білім алып, жаңа мамандықтарды меңгеріңіз.</p>
          <NotificationForm />
        </section>

        <section className="stats">
          <div className="stat-item">
            <div className="num">50+</div>
            <div className="lbl">Курстар</div>
          </div>
          <div className="stat-item">
            <div className="num">10 000+</div>
            <div className="lbl">Оқушылар</div>
          </div>
          <div className="stat-item">
            <div className="num">20+</div>
            <div className="lbl">Менторлар</div>
          </div>
        </section>
        
        <section className="section" style={{ textAlign: 'center', padding: '80px 2rem' }}>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>Өз бағытыңызды табыңыз</h2>
          <p className="section-sub" style={{ marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            IT, дизайн, тіл үйрену және бизнес бағытындағы ең танымал курстармен танысыңыз.
          </p>
          <Link to="/courses" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Курстарды көру
          </Link>
        </section>
      </main>
    </div>
  );
}
