import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import '../styles.css';
import {Container, Box, Typography} from "@mui/material";

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const SkillSwipe = ({cards, title}) => {
  const [gone] = useState(() => new Set());
  const [startAnimation] = useState(false);

  const [props, api] = useSprings(cards.length, i => ({
      ...to(i),
      from: startAnimation ? from(i) : to(i),
      reset: true,
      config: {tension: 500, friction: 50}
  }));

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);

    api.start(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });

    if (!down && gone.size === cards.length) {
      setTimeout(() => {
        gone.clear();
        api.start(i => to(i));
      }, 600);
    }
  });

   return (
    <Container
      sx={{
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          mb: 4,
          zIndex: 1,
          position: 'relative',
          top: '-100px',
        }}
      >
        <Typography variant="h2" color="textPrimary" gutterBottom>
            {title} <Typography variant='body2'>Swipe the skills!</Typography>
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {props.map(({ x, y, rot, scale }, i) => (
            <animated.div className="deck" key={i} style={{x, y}}>
                <animated.div
                    {...bind(i)}
                    style={{
                        transform: interpolate([rot, scale], trans) ,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                >
                    {cards[i]}
                </animated.div>
            </animated.div>
        ))}
      </Box>
    </Container>
   );
};

export default SkillSwipe;
