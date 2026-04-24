export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Bilim<span>Hub</span></div>
          <p className="footer-desc">
            Білім алушыларға арналған заманауи онлайн платформа.
            Өз әлеуетіңізді бізбен бірге ашыңыз!
          </p>
          <div className="social-links">
            <div className="social-link">📘</div>
            <div className="social-link">📸</div>
            <div className="social-link">▶️</div>
          </div>
        </div>
        <div>
          <div className="footer-title">Платформа</div>
          <ul className="footer-links">
            <li><a>Барлық курстар</a></li>
            <li><a>Менторлар</a></li>
            <li><a>Тарифтер</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-title">Қолдау</div>
          <ul className="footer-links">
            <li><a>Жиі қойылатын сұрақтар</a></li>
            <li><a>Байланыс</a></li>
            <li><a>Ережелер</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 BilimHub — Барлық құқықтар қорғалған.</p>
      </div>
    </footer>
  );
}