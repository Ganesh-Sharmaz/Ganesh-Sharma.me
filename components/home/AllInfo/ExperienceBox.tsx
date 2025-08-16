import Link from "next/link";
import React from "react";

type Section = { title: string; timeRange: string; bullets: string[]; links?: { label: string; href: string }[] };

const sections: Section[] = [
  {
    title: "Babbler – Omnichannel SaaS (Meta tech provider)",
    timeRange: "June 15, 2025 – present",
    bullets: [
      "Integrated WhatsApp Embedded Signup for seamless onboarding with the Meta Business API.",
      "Built real-time chat via WebSockets with typing indicators, read receipts, and multi-agent updates.",
      "Engineered template creation, updates, and bulk sending via WhatsApp APIs with validation and error handling.",
      "Implemented server-side paginated DataTables with advanced filters, exports, and search for 10k+ records.",
      "Added NextAuth for secure role-based authentication and session handling.",
      "Designed contact management with bulk CSV import and tag-based segmentation.",
      "Improved UI responsiveness ~40% with debounced requests, memoization, and code-splitting.",
    ],
    links: [
      { label: "Babbler", href: "https://www.makunaiglobal.ai/babbler" },
      { label: "Babbler Console", href: "https://babbler.makunaiglobal.ai/dashboard" },
    ],
  },
  {
    title: "College Hai – Public SEO Platform",
    timeRange: "March 10, 2025 – June 15, 2025",
    bullets: [
      "Shipped SEO-friendly pages with optimized metadata, JSON-LD, and SSR to improve rankings.",
      "Implemented exam/news modules with category filters, infinite scroll, and optimized API requests.",
      "Developed a dynamic blog system with image optimization, prefetching, and Next.js Image.",
      "Built responsive, accessible UI components; boosted Lighthouse scores from 65 → 92+.",
      "Integrated ad management for banners with zero layout shifts.",
    ],
    links: [{ label: "collegehai.com", href: "https://collegehai.com/" }],
  },
  {
    title: "College Hai Admin‑UI – CRM for Admissions/Leads",
    timeRange: "March 10, 2025 – June 15, 2025",
    bullets: [
      "Developed scalable lead management with advanced search, filters, and status tracking (−50% retrieval time).",
      "Migrated Next.js 14 → 15; improved LCP/CLS/INP and cut page loads by 30%+ via profiling.",
      "Implemented frontend caching to reduce API load while preserving real-time accuracy.",
      "Built partner management dashboards for thousands of records with efficient pagination/sorting.",
      "Agile collaboration via JIRA; participated in standups, planning, and retrospectives.",
      "Resolved production issues, shipped hotfixes, and optimized APIs via selective population/caching.",
      "Authored Jest tests; enforced quality with ESLint and Husky.",
    ],
  },
];

const techTags = [
  "Next.js 14→15",
  "TypeScript",
  "Redux",
  "NextAuth",
  "JIRA",
  "Jest",
  "ESLint",
  "Husky",
  "GitHub",
  "Git",
  "Postman",
  "WebSockets",
  "Grafana",
  "Digital Ocean",
  "SonarQube",
  "WhatsApp Cloud API",
  "REST APIs",
];

const ExperienceBox = () => {
  return (
    <div className="space-y-12 ml-2">
      <div className="relative pl-8 border-l-2 border-[#D1D4CD] dark:border-[#2E455D]">
        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#2E455D] dark:bg-[#D1D4CD] border-2 border-white dark:border-[#1D2D44]"></div>
        <div className="mb-1 flex items-center justify-between">
          <h3 className="text-lg font-medium text-[#0D1321] dark:text-white">Front‑End Developer Intern <Link className="dark:text-[#D1D4CD] text-[#1D2D44] font-semibold" href={"https://www.makunaiglobal.ai/"}>@ Makunai Global Pvt. Ltd.</Link></h3>
          <span className="text-sm text-[#0D1321]/70 dark:text-white/70">March 10, 2025 – present</span>
        </div>
        <div className="text-xs text-[#0D1321]/70 dark:text-white/70 mb-3">WTT, Sector‑16, Noida, 201301</div>

        <div className="flex flex-wrap mb-4">
          {techTags.map((t) => (
            <span
              key={t}
              className="inline-block px-3 py-1 text-xs bg-[#D1D4CD] dark:bg-[#2E455D] rounded-full mr-2 mb-2 text-[#0D1321] dark:text-white"
            >
              {t}
            </span>
          ))}
        </div>

        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-medium text-[#0D1321] dark:text-white">{section.title}</h4>
              <span className="inline-block rounded px-2 py-0.5 text-[10px] bg-[#E1E0D3] dark:bg-[#2E455D] text-[#0D1321] dark:text-white">
                {section.timeRange}
              </span>
              {section.links?.map((l) => (
                <a
                  key={`${section.title}-${l.label}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-900 text-xs"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <ul className="mt-1 mb-3 space-y-1 text-[#0D1321]/80 dark:text-white/80">
              {section.bullets.map((b) => (
                <li key={`${section.title}-${b.slice(0,40)}`} className="flex"><span className="mr-2">•</span><span>{b}</span></li>
              ))}
            </ul>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default ExperienceBox;
