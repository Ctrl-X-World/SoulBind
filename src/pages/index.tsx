// src/pages/index.tsx
import { useState } from 'react';
import { IdentityManager } from '../components/IdentityManager';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">SoulBind Demo</h1>
      <IdentityManager />
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl mb-2">Demo Steps:</h2>
        <ol className="list-decimal pl-4">
          <li>Connect wallet</li>
          <li>Create soulbound token for Glitch Phoenix identity</li>
          <li>Verify token-gated access</li>
        </ol>
      </div>
    </div>
  );
}
