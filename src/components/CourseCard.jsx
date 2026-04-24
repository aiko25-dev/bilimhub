import { useState } from 'react';

export default function CourseCard({ title, category, tag, imgClass, price, instructor }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <div className="card">
      <div className={`card-img ${imgClass}`}>
        {imgClass === 'it' ? '💻' : imgClass === 'design' ? '🎨' : imgClass === 'science' ? '📊' : imgClass === 'lang' ? '🇬🇧' : '💼'}
        <div className="card-rating">⭐ 4.9</div>
      </div>
      <div className="card-body">
        <span className={`card-tag ${tag}`}>{category}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-instructor">Ментор: {instructor}</p>
        <div className="card-meta">Бағасы: {price}</div>
        <div className="card-footer">
          <button 
            className={`card-btn ${isEnrolled ? 'enrolled' : ''}`}
            onClick={() => setIsEnrolled(!isEnrolled)}
          >
            {isEnrolled ? '✓ Жазылдыңыз' : 'Жазылу'}
          </button>
          <button 
            className={`wishlist-btn ${isLiked ? 'active' : ''}`}
            style={{ color: isLiked ? 'var(--pink-mid)' : 'inherit' }}
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
}