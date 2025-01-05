import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export type AnimatedSVGLayoutProps = {
  isAnimating: boolean;
  onAnimationComplete: () => void;
  entities: React.ReactNode[];
  startIndex: number;
  endIndex: number;
  activeIndexes?: number[]; // 追加: アクティブなインデックスの配列
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
  startIndex,
  endIndex,
  activeIndexes = [],
  className = "",
  lineColor = "#D1D5DB", // gray-300
  dotColor = "#000000", // black
  dotSize = 6, // px
  lineWidth = 100, // px
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
    const isActive = activeIndexes.includes(index);
    return (
      <React.Fragment key={index}>
        <div className="flex-1 flex justify-center relative">
          <div
            className="relative"
            style={{
              maxWidth: `${entitySize}px`,
              maxHeight: `${entitySize}px`,
            }}
          >
            {/* animated active circle */}
            {isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-4 h-4 border-8 border-green-500 rounded-full placeholder-opacity-95" />
                <div className="absolute w-8 h-8 border-2 border-green-500 rounded-full opacity-80">
                  <div className="absolute inset-0 border-8 border-green-500 rounded-full animate-ping scale-50" />
                </div>
              </div>
            )}
            {entity}
          </div>
        </div>
        {index < entities.length - 1 && (
          <div
            className="flex justify-center items-center z-0 relative"
            style={{ width: lineWidth }}
          >
            <div
              className="w-full h-px relative"
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
                      className="absolute top-1/2 -translate-y-1/2"
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
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={className}>
      <div className="w-full h-48 flex justify-between items-center relative">
        {elements}
      </div>
    </div>
  );
};
