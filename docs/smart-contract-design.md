# Smart Contract Design (BRICS token + Escrow flow) — overview

## Token
- ERC-20 / BEP-20 standard token BRICS
- Metadata: name BRICS, symbol BRX (یا BRICS), decimals 6 (as requested)
- Mintable only by owner (initial supply minted on deployment) or controlled via governance

## Escrow contract (high-level)
Functions:
- escrowCreate(orderId, buyer, seller, amount, currency) -> stores escrow, transfers tokens from buyer to escrow
- escrowConfirm(orderId) -> called after confirmation period (24h) OR by buyer to release early
- escrowDispute(orderId) -> opens dispute, freezes funds pending resolution
- escrowResolve(orderId, releaseToSeller, refundToBuyer) -> admin or arbiter resolves dispute

Security:
- Use reentrancy guards
- Events for each state change
- Admin multisig for dispute resolution
- Consider on-chain or off-chain oracle for delivery confirmation

## Off-chain responsibilities (backend)
- Index events, update order status
- KYC/AML checks
- Fiat conversion and payout orchestration to sellers
- Integrate with webhooks from logistic partners and seller panels

## Notes
- For payments in multiple currencies (show price by local fiat), determine BRX price oracle per-country and update product price in token units before checkout.
- Use Chainlink (or equivalent) for oracles if needed.
