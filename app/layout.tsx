import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackMeet – Schedule meetings without leaving Slack",
  description: "Slack bot that finds meeting slots across participants' calendars, books rooms, sends invites, and handles rescheduling – all within Slack."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d33d13e9-6625-4c95-9aae-52e1b1f7b6fa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
