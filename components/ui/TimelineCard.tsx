import React from "react";

export interface TimelineItemPart {
  type: "text" | "link";
  text: string;
  href?: string;
}

export interface TimelineItem {
  parts: TimelineItemPart[];
}

interface TimelineCardProps {
  dateLabel: string;
  items: TimelineItem[];
  className?: string;
  leadingIcon?: React.ReactNode;
  isHighlight?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ 
  dateLabel, 
  items, 
  className = "", 
  leadingIcon,
  isHighlight = false
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute -left-[1.85rem] top-2 w-3 h-3 rounded-full ${
        isHighlight 
          ? 'bg-[#4A6FA5] dark:bg-[#87CEEB] border-2 border-white dark:border-[#1D2D44]' 
          : 'bg-[#2E455D] dark:bg-[#D1D4CD] border-2 border-white dark:border-[#1D2D44]'
      }`} />
      
      <div>
        <div className={`inline-flex items-center gap-1 rounded px-2 py-1 mb-3 text-xs font-semibold ${
          isHighlight 
            ? 'bg-[#4A6FA5] dark:bg-[#87CEEB] text-white dark:text-[#0D1321]' 
            : 'bg-[#E1E0D3] dark:bg-[#2E455D] text-[#0D1321] dark:text-white'
        }`}>
          {leadingIcon && <span>{leadingIcon}</span>}
          <span>{dateLabel}</span>
        </div>
        
        <ul className="mt-2 space-y-2">
          {items.map((item, idx) => (
            <li
              key={`${dateLabel}-${idx}-${item.parts.map(p => p.text).join("-").slice(0,50)}`}
              className="text-sm leading-relaxed list-disc ml-8 break-words text-[#0D1321] dark:text-white"
            >
              {item.parts.map((part, pIdx) =>
                part.type === "link" && part.href ? (
                  <a
                    key={`${part.text}-${pIdx}`}
                    className="underline text-[#4A6FA5] dark:text-[#87CEEB]"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={part.href}
                  >
                    {part.text}
                  </a>
                ) : (
                  <span key={`${part.text}-${pIdx}`}>{part.text}</span>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineCard;