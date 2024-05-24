// PhotoClockDetail.js
import React, { useState, useEffect, useRef } from 'react';
import './PhotoClockDetail.css';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import imageProject from './img/project.jpg'
import imageContext from './img/context.jpg'
import imagePlan from './img/plan.png'
import imageFocusGroup from './img/M123-template_M1.png'
import imageMiro from './img/M123-template_M2.png'

const PhotoClockDetail = () => {

  /* Sidebar Navigation */
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({
    overview: useRef(null),
    research: useRef(null),
    empathize: useRef(null),
    design: useRef(null),
    test: useRef(null),
    takeaways: useRef(null),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px', threshold: 0.1 }  // Trigger when 10% of the element is visible and expand the top margin
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  /* Lightbox */
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [imageProject, imageContext, imagePlan, imageFocusGroup, imageMiro];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lightbox-open');
    } else {
      document.body.classList.remove('lightbox-open');
    }
  }, [isOpen]);
  
  const handleClickImage = (index) => {
    if (!isOpen) {  // Ensure modal isn't already open before setting state
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  return (
    <div className="container">
      <div className="project-container">
        <div className="sidebar">
            <ul>
                <li><a href="#overview" className={activeSection === 'overview' ? 'active' : ''}>0 - overview</a></li>
                <li><a href="#research" className={activeSection === 'research' ? 'active' : ''}>1 - research</a></li>
                <li><a href="#empathize" className={activeSection === 'empathize' ? 'active' : ''}>2 - empathize</a></li>
                <li><a href="#design" className={activeSection === 'design' ? 'active' : ''}>3 - design</a></li>
                <li><a href="#test" className={activeSection === 'test' ? 'active' : ''}>4 - test</a></li>
                <li><a href="#takeaways" className={activeSection === 'takeaways' ? 'active' : ''}>5 - takeaways</a></li>
            </ul>
        </div>
        <div className="content">
            <img src={imageProject} alt='Open Lightbox view for PhotoClock project' className="project-image" onClick={() => handleClickImage(0)} />
            <section id="overview" ref={sectionRefs.current.overview}>
              <div className="overview-container">
                <div>
                  <h2>Overview</h2>
                  <p>PhotoClock is an iOS mobile app that enables people to revisit their photos previously taken at the same ‘clock time’ of the present moment. Following the ongoing flow of time, users perceive different memories in a dynamic manner. This project specifically provoke a question of when people would like their memories to re-emerge and how memories could be interconnected to enrich personal reflection.</p>
                </div>
                <div>
                  <h2>Team</h2>
                  <h6>Project Lead & Design Researcher</h6>Amy Yo Sue Chen
                  <h6>Design & Writing Supervisor</h6>William Odom
                  <h6>Writing Supervisor</h6>Carman Neustaedter
                  <h6>Data Analysis Assistant</h6>Sol Kang
                </div>
              </div>
              <div>
                <h2>Contribution / Impact</h2>
                <ul>
                  <li>This project discovered a strategy to use 'clock time' as a design material to reorganize photos.</li>
                  <li>We created an innovative way to view photos and to trigger people's memories more naturally.</li>
                  <li>3 research publications in top-tier HCI conferences (ACM CHI + DIS)</li>
                </ul>
              </div>
            </section>
            <section id="research" ref={sectionRefs.current.research}>
                <img src={imageContext} alt='PhotoClock' className="context-image" onClick={() => handleClickImage(1)} />
                <h2>1 - Research Context</h2>
                <div className="research-container">
                  <div>
                    <h3>Problem Statement</h3>
                    <p>The adoption of smartphones and low-cost cloud storage over the past decade has catalyzed a hyper-accelerated growth of personal photo archives. <b>As digital photos grow</b>, it becomes more <b>difficult for people to notice and engage</b> with their archive as an everyday resource.</p>
                  </div>
                  <div>
                    <h3>Research Goal</h3>
                    <p>We aim to explore the <b>factors and methods</b> that <b>evoke feelings of nostalgia, fulfillment, and significance</b> in individuals when they engage with photos. By gaining insights into the user needs, our objective is to introduce <b>innovative photo viewing approaches</b>.</p>
                  </div>
                </div>
                <div>
                  <h3>Question + Plan</h3>
                  <p><i>How to make digital photo more present, dynamic, and interactive to support more situated and reflective photo viewing experiences?</i></p>
                  <p>To answer this question, we built a qualitative research plan to understand user needs and explore potential design materials. Based on the research results, we kick started the PhotoClock design process.</p>
                </div>
                <div className="skills-container">
                  <div>
                    <h4>research methods</h4>
                    <ul>
                      <li>Focus group</li>
                      <li>Field study</li>
                      <li>Interview</li>
                    </ul>
                  </div>
                  <div>
                    <h4>design tools</h4>
                    <ul>
                      <li>Miro brainstorming</li>
                      <li>Figma prototyping</li>
                      <li>Adobe Suite</li>
                    </ul>
                  </div>
                  <div>
                    <h4>documentation</h4>
                    <ul>
                      <li>Google Suite</li>
                      <li>Otter.ai</li>
                      <li>Microsoft Word / LaTeX</li>
                    </ul>
                  </div>
                </div>
                <img src={imagePlan} alt='PhotoClock' className="plan-image" onClick={() => handleClickImage(2)} />
            </section>
            <section id="empathize" ref={sectionRefs.current.empathize}>
                <img src={imageFocusGroup} alt='PhotoClock' className="focus-group-image" onClick={() => handleClickImage(3)} />
                <h2>2 - Empathize</h2>
                <p>To understand the user needs, we conducted an <b>online focus group</b> on Zoom with 5 participants. We invited participants to generate insights through co-creating answers to questions in a <b>Figma</b> board.</p>
                <p>The results show that: </p>
                <ul>
                  <li>The conventional chronological photo viewing with <b>gallery view</b> does not present <b>memories associated with the present self</b>, so this form of viewing does not trigger memories deeply.</li>
                  <li>People desire new approaches to revisit their photo memories on <b>mobile phones</b>.</li>
                </ul>
                <div className="miro-container">
                  <div><img src={imageMiro} alt='PhotoClock' className="miro-image" onClick={() => handleClickImage(4)} /></div>
                  <div>
                    <p>After analyzing the data on a <b>Miro</b> board, our results show that people care the most about <b>the why and when </b>they are browsing their photos.</p>
                    <p>Thus, our research team decided to make use of the <b>timestamp of when each photo was taken</b>.</p>
                  </div>
                </div>
            </section>
            <section id="design" ref={sectionRefs.current.design}>
                <h2>3 - Design</h2>
                <p>When your test database is filled with realistic looking data, you'll be more engaged as a tester. When you demonstrate new features to others, they'll understand them faster. Real data is varied and will contain characters that may not play nice with your code, such as apostrophes, or unicode characters from other languages. Testing with realistic data will make your app more robust because you'll catch errors that are likely to occur in production before release day.</p>
            </section>
            <section id="test" ref={sectionRefs.current.test}>
                <h2>4 - Test</h2>
                <p>There are plenty of great data mocking libraries available for almost every language and platform. But not everyone is a programmer or has time to learn a new framework. Mockaroo allows you to quickly and easily to download large amounts of randomly generated test data based on your own specs which you can then load directly into your test environment using SQL or CSV formats. No programming is required.</p>
            </section>
            <section id="takeaways" ref={sectionRefs.current.takeaways}>
                <h2>5 - Takeaways</h2>
                <p>Concluding remarks and outcomes of the PhotoClock project...</p>
                <div>
                  <h3>How Research Changed the Design Direction</h3>
                  <p>This research has significantly influenced the design direction by leveraging insights from participants. It has yielded evidence regarding potential new design elements for systems that facilitate the coexistence of individuals with their ever-expanding digital data and possessions.</p>
                </div>
            </section>

            {/* Lightbox modal */}
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default PhotoClockDetail;