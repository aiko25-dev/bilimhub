import { useState } from 'react';

export default function Lesson() {
  const [activeLesson, setActiveLesson] = useState(2);
  const [isLiked, setIsLiked] = useState(false);

  const lessons = [
    { id: 1, title: "1. Кіріспе. React деген не?", duration: "12:45", watched: true },
    { id: 2, title: "2. JSX синтаксисі және Компоненттер", duration: "18:20", watched: false },
    { id: 3, title: "3. Props арқылы деректер беру", duration: "15:10", watched: false },
    { id: 4, title: "4. State (useState hook)", duration: "22:30", watched: false },
    { id: 5, title: "5. Интерактивті қосымша жасау", duration: "25:00", watched: false },
  ];

  return (
    <div className="video-grid">
      <div className="video-main">
      
        <iframe 
          src="https://www.youtube.com/embed/SqcY0GlETPk?si=T2jY6oP_3b4f620n" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        
        <h1 className="video-title">{lessons.find(l => l.id === activeLesson)?.title}</h1>
        <p className="video-desc">
          Бұл сабақта біз React-тің ең негізгі ұғымдарын, соның ішінде JSX синтаксисін және функционалды компоненттерді қалай құру керектігін толықтай талдайтын боламыз.
        </p>
        
        <div className="video-actions">
          <button 
            className={`video-action-btn ${isLiked ? 'liked' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? '♥ Ұнады' : '♡ Ұнады'} (1.2k)
          </button>
          <button className="video-action-btn">💬 Сұрақ қою</button>
          <button className="video-action-btn">📥 Материалдарды жүктеу</button>
        </div>
      </div>

      <div className="playlist">
        <div className="playlist-header">
          Курс мазмұны (React негіздері)
        </div>
        <div className="playlist-search">
          <input type="text" placeholder="Сабақты іздеу..." />
        </div>
        <div className="playlist-items">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              className={`playlist-item ${lesson.id === activeLesson ? 'active' : ''} ${lesson.watched ? 'watched' : ''}`}
              onClick={() => setActiveLesson(lesson.id)}
            >
              <div className="playlist-num">{lesson.id}</div>
              <div className="playlist-thumb">▶</div>
              <div className="playlist-info">
                <div className="ptitle">{lesson.title}</div>
                <div className="pdur">{lesson.duration}</div>
              </div>
              {lesson.watched && <div className="watched-mark">✓</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
