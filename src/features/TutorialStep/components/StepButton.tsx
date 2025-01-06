export type StepButton = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};

export const StepButton = ({ children, onClick, disabled }: StepButton) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-2 transition-all duration-200 ${
        disabled
          ? "cursor-not-allowed bg-gray-200 text-gray-400"
          : "bg-lab-blue-500 text-white hover:bg-lab-blue-700"
      }
        `}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
