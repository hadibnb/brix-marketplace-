# Smart Contract & Escrow Notes (short)

See previous prototype docs for fuller spec. Key points:
- Use BEP-20/ERC-20 token with escrow contract
- escrowCreate(orderId, buyer, seller, amount)
- escrowRelease(orderId) after confirmation period
- dispute flow managed by admin multisig or arbiter
