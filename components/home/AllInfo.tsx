import React from "react";
import ThreeToggleButton from "../ui/ThreeToggleButton";
import ProjectBox from "@/components/home/AllInfo/ProjectBox";
import ExperienceBox from "@/components/home/AllInfo/ExperienceBox";
import Timeline from "@/components/home/AllInfo/Timeline";

const AllInfo = () => {
  const [selected, setSelected] = React.useState<"Projects" | "Experience" | "Timeline">("Projects");
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isUserControlled, setIsUserControlled] = React.useState(false);

  const handleToggleChange = React.useCallback((val: "Projects" | "Experience" | "Timeline") => {
    if (val === selected) return;
    
    setIsTransitioning(true);
    
    // Small delay to allow fade out before changing content
    setTimeout(() => {
      setSelected(val);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Short delay for fade in
    }, 150);
  }, [selected]);

  // Function to stop auto-switching when user interacts with content
  const handleUserInteraction = React.useCallback(() => {
    if (!isUserControlled) {
      setIsUserControlled(true);
    }
  }, [isUserControlled]);

  const renderContent = () => {
    const commonProps = {
      onClick: handleUserInteraction,
      onMouseEnter: handleUserInteraction,
      onFocus: handleUserInteraction,
      onScroll: handleUserInteraction,
    };

    switch (selected) {
      case "Projects":
        return (
          <div {...commonProps}>
            <ProjectBox />
          </div>
        );
      case "Experience":
        return (
          <div {...commonProps}>
            <ExperienceBox />
          </div>
        );
      case "Timeline":
        return (
          <div {...commonProps}>
            <Timeline />
          </div>
        );
      default:
        return (
          <div {...commonProps}>
            <ProjectBox />
          </div>
        );
    }
  };

  return (
    <div className="sm:my-12 my-6 max-w-4xl mx-auto w-full font-main no-scrollbar px-4 sm:px-0">
      <ThreeToggleButton 
        onChange={handleToggleChange} 
        initial="Projects" 
        className="font-semibold"
        isUserControlled={isUserControlled}
        onUserControl={setIsUserControlled}
      />
      <div className="min-h-[300px] font-main relative">
        <div 
          className={`transition-opacity duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AllInfo;