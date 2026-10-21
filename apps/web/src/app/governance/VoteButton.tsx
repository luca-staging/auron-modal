"use client";

import { useState } from "react";

export function VoteButton() {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      disabled={done}
      className="rounded bg-auron-accent px-4 py-2 text-sm font-medium text-auron-ink disabled:opacity-60"
      onClick={() => setDone(true)}
    >
      {done ? "Vote recorded (demo)" : "Vote"}
    </button>
  );
}
