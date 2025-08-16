import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  sourceHref?: string;
  liveHref?: string;
};

const mockProjects: ProjectItem[] = [
  {
    title: "SHNK – Dev Task Automation CLI",
    description:
      "Python CLI that scaffolds projects (React + Tailwind, Next.js soon), configures deps, and launches dev servers.",
    tags: ["Python", "CLI", "Automation", "Scaffolding"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/SHNK",
    liveHref: "https://sourceforge.net/projects/shnk/",
  },
  {
    title: "Yapper AI – Multi‑Persona Chatbot",
    description:
      "React + Tailwind app using Gemini Flash 1.5 with Firebase auth and markdown rendering for rich chat.",
    tags: ["React", "Tailwind", "Firebase", "Gemini", "Vercel"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/YapperAI",
    liveHref: "https://yapper-ai.vercel.app/",
  },
  {
    title: "StorageBuddy – Unified Web Storage SDK",
    description:
      "Zero‑dependency TS library that unifies localStorage, sessionStorage, and cookies with typed APIs.",
    tags: ["TypeScript", "Library", "LocalStorage", "SessionStorage", "Cookies", "npm"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/StorageBuddy",
    liveHref: "https://www.npmjs.com/package/storagebuddy",
  },
  {
    title: "StorageBuddy - Documentation",
    description:
      "Official documentation hub for StorageBuddy with guides, API refs, and examples.",
    tags: ["Docs", "TypeScript", "NextJS", "Framer"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/StorageBuddyDocs",
  },
  {
    title: "GrabTube – YouTube Downloader (Frontend)",
    description:
      "React frontend for downloading YouTube videos; integrates Flask backend, yt‑dlp and FFmpeg.",
    tags: ["React", "yt-dlp", "FFmpeg", "Vercel"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/GrabTubeFrontend",
    liveHref: "https://grab-tube.vercel.app/",
  },
  {
    title: "GrabTube – Backend (Flask)",
    description:
      "Flask backend powering GrabTube video download and muxing via yt‑dlp and FFmpeg.",
    tags: ["Python", "Flask", "yt-dlp", "FFmpeg"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/GrabTubeBackend",
  },
  {
    title: "Groovy – Spotify‑like Music App",
    description:
      "Music web app with responsive grid, search, and dynamic loading built with React + Tailwind.",
    tags: ["React", "Tailwind", "Music", "Vercel"],
    sourceHref: "https://github.com/Ganesh-Sharmaz/SpotifyClone",
    liveHref: "https://groovy-nine.vercel.app/",
  },
];

const ProjectBox = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {mockProjects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          tags={p.tags}
          sourceHref={p.sourceHref}
          liveHref={p.liveHref}
        />
      ))}
    </div>
  );
};

export default ProjectBox;
