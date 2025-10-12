'use client';

import GasCard from '@components/GasCard';

export default function GasFeePage() {
  const gasData = [
    { network: 'Ethereum', price: 21 },
    { network: 'BNB Chain', price: 3 },
    { network: 'Polygon', price: 41 },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">⛽ Gas Fee Checker</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {gasData.map((item) => (
          <GasCard key={item.network} {...item} updatedAt="5s ago" />
        ))}
      </div>
    </main>
  );
}
