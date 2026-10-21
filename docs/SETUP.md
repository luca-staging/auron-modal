# Setup

## Required

- Node.js 18+ (includes npm)

## Web app

```bash
npm install
npm run dev
```

Open http://localhost:3000. Markets and governance work without a chain. Balances stay empty until a wallet is connected.

## Live lending loop

1. Install Foundry: https://book.getfoundry.sh/getting-started/installation
2. Run:

```bash
npm run chain          # terminal 1 — Anvil
npm run deploy:local   # terminal 2 — deploys + writes apps/web/.env.local
npm run dev            # terminal 3 — restart after deploy
```

3. MetaMask → network `31337` / `http://127.0.0.1:8545`
4. Import Anvil account #0 private key (see README)
5. Walkthrough: Deposit → Borrow → Repay → Withdraw
