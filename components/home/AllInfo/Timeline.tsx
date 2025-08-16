import React, { useState } from "react";
import TimelineCard, { TimelineItem } from "@/components/ui/TimelineCard";

type TimelineEntry = {
  date: string;
  items: TimelineItem[];
  leadingIcon?: React.ReactNode;
  isHighlight?: boolean;
};

const timelineData: TimelineEntry[] = [
  // Present - Working at Makunai
  {
    date: "Jun 15, 2025 – Present",
    items: [
      { 
        parts: [
          { type: "text", text: "Building Babbler – omnichannel SaaS platform with WhatsApp Cloud API, template management, and real-time chat. This project represents everything I've learned, combining scalable architecture with enterprise features." }
        ]
      },
    ],
  },
  
  // Hackathon Victory
  {
    date: "June 2025",
    isHighlight: true,
    items: [
      {
        parts: [
          { type: "text", text: "🏆 Won college hackathon with " },
          { type: "link", text: "SHNK CLI", href: "https://github.com/Ganesh-Sharmaz/SHNK" },
          { type: "text", text: " (" },
          { type: "link", text: "Download", href: "https://sourceforge.net/projects/shnk/" },
          { type: "text", text: ") – Python CLI that automates React + Tailwind project setup, dependencies, and dev servers. Finally, a tool that eliminates repetitive development tasks!" }
        ]
      }
    ],
    leadingIcon: <span>🏆</span>,
  },

  // VMM Project
  {
    date: "May–Jun 2025",
    items: [
      {
        parts: [
          { type: "text", text: "Created VMM (Vishal Mega Mart Security Exam) – a viral satirical project! Built complete SEO platform with news, mock tests, results, and admin CMS using Firebase. Applied all SEO techniques learned during internship." }
        ]
      },
      {
        parts: [
          { type: "link", text: "VMM Site", href: "https://vmm-one.vercel.app/" },
          { type: "text", text: " • " },
          { type: "link", text: "Admin", href: "https://vmm-one.vercel.app/admin" },
          { type: "text", text: " • " },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/vmm" }
        ]
      }
    ],
  },

  // Internship Period
  {
    date: "Mar 10 – Jun 15, 2025",
    isHighlight: true,
    items: [
      {
        parts: [
          { type: "text", text: "Front-End Developer Intern at " },
          { type: "link", text: "Makunai Global", href: "https://www.makunaiglobal.ai/" },
          { type: "text", text: ". Worked simultaneously on College Hai (SEO platform) and Admin-UI CRM. This experience taught me enterprise development and managing multiple complex projects." }
        ]
      }
    ],
  },

  // Landing the Internship
  {
    date: "Mar 10, 2025",
    isHighlight: true,
    items: [
      {
        parts: [
          { type: "text", text: "🎯 Landed my first tech internship! Joined " },
          { type: "link", text: "Makunai Global", href: "https://www.makunaiglobal.ai/" },
          { type: "text", text: " as Front-End Developer Intern. All those months of preparation finally paid off – from self-taught to professional contributor." }
        ]
      }
    ],
    leadingIcon: <span>🎯</span>,
  },

  // StorageBuddy Documentation
  {
    date: "Feb–Mar 2025",
    items: [
      {
        parts: [
          { type: "text", text: "Built " },
          { type: "link", text: "StorageBuddy Documentation", href: "https://github.com/Ganesh-Sharmaz/StorageBuddyDocs" },
          { type: "text", text: " with Next.js and Framer. Created comprehensive docs with guides, API references, and examples. Learned how good documentation makes or breaks a library." }
        ]
      }
    ],
  },

  // Interview Preparation
  {
    date: "Jan–Feb 2025",
    items: [
      {
        parts: [
          { type: "text", text: "📚 Intensive preparation for internships – revisited CS fundamentals, data structures, algorithms, and polished React/TypeScript skills. Sometimes stepping back to strengthen foundations is the best way forward." }
        ]
      }
    ],
    leadingIcon: <span>📚</span>,
  },

  // StorageBuddy Creation
  {
    date: "Dec 2024 – Jan 2025",
    items: [
      {
        parts: [
          { type: "text", text: "Built " },
          { type: "link", text: "StorageBuddy", href: "https://www.npmjs.com/package/storagebuddy" },
          { type: "text", text: " (" },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/StorageBuddy" },
          { type: "text", text: ") – zero-dependency TypeScript library unifying localStorage, sessionStorage, and cookies. Published on npm for React/Next.js developers. My entry into open-source!" }
        ]
      }
    ],
  },

  // Birthday & YapperAI
  {
    date: "Nov–Dec 2024",
    isHighlight: true,
    items: [
      {
        parts: [
          { type: "text", text: "🎉 Celebrated 21st birthday on Dec 27 while shipping " },
          { type: "link", text: "YapperAI", href: "https://yapper-ai.vercel.app/" },
          { type: "text", text: " (" },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/YapperAI" },
          { type: "text", text: ") – multi-persona chatbot with Next.js, Gemini Flash 1.5, and Firebase. Best birthday gift to myself!" }
        ]
      }
    ],
    leadingIcon: <span>🎉</span>,
  },

  // TypeScript & Next.js Learning
  {
    date: "Sep–Oct 2024",
    items: [
      {
        parts: [
          { type: "text", text: "Mastered TypeScript and Next.js – the game-changing combo that revolutionized my development. Built practice apps to understand static typing, SSR, and the Next.js ecosystem. This elevated my code quality significantly." }
        ]
      }
    ],
  },

  // GrabTube Project
  {
    date: "Jul–Aug 2024",
    items: [
      {
        parts: [
          { type: "text", text: "Built GrabTube – full-stack YouTube downloader with React frontend and Flask backend. Integrated yt-dlp and FFmpeg for video processing. Learned full-stack architecture and media workflows." }
        ]
      },
      {
        parts: [
          { type: "link", text: "Frontend", href: "https://grab-tube.vercel.app/" },
          { type: "text", text: " (" },
          { type: "link", text: "Code", href: "https://github.com/Ganesh-Sharmaz/GrabTubeFrontend" },
          { type: "text", text: ") • " },
          { type: "link", text: "Backend", href: "https://github.com/Ganesh-Sharmaz/GrabTubeBackend" },
          { type: "text", text: " (Flask + yt-dlp + FFmpeg)" }
        ]
      }
    ],
  },

  // Groovy Spotify Clone
  {
    date: "Jun 2024",
    items: [
      {
        parts: [
          { type: "text", text: "Created " },
          { type: "link", text: "Groovy", href: "https://groovy-nine.vercel.app/" },
          { type: "text", text: " (" },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/SpotifyClone" },
          { type: "text", text: ") – Spotify-inspired music app with responsive grids, search, and smooth animations. Perfected component composition with React + Tailwind." }
        ]
      }
    ],
  },

  // React Learning & Early Projects
  {
    date: "Mar–May 2024",
    items: [
      {
        parts: [
          { type: "text", text: "Dove deep into React – hooks, state management, lifecycle, modern patterns. This transformed how I think about building UIs, shifting from vanilla JS to component-based architecture." }
        ]
      },
      {
        parts: [
          { type: "text", text: "Built " },
          { type: "link", text: "AnimeWaifus", href: "https://anime-waifus.vercel.app/" },
          { type: "text", text: " (" },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/AnimeWaifuss" },
          { type: "text", text: ") – dynamic React app with category features and content toggles, plus earlier projects: " },
          { type: "link", text: "Asking for a Date", href: "https://asking-for-a-date-from-your-crush.vercel.app/" },
          { type: "text", text: " (" },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/Asking-for-a-Date-from-your-Crush" },
          { type: "text", text: ") • " },
          { type: "link", text: "Password Generator", href: "https://password-web.vercel.app/" },
          { type: "text", text: " (" },
          { type: "link", text: "GitHub", href: "https://github.com/Ganesh-Sharmaz/PasswordWeb" },
          { type: "text", text: ")" }
        ]
      }
    ],
  },

  // JavaScript Learning
  {
    date: "Feb 2024",
    items: [
      {
        parts: [
          { type: "text", text: "Mastered JavaScript fundamentals and DOM manipulation. Learned closures, prototypes, async/await, and ES6+ features. Understanding the language that powers the web was crucial for everything that followed." }
        ]
      }
    ],
  },

  // HTML & CSS Foundation
  {
    date: "Jan 2024",
    items: [
      {
        parts: [
          { type: "text", text: "Started web development with HTML & CSS. Learned semantic markup, flexbox, grid, and responsive design. Built countless small UIs and layouts – the foundation for everything ahead." }
        ]
      }
    ],
  },

  // The Beginning
  {
    date: "Nov 2023",
    items: [
      {
        parts: [
          { type: "text", text: "🌱 The journey began with Python for college (CodeTantra) and daily coding practice. Little did I know this first step would lead to an incredible adventure spanning multiple technologies and countless projects." }
        ]
      }
    ],
    leadingIcon: <span>🌱</span>,
  },
];

const Timeline = () => {
  const [showAll, setShowAll] = useState(true);
  const displayedEntries = showAll ? timelineData : timelineData.slice(0, 8);

  return (
    <div className="relative ml-2 border-l pl-6 space-y-10 border-[#D1D4CD] dark:border-[#2E455D]">
      {displayedEntries.map((entry) => (
        <TimelineCard
          key={entry.date}
          dateLabel={entry.date}
          items={entry.items}
          leadingIcon={entry.leadingIcon}
          isHighlight={entry.isHighlight}
        />
      ))}
      
      {!showAll && timelineData.length > 9 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-sm text-[#4A6FA5] dark:text-[#87CEEB] underline cursor-pointer"
          >
            Show complete journey ({timelineData.length - 9} more milestones)
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;