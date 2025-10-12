'use client';

import React from 'react';

interface GasCardProps {
  network: string;
  price: number;
  unit?: string;
  updatedAt?: string;
}

const GasCard: React.FC<GasCardProps> = ({ network, price, unit = 'Gwei', updatedAt }) => {
  return (
    <div className="p-4 border rounded-2xl shadow-sm bg-white hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{network}</h3>
        <span className="text-sm text-gray-500">{updatedAt ? `Updated ${updatedAt}` : ''}</span>
      </div>

      <p className="mt-2 text-2xl font-bold text-blue-600">
        {price} <span className="text-sm font-normal text-gray-600">{unit}</span>
      </p>
    </div>
  );
};

export default GasCard;
