import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export type AnimatedSVGLayoutProps = {
  isAnimating: boolean;
  onAnimationComplete: () => void;
  entities: Array<(active: boolean) => React.ReactNode>;
  messages?: string[][];
  startIndex: number;
  endIndex: number;
  activeIndexes?: number[];
  waitIndexes?: number[];
  className?: string;
  lineColor?: string;
  dotColor?: string;
  dotSize?: number;
  lineWidth?: number;
  lineHeight?: number;
  entitySize?: number;
  animationDuration?: number;
};

export const AnimatedSVGLayout = ({
  isAnimating,
  onAnimationComplete,
  entities,
  messages = [],
  startIndex,
  endIndex,
  activeIndexes = [],
  waitIndexes = [],
  className = "",
  lineColor = "#D1D5DB", // gray-300
  dotColor = "#000000", // black
  dotSize = 12, // px
  lineWidth = 200, // px
  lineHeight = 2, // px
  entitySize = 60, // px
  animationDuration = 1.0,
}: AnimatedSVGLayoutProps) => {
  // Validate indices
  if (
    startIndex < 0 ||
    endIndex < 0 ||
    startIndex >= entities.length ||
    endIndex >= entities.length
  ) {
    console.error("Invalid start or end index");
    return null;
  }

  // Calculate animation direction and position
  const isForward = startIndex < endIndex;
  const animationStartPosition = isForward ? 0 : lineWidth;
  const animationEndPosition = isForward ? lineWidth : 0;

  const circleVariants = {
    initial: {
      left: animationStartPosition,
      opacity: 1,
    },
    animate: {
      left: animationEndPosition,
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Generate SVG and line elements
  const elements = entities.map((entity, index) => {
    const isWaiting = waitIndexes.includes(index);
    const isActive = activeIndexes.includes(index);
    const nodeMessages = messages[index] || [];

    return (
      <React.Fragment key={index}>
        <div className="relative flex flex-1 justify-center">
          <div
            className="relative"
            style={{
              maxWidth: `${entitySize}px`,
              maxHeight: `${entitySize}px`,
            }}
          >
            {/* animated waiting circle */}
            {isWaiting && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-4 w-4 rounded-full border-8 border-green-500 placeholder-opacity-95" />
                <div className="absolute h-8 w-8 rounded-full border-2 border-green-500 opacity-80">
                  <div className="absolute inset-0 scale-50 animate-ping rounded-full border-8 border-green-500" />
                </div>
              </div>
            )}
            {entity(isActive)}
          </div>
        </div>
        {index < entities.length - 1 && (
          <div
            className="relative z-0 flex items-center justify-center"
            style={{ width: lineWidth }}
          >
            <div
              className="absolute top-0 w-full"
              style={{
                backgroundColor: lineColor,
                height: lineHeight,
              }}
            >
              {((isForward && index === startIndex) ||
                (!isForward && index === endIndex)) && (
                <AnimatePresence>
                  {isAnimating && (
                    <motion.div
                      className="-translate-y-1/2 absolute top-1/2"
                      variants={circleVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      onAnimationComplete={onAnimationComplete}
                    >
                      <div
                        className="rounded-full"
                        style={{
                          backgroundColor: dotColor,
                          width: dotSize,
                          height: dotSize,
                          marginLeft: -dotSize / 2,
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
            {nodeMessages.length > 0 && (
              <div className="absolute top-2 right-0 left-0 flex flex-col items-center font-bold text-sm">
                {nodeMessages.map((message, msgIndex) => (
                  <div
                    key={msgIndex}
                    className="whitespace-nowrap text-gray-600"
                  >
                    - {message}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={className}>
      <div className="relative flex h-48 w-full items-center justify-between">
        {elements}
      </div>
    </div>
  );
};
