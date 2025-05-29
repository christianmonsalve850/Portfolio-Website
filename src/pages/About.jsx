import '../css/About.css';
import placeholder from '../assets/placeholder.jpg';
import { skills } from '../constants/skills';
import { tools } from '../constants/tools';

import ContributionGraph from '../components/ContributionGraph';
import { useEffect } from 'react';

function About() {
    
    return (
        <div className="about-container">
            <div className='left-container'>
                <h1 className='main-title'>Hi There! 👋🏼 <br /> I'm <span>Christian Monsalve</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Hic praesentium magnam explicabo, repellat quis sequi cum quia, 
                    aut optio voluptate blanditiis tenetur assumenda officia doloribus quos quam, 
                    ipsum iusto facere.</p>
                    <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Hic praesentium magnam explicabo, repellat quis sequi cum quia, 
                    aut optio voluptate blanditiis tenetur assumenda officia doloribus quos quam, 
                    ipsum iusto facere.</p>
                    <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Hic praesentium magnam explicabo, repellat quis sequi cum quia, 
                    aut optio voluptate blanditiis tenetur assumenda officia doloribus quos quam, 
                    ipsum iusto facere.</p>
                <br /> <br />
                <h1 className='main-title'>Skillset</h1>
                <div className="skills-grid">
                    { skills.map((skill) => (
                        <div key={skill.name} className="skill-block">
                            <img src={skill.imageUrl} alt={skill.name} className="skill-icon" />
                        </div>
                    ))}
                </div>
                <br /> 
                <h1 className="main-title">Tools</h1>
                <div className="skills-grid">
                    { tools.map((tool) => (
                        <div key={tool.name} className="skill-block">
                            <img src={tool.imageUrl} alt={tool.name} className="skill-icon" />
                        </div>
                    ))}
                </div>
                <br />
                <div className="college-courses">
                    <h1 className="main-title">College Courses</h1>
                    <ul>
                        <li className="course">Data Structures</li>
                        <li className="course">Computer Architecture</li>
                        <li className="course">Intro to Data Science</li>
                        <li className="course">Discrete Structures I, II</li>
                        <li className="course">Design & Analysis of Computer Algorithms</li>
                        <li className="course">Software Methodology</li>
                        <li className="course">Principles of Programming Languages</li>
                        <li className="course">Compilers</li>
                    </ul>
                </div>
            </div>
            <div className="right-container">
                <img src={placeholder} alt="placeholder" />
                <div className="images-container">
                    <a href="../public/resume.pdf" target="_blank" className="view-resume-btn">View Resume <i class="fa-solid fa-up-right-from-square fa-xs external-link"></i></a>
                    <a className="download-resume-btn" href='/resume.pdf' download="cm-resume.pdf" title='Download Resume'><i class="fa-solid fa-arrow-down fa-lg"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About;