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
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-[#0D1321] dark:text-white">{title}</h3>
        <p className="mb-4 text-[#0D1321]/70 dark:text-white/70">{description}</p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-xs rounded-full mr-2 mb-2 bg-[#D1D4CD] dark:bg-[#2E455D] text-[#0D1321] dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#0D1321]/80 dark:text-white/80 hover:underline"
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
              className="flex items-center gap-2 text-sm text-[#0D1321]/80 dark:text-white/80 hover:underline"
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
