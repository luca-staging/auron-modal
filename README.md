# AURON

RWA + DeFi + stablecoin credit infrastructure — frontend POC.

Markets, governance, and the risk UI run entirely in the browser. Deposit, borrow, repay, and withdraw talk to a local chain from the wallet. There is no API server, indexer, or database.

## Quick demo

```bash
npm install
npm run dev
```

Web: http://localhost:3000

## Live on-chain loop (Anvil)

Requires [Foundry](https://book.getfoundry.sh/getting-started/installation) (`anvil`, `forge`).

```bash
# terminal 1
npm run chain

# terminal 2
npm run deploy:local

# terminal 3
npm run dev
```

Then in MetaMask:

1. Add network: RPC `http://127.0.0.1:8545`, chain id `31337`
2. Import Anvil Account #0: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
3. Connect wallet → **Borrow**: Faucet (optional) → Approve → Deposit → Borrow
4. **Position**: Approve ausUSD → Repay → Withdraw
5. **Dashboard** updates from chain

Deploy seeds 50,000 AURWA to Anvil accounts 0–9.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Web app |
| `npm run chain` | Local Anvil |
| `npm run deploy:local` | Deploy protocol + write `apps/web/.env.local` |
| `npm run lint` | Typecheck |
| `npm run contracts:test` | Forge tests |

See [docs/SETUP.md](docs/SETUP.md) and [docs/product/POC.md](docs/product/POC.md).
