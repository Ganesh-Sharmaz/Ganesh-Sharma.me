import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  sourceHref?: string;
  liveHref?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  sourceHref,
  liveHref,
  className = "",
}) => {
  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[rgba(255,255,255,0.2)] hover:shadow-md border-[#D1D4CD] dark:border-[#2E455D] ${className}`}
    >
      <div className="sm:p-6 p-4">
        <h3 className="text-lg font-medium sm:mb-2 mb-0 text-[#0D1321] dark:text-white">{title}</h3>
        <p className="sm:mb-4 mb-2 text-[#0D1321]/70 dark:text-white/70">{description}</p>
        <div className="flex flex-wrap sm:mb-4 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block sm:px-3 px-2 py-1 sm:text-xs text-[10px] rounded-full sm:mr-2 mr-1 sm:mb-2 mb-1 bg-[#D1D4CD] dark:bg-[#2E455D] text-[#0D1321] dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex sm:space-x-3 space-x-2">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:gap-2 gap-1 text-sm text-[#0D1321]/80 dark:text-white/80 hover:underline"
            >
              <ExternalLink size={16} />
              <span>View Project</span>
            </a>
          ) : null}
          {sourceHref ? (
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:gap-2 gap-1 text-sm text-[#0D1321]/80 dark:text-white/80 hover:underline"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
