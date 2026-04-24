import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import { getCourses } from '../api';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (course.Category && course.Category.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="page active">
      <main>
        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Барлық курстар</h2>
              <p className="section-sub">Өзіңізге қажетті бағытты таңдаңыз</p>
            </div>
            <SearchBar onSearch={setSearchQuery} />
          </div>

          <div className="cards-grid">
            {loading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>Жүктелуде... (Loading...)</div>
            ) : filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <CourseCard 
                  key={course.id} 
                  title={course.title} 
                  category={course.Category ? course.Category.name : 'Басқа'} 
                  tag={course.tag || 'tag-it'}
                  imgClass={course.image || 'it'}
                  price={course.price ? `${course.price} ₸` : 'Тегін'} 
                  instructor={course.User ? course.User.name : 'Белгісіз'}
                />
              ))
            ) : (
              <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                <div className="emoji">🔍</div>
                <h4>Курс табылмады</h4>
                <p>Басқа сөзбен іздеп көріңіз.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
