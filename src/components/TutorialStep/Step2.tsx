import { useState } from "react";

import { AnimatedSVGLayout } from "./AnimatedSVG";
import { AuthenticatorEntity, BrowserEntity, ServerEntity } from "./entities";

export const Step2 = () => {
  const [isAnimating, setIsAnimating] = useState<0 | 1 | 2 | 3>(0);
  const from = isAnimating === 1 ? 2 : 1;
  const to = isAnimating === 1 ? 1 : 0;

  const entities = [
    <AuthenticatorEntity key="0" />,
    <BrowserEntity key="1" />,
    <ServerEntity key="2" />,
  ];

  return (
    <>
      <div className="w-full flex justify-center mt-8">
        <button
          onClick={() => setIsAnimating(+1)}
          disabled={isAnimating === 1 || isAnimating === 2}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          type="button"
        >
          アニメーション開始
        </button>
      </div>

      <AnimatedSVGLayout
        isAnimating={isAnimating !== 0}
        onAnimationComplete={() =>
          setIsAnimating((isAnimating + 1) as 0 | 1 | 2 | 3)
        }
        entities={entities}
        startIndex={from} // Square から
        endIndex={to} // Circle へ
        className="w-full"
      />
    </>
  );
};
