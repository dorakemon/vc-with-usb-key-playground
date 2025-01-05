import { useState } from "react";

import { AuthenticatorIcon, BrowserIcon, ServerIcon } from "../Icons";
import { AnimatedSVGLayout } from "./AnimatedSVG";

export const Step2 = () => {
  const [isAnimating, setIsAnimating] = useState<0 | 1 | 2 | 3>(0);
  const from = isAnimating === 1 ? 2 : 1;
  const to = isAnimating === 1 ? 1 : 0;

  const svgItems = [
    {
      component: AuthenticatorIcon,
      props: { className: "text-blue-500" },
    },
    {
      component: BrowserIcon,
      props: { className: "text-green-500" },
    },
    {
      component: ServerIcon,
      props: { className: "text-purple-500" },
    },
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
        svgItems={svgItems}
        startIndex={from} // Square から
        endIndex={to} // Circle へ
        className="w-full"
      />
    </>
  );
};
