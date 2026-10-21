export const CHAIN_IDS = {
  ANVIL: 31337,
  BASE_SEPOLIA: 84532,
  BASE: 8453,
} as const;

/** Simulated RWA: 1 AURWA ≈ $1.00 NAV for POC */
export const AURWA = {
  symbol: "AURWA",
  name: "Auron Simulated Treasury RWA",
  decimals: 18,
  navUsd: 1.0,
} as const;

export const STABLECOIN = {
  symbol: "ausUSD",
  name: "Auron Simulated USD",
  decimals: 18,
} as const;

/** Default LTV 70% → max borrow = collateral * 0.7 */
export const DEFAULT_LTV_BPS = 7000;
export const LIQUIDATION_THRESHOLD_BPS = 8000;
export const HEALTH_FACTOR_LIQUIDATION = 1.0;

export const MARKETS = [
  {
    id: "us-treasury",
    name: "US Treasury",
    token: "AURWA",
    role: "Collateral",
    apy: 4.2,
    risk: "Low",
    liquidity: "High",
    ltvBps: DEFAULT_LTV_BPS,
    liquidationThresholdBps: LIQUIDATION_THRESHOLD_BPS,
    borrowEnabled: true,
    valuation: "Mock NAV $1.00",
    description:
      "Simulated tokenized US Treasury exposure (AURWA). Posted as collateral to unlock ausUSD credit. 1 token ≈ $1.00 NAV via mock oracle.",
    assetYieldLabel: "Underlying asset yield (illustrative)",
    borrowAprLabel: "Borrow APR not yet differentiated in POC",
  },
  {
    id: "private-credit",
    name: "Private Credit",
    token: "AURPC",
    role: "Collateral (simulated)",
    apy: 8.1,
    risk: "Medium",
    liquidity: "Medium",
    ltvBps: 6000,
    liquidationThresholdBps: 7500,
    borrowEnabled: false,
    valuation: "Display-only in POC",
    description:
      "Simulated market for product exploration. Borrow against live collateral is wired for AURWA (US Treasury) only in this POC.",
    assetYieldLabel: "Underlying asset yield (illustrative)",
    borrowAprLabel: "Borrow APR not yet differentiated in POC",
  },
  {
    id: "tokenized-fund",
    name: "Tokenized Fund",
    token: "AURTF",
    role: "Collateral (simulated)",
    apy: 6.7,
    risk: "Medium",
    liquidity: "High",
    ltvBps: 6500,
    liquidationThresholdBps: 7750,
    borrowEnabled: false,
    valuation: "Display-only in POC",
    description:
      "Simulated market for product exploration. Borrow against live collateral is wired for AURWA (US Treasury) only in this POC.",
    assetYieldLabel: "Underlying asset yield (illustrative)",
    borrowAprLabel: "Borrow APR not yet differentiated in POC",
  },
] as const;

export type MarketId = (typeof MARKETS)[number]["id"];

export type ProposalView = {
  id: string;
  title: string;
  description: string;
  forPct: number;
  againstPct: number;
  status: "active" | "passed" | "defeated";
};

export const PROPOSALS: ProposalView[] = [
  {
    id: "AIP-003",
    title: "Change ausUSD LTV from 70% → 65%",
    description:
      "Tighten maximum LTV for AURWA-backed borrows. Open question: should risk params be governance-timelocked?",
    forPct: 72,
    againstPct: 28,
    status: "active",
  },
];

export { localDeployment, type LocalDeployment } from "./deployments/local.js";
