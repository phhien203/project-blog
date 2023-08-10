'use client';

import { MotionConfig } from 'framer-motion';

function RespectUserMotion({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectUserMotion;
