export default function Mentors() {
  const mentors = [
    { id: 1, name: "Асхат Мұрат", role: "Senior Frontend Developer", imgClass: "it", desc: "React және Vue.js бойынша 5 жылдық тәжірибесі бар сарапшы." },
    { id: 2, name: "Аяулым Серік", role: "UI/UX Designer", imgClass: "design", desc: "Figma және қолданушы тәжірибесін жобалаудың шебері." },
    { id: 3, name: "Ернар Мақсат", role: "Data Scientist", imgClass: "science", desc: "Python және Machine Learning бағытында мықты маман." },
    { id: 4, name: "Самал Арман", role: "IELTS Instructor (8.5)", imgClass: "lang", desc: "Ағылшын тілін халықаралық деңгейде оқытушы." },
    { id: 5, name: "Дастан Еркін", role: "Business Analyst", imgClass: "business", desc: "Бизнесті басқару және стратегияларды құру бойынша сарапшы." },
    { id: 6, name: "Гүлназ Марат", role: "Backend Developer", imgClass: "it", desc: "Node.js және деректер қорын басқару бойынша маман." }
  ];

  return (
    <main>
      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Біздің менторлар</h2>
            <p className="section-sub">Тәжірибелі мамандардан сапалы білім алыңыз</p>
          </div>
        </div>

        <div className="cards-grid">
          {mentors.map(mentor => (
            <div className="card" key={mentor.id}>
              <div className={`card-img ${mentor.imgClass}`}>
                {mentor.imgClass === 'it' ? '💻' : mentor.imgClass === 'design' ? '🎨' : mentor.imgClass === 'science' ? '📊' : mentor.imgClass === 'lang' ? '🇬🇧' : '💼'}
              </div>
              <div className="card-body">
                <h3 className="card-title">{mentor.name}</h3>
                <p className="card-meta" style={{ color: 'var(--pink-mid)', fontWeight: '600' }}>{mentor.role}</p>
                <p style={{ fontSize: '14px', color: 'var(--gray)', marginTop: '8px', lineHeight: '1.5' }}>{mentor.desc}</p>
                <div className="card-footer" style={{ marginTop: '16px' }}>
                  <button className="card-btn outline" style={{ background: 'var(--navy-light)', color: 'var(--navy)' }}>Профильді көру</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
