# Architecture

```
React (Next.js)
      │
   wagmi / viem
      │
      ▼
 Solidity (Foundry)  ── source of truth for balances
```

The app is frontend-only. Market copy, risk constants, and the governance demo live in `@auron/config` and render in `apps/web`. Portfolio and position numbers are read in the browser from the connected wallet.

## On-chain

- ownership, deposits, withdrawals
- collateral, borrow, repay
- interest accounting (extend), liquidation
- fees, permissions, governance, settlement

## In the browser

- markets catalogue and asset detail
- risk strip, health factor, borrow preview
- governance vote demo (local state only)

## Layout

- `apps/web` — Next.js UI
- `packages/config` — markets, risk constants, deployment addresses
- `packages/sdk` — ABIs and risk math used by the UI
- `packages/contracts` — Foundry protocol, deployed locally with Anvil
