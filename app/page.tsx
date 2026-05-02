export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Slack-native scheduling
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Schedule meetings without<br />leaving Slack
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          SlackMeet finds open slots across everyone&apos;s calendars, books the room, and sends invites — all from a single Slack command.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get started for $10/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["Google Calendar", "& Outlook sync"],
            ["Room booking", "auto-managed"],
            ["Reschedule", "in one click"],
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-[#8b949e] text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] text-sm mb-6">per workspace / month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited meeting scheduling",
              "Google Calendar + Outlook",
              "Conference room management",
              "Automatic rescheduling",
              "Team dashboard & billing",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which calendars are supported?",
              "SlackMeet integrates with Google Calendar and Microsoft Outlook/Exchange. Connect both simultaneously for cross-platform teams.",
            ],
            [
              "How does room booking work?",
              "SlackMeet reads your organisation's room resources from Google Workspace or Microsoft 365 and automatically reserves an available room when scheduling.",
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from the dashboard at any time. Your workspace keeps access until the end of the billing period — no questions asked.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} SlackMeet. All rights reserved.
      </footer>
    </main>
  );
}
