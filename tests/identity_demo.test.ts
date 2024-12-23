// tests/identity_demo.test.ts
import { expect } from 'chai';
import { demonstrateIdentityProtection } from '../demo/identity_demo';

describe('SoulBind Identity Protection', () => {
  it('should create a soulbound token for identity document', async () => {
    try {
      // Run the demo
      const result = await demonstrateIdentityProtection();
      
      // Verify token creation
      expect(result).to.not.be.null;
      expect(result.mint).to.exist;
      
      // Verify token properties
      const tokenInfo = await result.getTokenInfo();
      expect(tokenInfo.name).to.equal('GlitchPhoenix');
      expect(tokenInfo.symbol).to.equal('SOULBIND');
      expect(tokenInfo.supply).to.equal(1);
      
      console.log('Test passed: Identity protection demonstrated successfully');
    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
});
