"use client";
import { Header } from "@/components/Header/Header";
import { Step1, Step2 } from "@/components/TutorialStep";
import { Check } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const sections = [
    {
      title: "Issue VC",
      steps: [
        {
          title: "[Issuer] Request Commitment",
          description: "Request a commitment from the Holder's Private Key",
          content: <Step1 />,
        },
        {
          title: "[Authenticator] Generate Commitment",
          description: "Generate a commitment for the Holder's Private Key",
          content: <Step2 />,
        },
        {
          title: "[Issuer] Issue VC",
          content: "temp",
        },
        {
          title: "[Client] Obtain VC",
          content: "temp",
        },
      ],
    },
    {
      title: "Present VP",
      steps: [
        {
          title: "[Verifier] Request VP",
          content: "temp",
        },
        {
          title: "[Client] Choose Attributes to Present",
          content: "temp",
        },
        {
          title: "[Client & Device] Generate Proof",
          content: "temp",
        },
        {
          title: "[Verifier] Verify Proof",
          content: "temp",
        },
      ],
    },
  ];

  const allSteps = sections.flatMap((section) => section.steps);

  const nextStep = () => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  let globalStepCount = 0;

  return (
    <div>
      <Header />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-8 pb-24">
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* Section Title without vertical line */}
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  {section.title}
                </h2>

                {/* Steps container with vertical line */}
                <div className="relative space-y-8">
                  {/* Section-specific vertical line */}
                  <div className="absolute left-4 top-8 bottom-4 w-px bg-gray-200" />

                  {section.steps.map((step, index) => {
                    const stepNumber = ++globalStepCount;
                    const isCurrentStep = currentStep === stepNumber - 1;

                    return (
                      <div key={index} className="relative">
                        <div className="flex">
                          {/* Number circle */}
                          <div className="relative">
                            <div
                              className={`
                              w-8 h-8 rounded-full flex items-center justify-center
                              transition-all duration-500 transform z-10
                              ${
                                stepNumber - 1 < currentStep
                                  ? "bg-green-500 text-white"
                                  : stepNumber - 1 === currentStep
                                    ? "bg-lab-blue-500 text-white"
                                    : "bg-gray-200 text-gray-600"
                              }
                              ${isCurrentStep ? "scale-110 ring-pulse-animation" : "scale-100"}
                            `}
                            >
                              {stepNumber - 1 < currentStep ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                stepNumber
                              )}
                            </div>
                          </div>

                          {/* Content area */}
                          <div className="ml-4 flex-1">
                            <h3
                              className={`font-medium text-lg transition-colors duration-500 
                            ${
                              stepNumber - 1 < currentStep
                                ? "text-green-500"
                                : stepNumber - 1 === currentStep
                                  ? "text-lab-blue-600"
                                  : "text-gray-500"
                            }`}
                            >
                              {step.title}
                            </h3>
                            {step.description && (
                              <p className="text-sm text-gray-500 mt-1">
                                {step.description}
                              </p>
                            )}
                            {isCurrentStep && (
                              <div className="mt-2 text-gray-600 bg-white rounded-lg p-4 shadow-sm">
                                {step.content}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Progress line overlay */}
                        {stepNumber - 1 <= currentStep && (
                          <div
                            className="absolute left-4 top-8 w-px bg-lab-blue-500 transition-all duration-500"
                            style={{
                              height: isCurrentStep ? "100%" : "100%",
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`
                px-4 py-2 rounded-md
                transition-all duration-200
                ${
                  currentStep === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-lab-blue-500 text-white hover:bg-lab-blue-700"
                }
              `}
                type="button"
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={currentStep === allSteps.length - 1}
                className={`
                px-4 py-2 rounded-md
                transition-all duration-200
                ${
                  currentStep === allSteps.length - 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-lab-blue-500 text-white hover:bg-lab-blue-700"
                }
              `}
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
