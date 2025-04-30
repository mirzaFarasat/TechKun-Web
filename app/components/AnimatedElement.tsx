// import { motion, Variants } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { ReactNode, useMemo } from 'react';

// type Direction = 'up' | 'down' | 'left' | 'right';

// interface AnimatedElementProps {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
//   direction?: Direction;
//   distance?: number;
//   once?: boolean;
//   reappear?: boolean;
// }

// const getBaseVariants = (delay: number = 0): Variants => ({
//   hidden: {
//     opacity: 0,
//     transition: {
//       duration: 0,
//       delay: 0
//     }
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       duration: 0.8,
//       delay,
//       bounce: 0.2,
//       damping: 15
//     }
//   }
// });

// const directionToTransform = {
//   up: (distance: number) => ({ y: distance }),
//   down: (distance: number) => ({ y: -distance }),
//   left: (distance: number) => ({ x: distance }),
//   right: (distance: number) => ({ x: -distance })
// };

// export const AnimatedElement = ({
//   children,
//   className = "",
//   delay = 0,
//   direction = 'up',
//   distance = 40,
//   once = true,
//   reappear = false
// }: AnimatedElementProps) => {
//   const { ref, controls } = useScrollAnimation<HTMLDivElement>({
//     threshold: 0.2,
//     rootMargin: "-5%",
//     once,
//     reappear
//   });

//   const variants = useMemo(() => {
//     const baseVariants = getBaseVariants(delay);
//     const transform = directionToTransform[direction](distance);

//     return {
//       hidden: {
//         ...baseVariants.hidden,
//         ...transform
//       },
//       visible: {
//         ...baseVariants.visible,
//         x: 0,
//         y: 0
//       }
//     };
//   }, [distance, delay, direction]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={variants}
//       style={{
//         willChange: 'transform, opacity',
//         backfaceVisibility: 'hidden'
//       }}
//       className={`transform-gpu ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// };