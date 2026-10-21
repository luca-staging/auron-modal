import { PROPOSALS } from "@auron/config";
import { VoteButton } from "./VoteButton";

export default function GovernancePage() {
  const p = PROPOSALS[0];

  return (
    <div className="mx-auto max-w-xl space-y-8">
      <div>
        <h1 className="font-display text-3xl">Governance</h1>
        <p className="mt-2 text-sm leading-relaxed text-auron-mist">
          Risk parameters (LTV, liquidation threshold, oracles) are core product surface area. This
          page is a POC sketch — votes stay in the browser and intentionally unfinished while we
          decide production architecture.
        </p>
      </div>

      <article className="space-y-6 border-y border-auron-line py-8">
        <p className="font-mono text-xs text-auron-accent">{p.id}</p>
        <h2 className="font-display text-2xl">{p.title}</h2>
        <p className="text-sm text-auron-mist">{p.description}</p>
        <p className="text-xs text-auron-mist">
          Parameter change would affect borrow capacity and liquidation buffer on every open
          position — the same risk strip shown on Dashboard, Borrow, and Position.
        </p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>For {p.forPct}%</span>
            <span className="text-auron-mist">Against {p.againstPct}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-auron-panel">
            <div className="h-full bg-auron-accent" style={{ width: `${p.forPct}%` }} />
          </div>
        </div>

        <VoteButton />
      </article>
    </div>
  );
}
