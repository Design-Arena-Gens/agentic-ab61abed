import Head from "next/head";
import { useMemo } from "react";

const frameworks = [
  {
    title: "Market Shock → Safe Haven",
    beats: [
      "Open on a startling stat or headline that shows volatility.",
      "Contrast with a crypto asset or strategy positioned as the antidote.",
      "Share a concise anecdote or data point that proves resilience.",
      "End with a forward-looking action viewers can replicate."
    ],
    bestFor: ["Bear markets", "Audience reassurance", "Stablecoin narratives"]
  },
  {
    title: "Hero Investor Mini-Doc",
    beats: [
      "Introduce a faceless 'you' persona with a specific pain point.",
      "Reveal the research process and key criteria used to evaluate coins.",
      "Deliver the decision framework in 3 tangible checkpoints.",
      "Close with a challenge: apply the framework and report back."
    ],
    bestFor: ["Believability", "Community engagement", "Upsell to newsletter"]
  },
  {
    title: "Myth Busting Flashback",
    beats: [
      "State a common crypto misconception in a cinematic whisper.",
      "Cut to a past moment (B-roll, stock footage) that perpetuated the myth.",
      "Overlay the hard numbers that dismantle the belief.",
      "Finish with the new mental model or checklist to adopt."
    ],
    bestFor: ["Algorithm discovery", "Educational shorts", "Retention"]
  }
];

const audienceSegments = [
  {
    name: "Quiet Builders",
    traits: [
      "Aged 25-40, already investing modestly",
      "Prefer frameworks over hype; track record matters",
      "Hang out on Reddit, Crypto Twitter, niche Discords"
    ],
    hook: "“If you're investing with less than 5000 dollars, watch how I turn volatility into predictable yield.”",
    cta: "Invite them to download a checklist or join a focused email drip."
  },
  {
    name: "New Wealth Protectors",
    traits: [
      "Late 30s professionals, asset diversification mindset",
      "Concerned about regulation, custody, and tax implications",
      "Consume CNBC, Bloomberg, top LinkedIn voices"
    ],
    hook: "“The one crypto allocation strategy private bankers are quietly suggesting to risk-averse clients.”",
    cta: "Point them to a faceless explainer series covering risk tiers."
  },
  {
    name: "Curious Skeptics",
    traits: [
      "Under 30, smart but burnt by scams",
      "Obsess over receipts, track on-chain data",
      "Active in skeptical YouTube comment threads"
    ],
    hook: "“I asked an open-source AI to audit this coin. The verdict surprised me more than the rug pull.”",
    cta: "Drive to a community poll or AMA to co-create due diligence."
  }
];

const messagePillars = [
  {
    pillar: "Signal Over Noise",
    angle: "Translate macro chaos into a 3-step portfolio upgrade.",
    proof: "Use on-chain analytics, Glassnode snapshots, or IMF reports.",
    assets: ["Chart overlays", "Stock B-roll", "Animated infographics"]
  },
  {
    pillar: "Story-Driven Playbooks",
    angle: "Narrate a real investor arc with emotional stakes.",
    proof: "Character voiceover + timeline captions + risk scorecard.",
    assets: ["Archive footage", "Dynamic text", "Ambient synth audio"]
  },
  {
    pillar: "Credibility Stacking",
    angle: "Build trust via compliance cues.",
    proof: "Include risk disclaimers, cite regulation, mention cold storage.",
    assets: ["Lower-third disclaimers", "SEC headlines", "Monotone color grading"]
  }
];

const productionPipeline = [
  {
    phase: "Research & Angle",
    duration: "90 minutes",
    tasks: [
      "Scrape macro and on-chain dashboards for 2-3 fresh insights.",
      "Run narrative through 'What does this mean for me in 30 days?' filter.",
      "Draft hero statement + skeptic objection + payoff line."
    ],
    tooling: ["Notion or Obsidian vault", "RSS reader (Feedly)", "DeFiLlama / TokenTerminal"]
  },
  {
    phase: "Faceless Script Build",
    duration: "75 minutes",
    tasks: [
      "Write 220-260 word narration optimized for 60-90s delivery.",
      "Mark visual beats (text overlays, B-roll cues, motion graphics) inline.",
      "Add pattern interrupts every 7-9 seconds."
    ],
    tooling: ["Descript overdub", "ElevenLabs voice models", "Google Sheets timing grid"]
  },
  {
    phase: "Assembly & Polish",
    duration: "120 minutes",
    tasks: [
      "Edit in CapCut/Adobe Premiere with 1.05x pacing for energy.",
      "Layer subtle glitch transitions + digital foley for momentum.",
      "Export with -6 LUFS audio normalization and dynamic subtitles."
    ],
    tooling: ["Premiere Pro with Autocut plugins", "After Effects templates", "XRPO LUT pack"]
  }
];

const cadence = [
  {
    format: "YouTube Shorts (60s)",
    goal: "Discovery & hook-testing",
    schedule: "5x per week, focus on volatility explainers and micro-tutorials.",
    metric: "30%+ average view duration, save rate benchmark at 4%."
  },
  {
    format: "Mid-form (6-8 min)",
    goal: "Depth & monetizable watch time",
    schedule: "1x per week deep dive with modular chapters.",
    metric: "50%+ retention to midpoint, convert 10% of viewers to subscribe."
  },
  {
    format: "Community Livestream (30 min)",
    goal: "Trust and feedback loop",
    schedule: "Bi-weekly Q&A summarizing regulatory shifts and watchlist updates.",
    metric: "Chat participation >4 messages/min, 15% post-stream replay."
  }
];

const hookAngles = [
  "The 90-second due diligence sprint that keeps you out of rug pulls.",
  "Why long-term crypto investors borrow lessons from Pixar story arcs.",
  "How to narrate a stablecoin ladder like a thriller without showing your face.",
  "The silent color grading trick that boosts finfluencer retention by 18%.",
  "Turn boring SEC filings into viral hooks with these motion templates."
];

const monetization = [
  {
    type: "Newsletter Funnel",
    steps: [
      "Embed a weekly 'Regulatory Radar' recap in description & pinned comments.",
      "Deliver premium macro breakdowns + watchlists via paid Substack tiers.",
      "Upsell portfolio audits or cohort-based courses quarterly."
    ],
    notes: "Use lead magnets tailored to each persona; auto-respond with story recap PDF."
  },
  {
    type: "Affiliate Stack",
    steps: [
      "Bundle custodial wallets, tax software, and hardware security gear.",
      "Create narrative mini-series around each product's risk mitigation angle.",
      "Rotate CTAs to avoid repetition; disclose with visual overlays."
    ],
    notes: "Negotiate rev-share for high-LTV services (OTC desks, pro charting platforms)."
  },
  {
    type: "Digital Assets",
    steps: [
      "Sell story-driven Notion dashboards tracking token narratives.",
      "Offer AI-voiced script packs themed for upcoming catalysts.",
      "Launch a private Discord with weekly faceless storytelling breakdowns."
    ],
    notes: "Gate access via Patreon or Lemon Squeezy; drip teasers on Shorts."
  }
];

export default function Home() {
  const checklist = useMemo(
    () => [
      "Define 3 audience avatars and tag each idea to one persona before scripting.",
      "Lock in a consistent sonic identity (voice model + sound bed) to stay memorable without showing your face.",
      "Batch 5 hooks at a time using the frameworks below; test via community polls or Instagram Stories.",
      "Create modular B-roll libraries (markets, tech, emotion cues) for quick assembly.",
      "Track retention drop-off points in YouTube Studio; rewrite that timestamp with a pattern interrupt.",
      "Automate compliance overlays (risk disclaimers, affiliate disclosures) using motion templates.",
      "Log every video into a Notion database with hook, CTA, retention, and conversion metrics to iterate quickly."
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Faceless Crypto Story Lab</title>
        <meta
          name="description"
          content="Actionable playbooks for building faceless YouTube channels about crypto investing with storytelling impact."
        />
      </Head>
      <main>
        <header>
          <div className="pill-list">
            <span className="pill">Faceless Production</span>
            <span className="pill">Crypto Narratives</span>
            <span className="pill">Story-First Strategy</span>
          </div>
          <h1>Build binge-worthy faceless crypto stories that earn trust.</h1>
          <p>
            Use this field-tested system to craft short-form and mid-form YouTube content that demystifies
            investing, keeps you anonymous, and moves viewers to action.
          </p>
        </header>

        <section>
          <h2>Channel Operating System</h2>
          <p>
            Anchor your brand voice and delivery so every upload compounds authority. Treat these as the
            non-negotiables before you hit record.
          </p>
          <div className="grid cols-2">
            <div className="card">
              <h3>Voice & Tone</h3>
              <ul>
                <li>
                  Mix <span className="highlight">calm analyst</span> narration with <span className="highlight">urgent pacing</span>.
                </li>
                <li>Deliver data in story beats: scene setting, conflict, resolution, payoff.</li>
                <li>Adopt a consistent sonic ID using one AI voice + atmospheric score.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Visual Identity</h3>
              <ul>
                <li>Lean on motion graphics, kinetic typography, and masked B-roll.</li>
                <li>Color palette: midnight blues, neon cyan, muted amber highlights.</li>
                <li>Use subtle grain + HUD overlays to telegraph credibility.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Editorial Guardrails</h3>
              <ul>
                <li>Never promise returns; focus on frameworks and risk management.</li>
                <li>Credit every data source on-screen and in the description.</li>
                <li>Close with compliance-safe CTAs: education, community, tools.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Content Flywheel</h3>
              <ul>
                <li>Shorts test hooks → long-form expands story → newsletter deepens trust.</li>
                <li>Quarterly tentpoles: halving cycles, regulatory news, DeFi upgrades.</li>
                <li>Harvest audience questions for the next script batch.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Audience Mapping</h2>
          <p>Speak to a single persona per video. Rotate segments weekly to cover the full opportunity.</p>
          <div className="grid cols-2">
            {audienceSegments.map((segment) => (
              <div className="card" key={segment.name}>
                <h3>{segment.name}</h3>
                <ul>
                  {segment.traits.map((trait) => (
                    <li key={trait}>{trait}</li>
                  ))}
                </ul>
                <p>
                  <span className="highlight">Hook:</span> {segment.hook}
                </p>
                <p>
                  <span className="highlight">CTA:</span> {segment.cta}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Story Frameworks</h2>
          <p>Slot your research into these narrative skeletons to stay fast and emotionally resonant.</p>
          <div className="grid">
            {frameworks.map((framework) => (
              <div className="card" key={framework.title}>
                <h3>{framework.title}</h3>
                <p>
                  <span className="highlight">Beats:</span>
                </p>
                <ul>
                  {framework.beats.map((beat) => (
                    <li key={beat}>{beat}</li>
                  ))}
                </ul>
                <p>
                  <span className="highlight">Best for:</span> {framework.bestFor.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Message Pillars</h2>
          <p>Cycle through these angles so the channel feels fresh while staying on-brand.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Pillar</th>
                <th>Story Angle</th>
                <th>Proof Drivers</th>
                <th>Visual Assets</th>
              </tr>
            </thead>
            <tbody>
              {messagePillars.map((item) => (
                <tr key={item.pillar}>
                  <td>{item.pillar}</td>
                  <td>{item.angle}</td>
                  <td>{item.proof}</td>
                  <td>{item.assets.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>Video Blueprint</h2>
          <p>
            Use this 60-90 second structure to keep Shorts tight. For mid-form pieces, expand each beat into
            mini-scenes with chapter cards.
          </p>
          <div className="video-structure">
            <div className="video-step">
              <h3>0-5s Hook</h3>
              <p>Bold claim or tension question + motion headline. Add sound bed rise.</p>
            </div>
            <div className="video-step">
              <h3>6-15s Context</h3>
              <p>Establish the stakes with macro signal, chart flash, or past headline.</p>
            </div>
            <div className="video-step">
              <h3>16-35s Conflict</h3>
              <p>Illustrate the risk or problem. Use glitch cuts + foley for urgency.</p>
            </div>
            <div className="video-step">
              <h3>36-55s Resolution</h3>
              <p>Deliver your framework, checklist, or decision tree in 3 clean steps.</p>
            </div>
            <div className="video-step">
              <h3>56-70s Payoff & CTA</h3>
              <p>Show measurable upside. Invite viewers to grab the companion resource.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Production Pipeline</h2>
          <p>Run on a three-phase sprint so you can batch-record faceless episodes in a single day.</p>
          <div className="grid">
            {productionPipeline.map((phase) => (
              <div className="card" key={phase.phase}>
                <h3>{phase.phase}</h3>
                <p>
                  <span className="highlight">Time block:</span> {phase.duration}
                </p>
                <ul>
                  {phase.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
                <p>
                  <span className="highlight">Tooling:</span> {phase.tooling.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Cadence & Metrics</h2>
          <p>Set measurable guardrails so you know when each format is working.</p>
          <div className="grid">
            {cadence.map((item) => (
              <div className="card" key={item.format}>
                <h3>{item.format}</h3>
                <p>
                  <span className="highlight">Objective:</span> {item.goal}
                </p>
                <p>
                  <span className="highlight">Schedule:</span> {item.schedule}
                </p>
                <p>
                  <span className="highlight">Metric:</span> {item.metric}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Hook Lab</h2>
          <p>Steal these angles and rewrite them with the latest news headline layered in.</p>
          <ul>
            {hookAngles.map((hook) => (
              <li key={hook}>{hook}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Monetization Stack</h2>
          <p>Layer multiple income streams without compromising credibility.</p>
          <div className="grid">
            {monetization.map((item) => (
              <div className="card" key={item.type}>
                <h3>{item.type}</h3>
                <ul>
                  {item.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
                <p>
                  <span className="highlight">Notes:</span> {item.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Launch Checklist</h2>
          <p>Run through this list before uploading each video to lock in consistency.</p>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Next Actions</h2>
          <p>Keep momentum by moving from strategy to execution immediately.</p>
          <div className="cta">
            <a
              href="https://docs.google.com/spreadsheets/d/1JStoryCryptoTemplate"
              className="primary"
              target="_blank"
              rel="noreferrer"
            >
              Copy the 30-Day Story Calendar
            </a>
            <a
              href="https://www.descript.com/blog/article/faceless-youtube-workflows"
              className="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Study More Faceless Workflow Breakdowns
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
