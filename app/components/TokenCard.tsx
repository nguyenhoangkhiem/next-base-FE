interface TokenCardProps {
  name: string;
  price: number;
  change24h?: number;
}

const TokenCard = ({ name, price, change24h }: TokenCardProps) => {
  const color = change24h && change24h >= 0 ? 'text-green-400' : 'text-red-400';
  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold capitalize">{name}</h2>
      <p className="text-2xl font-bold text-emerald-400">${price.toLocaleString()}</p>
      {change24h !== undefined && (
        <p className={`${color} mt-1`}>{change24h.toFixed(2)}% (24h)</p>
      )}
    </div>
  );
};

export default TokenCard;
