'use client';

import useSWR from 'swr';
import TokenCard from '@components/TokenCard';
import { fetcher } from '@utils/fetcher';

const tokens = ['bitcoin', 'ethereum', 'solana', 'cardano'];

const TokenTrackerPage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=${tokens.join(',')}&vs_currencies=usd&include_24hr_change=true`,
    fetcher
  );

  if (error) return <div className="p-6 text-red-500">Error loading tokens</div>;
  if (isLoading || !data) return <div className="p-6 text-gray-400">Loading...</div>;

  return (
    <main className="min-h-screen p-6 bg-gray-950 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">🪙 Token Tracker</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data).map(([name, info]: any) => (
          <TokenCard
            key={name}
            name={name}
            price={info.usd}
            change24h={info.usd_24h_change}
          />
        ))}
      </div>
    </main>
  );
};

export default TokenTrackerPage;
