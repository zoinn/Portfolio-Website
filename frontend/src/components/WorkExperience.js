import React, { useState, useEffect } from 'react';
import { useSpring, useTransition, animated, useSpringRef} from '@react-spring/web';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import thrivechella from '../assets/images/Thrivechella.png';
import unicorn from '../assets/images/Unicorn.jpg';
import polaroid from '../assets/images/Friends.jpg';

const FlipSide = ({image, caption}) => {
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateX(${flipped ? 0 : 180}deg)`,
    config: { mass: 20, tension: 500, friction: 80 }
  });
    return (
        <div className="container" onClick={() => setFlipped((state) => !state)} style={{ width: '100%', height: '100%' }}>
            <animated.div className="flip front"
                          style={{
                              opacity,
                              transform,
                              backgroundImage: `url(${image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              width: '100%',
                              height: '100%',
                              rotateX: "180deg"
                          }} />
            <animated.div className="flip back" style={{ opacity: opacity.to(o => 1 - o), transform, width: '100%', height: '100%' }}>
                <Box sx={{ padding: 2 }}>
                    <Typography variant="body1" color="textSecondary" sx={{ fontSize: '0.875rem' }}>
                        {caption}
                    </Typography>
                </Box>
            </animated.div>
        </div>
    );
};

const ThrivePageOne = () => {
    return(
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} sx={{textAlign: 'left', mt: 8}}>
            <Typography variant="h3" color="textSecondary" paragraph paddingBottom='15vh'>
                <strong>What is Thrive?</strong>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FlipSide
                image={thrivechella}
                caption="An EduTech company focused on refining the learning experience, utilizing a social network like app that allows for interactive and engaging learning."
            />
        </Grid>
        </Grid>
)};

const ThrivePageTwo = () => {
    return(
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} sx={{textAlign: 'left', mt: 8}}>
            <Typography variant="h3" color="textSecondary" paragraph paddingBottom='15vh'>
                <strong>Who is Thrive?</strong>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FlipSide
                image={unicorn}
                caption="An EduTech company focused on refining the learning experience, utilizing a social network like app that allows for interactive and engaging learning."
            />
        </Grid>
        </Grid>
)};

const ThrivePageThree = () => {
    return(
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6} sx={{textAlign: 'left', mt: 8}}>
            <Typography variant="h3" color="textSecondary" paragraph paddingBottom='15vh'>
                <strong>Where is Thrive?</strong>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FlipSide
                image={polaroid}
                caption="An EduTech company focused on refining the learning experience, utilizing a social network like app that allows for interactive and engaging learning."
            />
        </Grid>
        </Grid>
)};

const ThrivePages = [
    ({ style }) => <animated.div style={{ ...style, position: 'absolute', width: '100%' }}><ThrivePageOne /></animated.div>,
    ({ style }) => <animated.div style={{ ...style, position: 'absolute', width: '100%' }}><ThrivePageTwo /></animated.div>,
    ({ style }) => <animated.div style={{ ...style, position: 'absolute', width: '100%' }}><ThrivePageThree /></animated.div>,
];

const ChangePage = ({ transitions }) => {
    return (
        <>
            {transitions((style, i) => {
                const Page = ThrivePages[i];
                return <Page style={style} />;
            })}
        </>
    );
};

const WorkExperience = () => {
    const [index, set] = useState(0);
    const prev = () => {
        set(state => (state + 2) % 3);
        setDirection('prev');
    }
    const next = () => {
    set(state => (state + 1) % 3);
    setDirection('next');
    }

    const[direction, setDirection] = useState(0);
    const transRef = useSpringRef();
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: direction === 'next'
            ? { opacity: 0, transform: 'translate3d(100%,0,0)' }
            : { opacity: 0, transform: 'translate3d(-100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: direction === 'next'
            ? { opacity: 0, transform: 'translate3d(-50%,0,0)' }
            : { opacity: 0, transform: 'translate3d(50%,0,0)' },
    });

    useEffect(() => {
        transRef.start();
    }, [index, transRef]);

    return (
        <Container sx = {{paddingTop: '50vh' ,paddingBottom:"50vh"}}>
            <Typography variant="h2" align="center" sx={{ height: '25vh' }} gutterBottom>
                Work Experience
                <Typography variant="body2" align="center" sx={{ marginBottom: '40px'}}>
                Click The Image!
                </Typography>
            </Typography>
            <Box sx={{ width: '100%', marginBottom:'25vh', paddingTop:'25vh', marginTop: '-10vh', paddingBottom:'10vh', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <Button onClick={prev} sx={{backgroundColor: '#1f1f1f !important',position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1}}>
                    <ArrowBackIcon fontSize="large" color="secondary"/>
                </Button>
                <Container maxWidth="lg" sx={{position: 'relative', height: '100%'}}>
                    <ChangePage  transitions={transitions} />
                </Container>
                <Button onClick={next} sx={{backgroundColor: '#1f1f1f !important',position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1}}>
                    <ArrowForwardIcon fontSize="large" color="secondary"/>
                </Button>
            </Box>
        </Container>
    );
};

export default WorkExperience;
