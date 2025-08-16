"use client";

import React from "react";

type ToggleOption = "Projects" | "Experience" | "Timeline";

interface ThreeToggleButtonProps {
  className?: string;
  onChange?: (value: ToggleOption) => void;
  initial?: ToggleOption;
  isUserControlled?: boolean;
  onUserControl?: (controlled: boolean) => void;
}

const options: ToggleOption[] = ["Projects", "Experience", "Timeline"];

const ThreeToggleButton: React.FC<ThreeToggleButtonProps> = ({
  className = "",
  onChange,
  initial = "Projects",
  isUserControlled = false,
  onUserControl,
}) => {
  const [active, setActive] = React.useState<ToggleOption>(initial);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-switch every 4 seconds
  React.useEffect(() => {
    if (isUserControlled) {
      // Clear interval if user has taken control
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActive((current) => {
        const currentIndex = options.indexOf(current);
        const nextIndex = (currentIndex + 1) % options.length;
        return options[nextIndex];
      });
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isUserControlled]);

  // Separate effect for calling onChange to avoid render issues
  React.useEffect(() => {
    onChange?.(active);
  }, [active, onChange]);

  const handleClick = (value: ToggleOption) => {
    // Stop auto-switching once user clicks
    onUserControl?.(true);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setActive(value);
    onChange?.(value);
  };

  return (
    <div
      className={`flex mb-8 rounded-lg p-1.5 bg-[#E1E0D3] dark:bg-[#1D2D44] ${className}`}
    >
      {options.map((label) => {
        const isActive = active === label;
        return (
          <button
            key={label}
            type="button"
            onClick={() => handleClick(label)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E455D] dark:focus-visible:ring-[#D1D4CD] focus-visible:ring-offset-transparent cursor-pointer ${
              isActive
                ? "bg-[#D1D4CD] dark:bg-[#2E455D] text-[#0D1321] dark:text-white shadow-sm transform"
                : "text-[#0D1321]/70 dark:text-white/70 hover:text-[#0D1321] dark:hover:text-white hover:bg-[#D1D4CD]/30 dark:hover:bg-[#2E455D]/30"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ThreeToggleButton;