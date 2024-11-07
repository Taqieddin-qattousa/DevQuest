import React from 'react';
import 'styles/CoursesPage.css';
import CourseCard from 'components/CourseCard';
import FilterTabs from 'components/FilterTabs';
import Navbar from 'components/Navbar';


const CoursesPage = () => {
  return (
    
    <div className="courses-page">
     
     <Navbar/>
     
      <header className="courses-header">
        <h1>All Courses</h1>
        <p>A large number of courses on different topics are waiting for you. You can find there everything from self-developing to sciences, for any knowledge levels.</p>
        <FilterTabs />
      </header>
      
      <section className="courses-grid">
        {/* Render multiple CourseCard components here */}
        <CourseCard 
          title="JavaScript Fundamentals" 
          level="Beginner" 
          rating={4.5} 
          students={151} 
          description="Learn the fundamentals of JavaScript and start building interactive websites." 
          courseId="js-fundamentals"
        />
        <CourseCard 
          title="Introduction to Python" 
          level="Beginner" 
          rating={4.6} 
          students={890} 
          description="Master the basics of Python programming for data science and web development." 
          courseId="intro-python"
        />
        <CourseCard 
          title="HTML5 for Beginners" 
          level="Beginner" 
          rating={4.8} 
          students={170} 
          description="Get started with HTML5 and build your first web pages." 
          courseId="html5-beginners"
        />
        {/* Add more CourseCard components as needed */}
      </section>
    </div>
  );
};

export default CoursesPage;
