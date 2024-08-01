import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Grid} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import RepoList from './components/RepoList';
import MainPage from './components/MainPage';
import FooterComponent from "./components/FooterComponent ";
import AboutMe from "./components/AboutMe";
import SkillSwipe from "./components/SkillSwipe";

// Used to shuffle array's every refresh
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

const skillcards = shuffle([
    'Machine Learning',
    'TDD',
    'Git',
    'AWS',
    'Azure',
    'Cypress',
    'MongoDB',
    'SQL',
    'REST API',
]);

const langcards = shuffle([
    'React',
    'Javascript',
    'Typescript',
    'C++',
    'C#',
    'Haskell',
    'Java',
    'HTML & CSS',
    'Python',
]);

const librarycards = shuffle([
    'Pandas',
    'Sci-kit',
    'Tensorflow',
    'Pytorch',
    'PostgreSQL',
    'OpenCV',
    'Numpy',
    'React-Spring',
]);

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
      <main style={{flex: 1}}>
        <animated.div ref={mainPageRef} style={mainPageProps}>
          <MainPage/>
        </animated.div>
        <animated.div ref={aboutMeRef} style={aboutMeProps}>
          <AboutMe/>
        </animated.div>
        <animated.div ref={skillsRef} style={skillsProps}>
          <Grid container spacing={3} sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <Grid item xs={9} sm={3}>
              <SkillSwipe cards={skillcards} title = "Skills"/>
            </Grid>
            <Grid item xs={9} sm={3}>
              <SkillSwipe cards={langcards} title = "Languages"/>
            </Grid>
            <Grid item xs={9} sm={3}>
              <SkillSwipe cards={librarycards} title = "Libraries"/>
            </Grid>
          </Grid>
        </animated.div>
        <animated.div ref={repoListRef} style={repoListProps}>
          <RepoList/>
        </animated.div>
      </main>
      <animated.div style={{opacity: 1, transform: 'translateY(0px)'}}>
        <FooterComponent/>
      </animated.div>
    </div>
  );
}

export default App;