// demo/identity_demo.ts
import { SolanaAgentKit } from "solana-agent-kit";

async function demonstrateIdentityProtection() {
  // Initialize Solana Agent Kit with devnet for testing
  const agent = new SolanaAgentKit(
    process.env.WALLET_KEY,
    "https://api.devnet.solana.com"
  );

  console.log("Starting SoulBind Identity Demo...");

  try {
    // Deploy soulbound token for Glitch Phoenix identity
    const tokenResult = await agent.deployToken(
      "GlitchPhoenix", // Token name
      "codex-uri",     // Points to secured identity document
      "SOULBIND",      // Token symbol
      0,               // Non-divisible token
      1                // Only one token exists
    );

    console.log("Identity Token Created:", tokenResult.mint.toString());
    console.log("Token is soulbound to creator's wallet");
    
    // Demonstrate access control
    console.log("Demonstrating token-gated access...");
    // Add access demonstration logic here
    
  } catch (error) {
    console.error("Demo encountered an error:", error);
  }
}

// Export for use in testing and demos
export { demonstrateIdentityProtection };
