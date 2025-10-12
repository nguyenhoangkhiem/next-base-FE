'use client';

import useSWR from 'swr';
import { fetcher } from '@utils/fetcher';
import TokenCard from '@components/TokenCard';

const TokenTracker = () => {
  const { data, error, isLoading } = useSWR(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd',
    fetcher
  );

  if (isLoading) return <div className="p-6 text-gray-400">Loading token data...</div>;
  if (error) return <div className="p-6 text-red-400">Failed to load token prices.</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-950 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">🪙 Token Tracker</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data).map(([name, { usd }]) => (
          <TokenCard key={name} name={name} price={usd} />
        ))}
      </div>
    </div>
  );
};

export default TokenTracker;
