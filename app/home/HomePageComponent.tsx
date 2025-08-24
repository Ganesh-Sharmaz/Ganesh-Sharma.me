'use client'
import { useTheme } from "@/components/context/ThemeContext.Provider";
import AllInfo from "@/components/home/AllInfo";
import Details from "@/components/home/Details";
import Header from "@/components/home/Header";
import ClickSpark from "@/components/ui/ClickSpark";
import {  Terminal, Copy, ArrowUpDown } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback } from "react";

const HomePageComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const [showTerminal, setShowTerminal] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { type: "info", text: "Welcome to Ganesh's Terminal Portfolio" },
    { type: "info", text: "Type 'help' to see available commands" }
  ]);
  const [currentDirectory] = useState("~");
  const [history, setHistory] = useState<string[]>([]);
  const isTyping = false;

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const quickCommands = [
    { cmd: "gs name", desc: "Show name" },
    { cmd: "gs about", desc: "About me" },
    { cmd: "gs skills", desc: "My skills" },
    { cmd: "gs projects", desc: "Recent projects" },
    { cmd: "gs contact", desc: "Contact info" },
    { cmd: "clear", desc: "Clear terminal" }
  ];

  /* --- Theme-derived colors & panel styles --- */
  const isDark = theme === "dark";
  const terminalBg = isDark ? "bg-[#081124]" : "bg-[#F7F5EC]";
  const terminalText = isDark ? "text-[#E8E6DA]" : "text-[#0D1321]";
  const panelBg = isDark ? "rgba(20,30,45,0.6)" : "rgba(13,19,33,0.03)";
  const panelBorder = isDark ? "#1F3B56" : "#CAD3DB";

  /* --- helpers --- */
  const pushOutput = useCallback((items: unknown) => {
    setOutput(prev => [...prev, ...(Array.isArray(items) ? items : [items])]);
  }, []);

  const smoothScrollToBottom = () => {
    const el = outputRef.current;
    if (el) (el as HTMLElement).scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };


  const executeCommand = (cmdRaw: string): void => {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    // Add to history
    setHistory((h: string[]) => [cmd, ...h].slice(0, 50));

    // push command line
    pushOutput({ type: "command", text: `ganesh@portfolio:${currentDirectory}$ ${cmd}` });

    const args = cmd.toLowerCase().split(/\s+/);
    const command = args[0];
    const subcommand = args[1];
    const flag = args[2];

    switch (command) {
      case "gs":
        if (subcommand === "name") {
          // type ascii for fun
          // clear potential ascii-temp left over
          pushOutput({ type: "success", text: "Ganesh Sharma - FullStack Developer" });
        } else if (subcommand === "about") {
          pushOutput({ type: "output", text: "👋 Hi! I'm Ganesh Sharma" });
          pushOutput({ type: "output", text: "🚀 FullStack Developer passionate about building amazing web experiences" });
          pushOutput({ type: "output", text: "💡 Currently building Babbler - an omnichannel SaaS platform" });
          pushOutput({ type: "output", text: "🎓 Won college hackathon with SHNK CLI in June 2025" });
        } else if (subcommand === "skills") {
          pushOutput({ type: "info", text: "🛠️  TECHNICAL SKILLS:" });
          pushOutput({ type: "output", text: "Languages: JavaScript, TypeScript, Python, C++, HTML/CSS" });
          pushOutput({ type: "output", text: "Frameworks: React, Next.js, Tailwind, Express, Flask, FastAPI" });
          pushOutput({ type: "output", text: "Database: MongoDB, Redis" });
          pushOutput({ type: "output", text: "DevOps: Docker, DigitalOcean, GitHub Actions (CI/CD)" });
        } else if (subcommand === "projects") {
          pushOutput({ type: "info", text: "🚀 RECENT PROJECTS:" });
          pushOutput({ type: "output", text: "• Babbler - Omnichannel SaaS platform (Current)" });
          pushOutput({ type: "output", text: "• VMM Security Exam - Viral satirical project with SEO" });
          pushOutput({ type: "output", text: "• StorageBuddy - TypeScript library for storage management" });
          pushOutput({ type: "output", text: "• YapperAI - Multi-persona chatbot with Gemini" });
          pushOutput({ type: "output", text: "• GrabTube - YouTube downloader with React & Flask" });
        } else if (subcommand === "contact") {
          pushOutput({ type: "info", text: "📬 CONTACT INFORMATION:" });
          pushOutput({ type: "output", text: "Email: ganesh.sharma.work@gmail.com" });
          pushOutput({ type: "output", text: "GitHub: https://github.com/Ganesh-Sharmaz" });
          pushOutput({ type: "output", text: "LinkedIn: https://linkedin.com/in/ganesh-sharmaz" });
          pushOutput({ type: "output", text: "Twitter: https://x.com/Ganesh_Sharmazz" });
        } else if (subcommand === "theme") {
          if (flag === "--light") {
            if (theme !== "light") toggleTheme();
            pushOutput({ type: "success", text: "Terminal theme changed to light mode ☀️" });
          } else if (flag === "--dark") {
            if (theme !== "dark") toggleTheme();
            pushOutput({ type: "success", text: "Terminal theme changed to dark mode 🌙" });
          } else {
            pushOutput({ type: "error", text: "Usage: gs theme --light | --dark" });
          }
        } else {
          pushOutput({ type: "error", text: `Unknown gs command: ${subcommand}. Type 'help' for available commands.` });
        }
        break;

      case "help":
        pushOutput({ type: "info", text: "📋 AVAILABLE COMMANDS:" });
        pushOutput({ type: "output", text: "gs name          - Display name with ASCII art" });
        pushOutput({ type: "output", text: "gs about         - About Ganesh Sharma" });
        pushOutput({ type: "output", text: "gs skills        - Technical skills" });
        pushOutput({ type: "output", text: "gs projects      - Recent projects" });
        pushOutput({ type: "output", text: "gs contact       - Contact information" });
        pushOutput({ type: "output", text: "gs theme --light - Switch to light theme" });
        pushOutput({ type: "output", text: "gs theme --dark  - Switch to dark theme" });
        pushOutput({ type: "output", text: "clear            - Clear terminal" });
        pushOutput({ type: "output", text: "pwd              - Show current directory" });
        break;

      case "clear":
        setOutput([]);
        break;

      case "pwd":
        pushOutput({ type: "output", text: `/home/ganesh${currentDirectory === '~' ? '' : currentDirectory}` });
        break;

      default:
        pushOutput({ type: "error", text: `Command not found: ${command}. Type 'help' for available commands.` });
    }

    // small delay to ensure outputs are painted and then scroll
    setTimeout(smoothScrollToBottom, 80);
  };

  /* --- handlers for input, history, keyboard shortcuts --- */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const toRun = input;
    setInput("");
    executeCommand(toRun);
    // focus back
    inputRef.current?.focus();
  };


  const handleQuickCommand = (cmd: string): void => {
    setInput(cmd);
    // slight delay for nicer feel
    setTimeout(() => executeCommand(cmd), 100);
    setInput("");
  };

  // keyboard navigation: history and shortcuts
  useEffect(() => {
    interface KeyboardEventLike {
      ctrlKey: boolean;
      key: string;
      preventDefault: () => void;
    }

    const onKey = (ev: KeyboardEventLike) => {
      // ctrl + `
      if (ev.ctrlKey && ev.key === "`") {
      ev.preventDefault();
      setShowTerminal(s => !s);
      return;
      }
      // ctrl + l => clear
      if (ev.ctrlKey && (ev.key === "l" || ev.key === "L")) {
      ev.preventDefault();
      setOutput([]);
      return;
      }
      // ctrl + t => toggle theme
      if (ev.ctrlKey && (ev.key === "t" || ev.key === "T")) {
      ev.preventDefault();
      toggleTheme();
      return;
      }
      // When terminal focused only: handle history
      if (!showTerminal) return;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [history, showTerminal, toggleTheme]);

  // focus when terminal opens
  useEffect(() => {
    if (showTerminal) {
      inputRef.current?.focus();
      setTimeout(smoothScrollToBottom, 80);
    }
  }, [showTerminal]);

  // auto-scroll when output changes (unless we're in a typing animation, which calls scroll by itself)
  useEffect(() => {
    if (!isTyping) {
      const el = outputRef.current;
      if (el) {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    }
  }, [output, isTyping]);

  // copy ascii helper
  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      pushOutput({ type: "success", text: "Copied to clipboard ✔" });
    } catch {
      pushOutput({ type: "error", text: "Unable to copy" });
    }
  };

  /* --- render pieces --- */
  interface TerminalLineBase {
    type: string;
    text: string;
  }

  interface CommandLine extends TerminalLineBase {
    type: "command";
  }

  interface OutputLine extends TerminalLineBase {
    type: "output";
  }

  interface ErrorLine extends TerminalLineBase {
    type: "error";
  }

  interface SuccessLine extends TerminalLineBase {
    type: "success";
  }

  interface InfoLine extends TerminalLineBase {
    type: "info";
  }

  interface AsciiLine extends TerminalLineBase {
    type: "ascii";
  }

  interface AsciiTempLine extends TerminalLineBase {
    type: "ascii-temp";
  }

  type TerminalLine =
    | CommandLine
    | OutputLine
    | ErrorLine
    | SuccessLine
    | InfoLine
    | AsciiLine
    | AsciiTempLine
    | TerminalLineBase;

  const renderLine = (line: TerminalLine, idx: number): React.JSX.Element => {
    const baseClass = "text-sm leading-relaxed break-words";
    switch (line.type) {
      case "command":
        return <div key={idx} className={`${baseClass} ${isDark ? "text-slate-400" : "text-gray-600"} font-medium`}>{line.text}</div>;
      case "output":
        return <div key={idx} className={`${baseClass} ${terminalText}`}>{line.text}</div>;
      case "error":
        return <div key={idx} className={`${baseClass} text-red-400`}>{line.text}</div>;
      case "success":
        return <div key={idx} className={`${baseClass} text-green-400`}>{line.text}</div>;
      case "info":
        return <div key={idx} className={`${baseClass} text-yellow-300`}>{line.text}</div>;
      case "ascii":
      case "ascii-temp":
        // for ascii blocks, show a copy button on the first line of a block
        if (line.type === "ascii-temp") {
          return <div key={idx} className={`font-mono text-xs ${terminalText} opacity-90`}>{line.text}</div>;
        }
        return (
          <div key={idx} className="relative">
            <pre className={`font-mono text-xs whitespace-pre-wrap mb-2 p-3 rounded ${isDark ? "bg-[#071426]/40" : "bg-[#f3f6f8]"}`}>{line.text}</pre>
            <button
              onClick={() => copyText(line.text)}
              className="absolute top-1 right-1 p-1 rounded-full hover:scale-105 transform transition"
              title="Copy ascii"
            >
              <Copy className="w-4 h-4 opacity-80" />
            </button>
          </div>
        );
      default:
        return <div key={idx} className={`${baseClass} ${terminalText}`}>{line.text}</div>;
    }
  };

  return (
    <ClickSpark
      sparkColor={isDark ? "#9EE7D0" : "#0D1321"}
      sparkSize={12}
      sparkRadius={18}
      sparkCount={8}
      duration={420}
    >
      <div
        className={`font-main min-h-screen flex w-full ${isDark ? "bg-[#061026] text-[#E8E6DA]" : "bg-[#F7F5EC] text-[#0D1321]"} sm:py-10 py-6`}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <Header />
          <h2 className="max-w-4xl mx-auto sm:px-0 px-2 text-2xl md:text-6xl mb-6 drop-shadow-md flex items-center gap-4">
            <span className="font-extrabold leading-tight">Probably the one fixing your favorite developer&apos;s code.</span>
          </h2>

          <Details />
          <AllInfo />
        </div>

        {/* Terminal */}
        {showTerminal && (
          <>
            {/* Backdrop */}
            <button
              className="fixed inset-0 z-40"
              style={{
                background: isDark ? "rgba(2,6,12,0.6)" : "rgba(5,10,20,0.35)",
                backdropFilter: "blur(10px)",
              }}
              onClick={() => setShowTerminal(false)}
            />
            <div className={`fixed inset-x-6  z-50 max-w-4xl mx-auto ${terminalBg} rounded-2xl shadow-2xl border`} style={{ borderColor: panelBorder }}>
              <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: panelBorder }}>
                <div className="flex items-center gap-1 sm:gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-1 sm:ml-3 text-sm opacity-85 font-medium">ganesh@portfolio</div>
                  <div className="ml-4 flex items-center gap-2 text-xs px-2 py-1 rounded bg-opacity-10" style={{ color: isDark ? "#9EE7D0" : "#025e9b" }}>
                    <ArrowUpDown className="w-4 h-4 hidden sm:block" />
                    <span className="opacity-85 hidden sm:block">Cmd History</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-3">
                  <div className="text-xs opacity-70 hidden sm:block">Terminal v1.1</div>
                  <button
                    onClick={() => { toggleTheme(); }}
                    className={`px-2 py-1 rounded text-sm ${isDark ? "bg-[#092832] hover:bg-[#0b3946]" : "bg-[#e8e9e7] hover:bg-[#dfe3e2]"} transition`}
                    title="Toggle theme (Ctrl+T)"
                  >
                    Theme
                  </button>
                  <button
                    onClick={() => setShowTerminal(false)}
                    className="px-2 py-1 rounded bg-red-500 text-sm hover:bg-red-600 text-white transition"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="p-4" style={{ background: panelBg, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                {/* Quick commands */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickCommands.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickCommand(q.cmd)}
                      className={`text-xs md:text-sm px-3 py-1 rounded-lg font-medium shadow-sm ${isDark ? "bg-[#0f4a57] hover:scale-[1.02]" : "bg-[#ff6b6b] text-white hover:scale-[1.02]"} transform transition`}
                      title={q.desc}
                    >
                      {q.cmd}
                    </button>
                  ))}
                </div>

                {/* Output */}
                <div
                  ref={outputRef}
                  className="max-h-[48vh] overflow-y-auto px-3 py-3 rounded-lg"
                  role="log"
                  aria-live="polite"
                  aria-atomic="false"
                  style={{ background: isDark ? "linear-gradient(180deg, rgba(6,12,22,0.3), rgba(6,12,22,0.15))" : "transparent", border: `1px solid ${panelBorder}` }}
                >
                  <div className="flex flex-col gap-2">
                    {output.length === 0 && <div className={`${terminalText} opacity-80`}>Terminal cleared — type <code className="px-1 py-0.5 rounded bg-black/5">help</code> to see commands.</div>}
                    {output.map((line, idx) => renderLine(line, idx))}
                  </div>
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="text-sm text-red-400 font-mono">ganesh@portfolio:{currentDirectory}$</div>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Try `gs about` or `help` — arrows: history, Ctrl+L: clear"
                    className={`flex-1 px-3 py-2 rounded-lg outline-none text-sm font-mono ${isDark ? "bg-[#061426]/40 placeholder:text-slate-400" : "bg-white placeholder:text-gray-500"} border`}
                    style={{ borderColor: panelBorder }}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button type="submit" disabled={!input.trim()} className="px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white transition disabled:opacity-60">
                    Run
                  </button>
                </form>
              </div>
            </div>
          </>
        )}

        {/* Terminal toggle floating button */}
        <button
          onClick={() => setShowTerminal(s => !s)}
          className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-xl z-40 flex items-center justify-center ${isDark ? "bg-gradient-to-br from-teal-500 to-sky-600 text-white" : "bg-blue-600 text-white"} transition-transform hover:scale-105`}
          aria-label="Toggle terminal (Ctrl+`)"
          title="Toggle terminal (Ctrl+`)"
        >
          <Terminal className="w-6 h-6" />
        </button>
      </div>
    </ClickSpark>
  );
};

export default HomePageComponent;
