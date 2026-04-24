export default function About() {
  return (
    <main>
      <section className="hero" style={{ padding: '60px 2rem 80px' }}>
        <span className="hero-accent">Біз туралы</span>
        <h1>BilimHub — білім берудің жаңа форматы</h1>
        <p>Біздің мақсат – сапалы білімді баршаға қолжетімді ету. Үздік мамандардан білім алып, жаңа белестерді бағындырыңыз.</p>
      </section>

      <section className="section">
        <div className="profile-layout" style={{ padding: '0' }}>
          <div className="profile-header-card">
            <div className="profile-avatar-big" style={{ background: 'white', color: 'var(--navy)' }}>🎯</div>
            <div className="profile-info">
              <h3>Біздің миссиямыз</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Қазақстандықтарға заманауи және сұранысқа ие мамандықтар бойынша сапалы онлайн білім беру. 
                Біз тек теориялық біліммен шектелмей, нақты практикалық дағдыларды үйретеміз.
              </p>
            </div>
          </div>
          
          <div className="cards-grid" style={{ marginTop: '40px' }}>
            <div className="cert-card">
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>👩‍🏫</div>
              <h4>Кәсіби менторлар</h4>
              <p>Өз ісінің нағыз мамандары мен тәжірибелі практиктер</p>
            </div>
            <div className="cert-card" style={{ background: 'var(--green-light)' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🏆</div>
              <h4>Сертификаттар</h4>
              <p>Оқуды аяқтаған соң берілетін ресми сертификат</p>
            </div>
            <div className="cert-card" style={{ background: 'var(--orange-light)' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>💼</div>
              <h4>Жұмысқа тұруға көмек</h4>
              <p>Резюме құру және сұхбаттан өту бойынша кеңестер</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
