import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/context/ThemeContext.Provider";
import DynamicFavicon from "@/components/ui/DynamicFavicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Array of favicon URLs
const faviconUrls = [
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/keroppi-bullet-2.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-9.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-10.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-12.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-3.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-4.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-5.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-7.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-10.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-11.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-bullet-1.gif",
  "https://cutekawaiiresources.wordpress.com/wp-content/uploads/2016/11/kuromi-6.gif",
];

// Initial random favicon for SSR
const getRandomFavicon = () => {
  const randomIndex = Math.floor(Math.random() * faviconUrls.length);
  return faviconUrls[randomIndex];
};

const initialFavicon = getRandomFavicon();

export const metadata: Metadata = {
  title: "Ganesh Sharma",
  description:
    "Ganesh Sharma – Frontend Developer skilled in React, Next.js, TypeScript, and Python. Creator of SHNK CLI, Yapper AI, StorageBuddy, and more. Experienced in building scalable SaaS apps, SEO platforms, real-time chat, and developer tools with strong UI/UX focus and performance optimization.",
  icons: {
    icon: initialFavicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={initialFavicon} id="favicon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}>
        <DynamicFavicon/>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}