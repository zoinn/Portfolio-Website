import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import RepoList from './components/RepoList';
import MainPage from './components/MainPage';
import FooterComponent from "./components/FooterComponent ";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  const { ref: mainPageRef, inView: mainPageInView } = useInView({ triggerOnce: false });
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({ triggerOnce: false });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false });
  const { ref: repoListRef, inView: repoListInView } = useInView({ triggerOnce: false });

  const mainPageProps = useSpring({
    opacity: mainPageInView ? 1 : 0,
    transform: mainPageInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 100, friction: 50 },
  });

  const aboutMeProps = useSpring({
    opacity: aboutMeInView ? 1 : 0,
    transform: aboutMeInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 100, friction: 50 },
  });

  const skillsProps = useSpring({
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 100, friction: 50 },
  });

  const repoListProps = useSpring({
    opacity: repoListInView ? 1 : 0,
    transform: repoListInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 100, friction: 50 },
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1 }}>
        <animated.div ref={mainPageRef} style={mainPageProps}>
          <MainPage />
        </animated.div>
        <animated.div ref={aboutMeRef} style={aboutMeProps}>
          <AboutMe />
        </animated.div>
        <animated.div ref={skillsRef} style={skillsProps}>
          <Skills />
        </animated.div>
        <animated.div ref={repoListRef} style={repoListProps}>
          <RepoList />
        </animated.div>
      </main>
      <animated.div style={{ opacity: 1, transform: 'translateY(0px)' }}>
        <FooterComponent />
      </animated.div>
    </div>
  );
}

export default App;