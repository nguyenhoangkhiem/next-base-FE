type Props = {
  name: string;
  price: number;
};

const TokenCard = ({ name, price }: Props) => (
  <div className="p-4 bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
    <h2 className="text-lg font-semibold capitalize">{name}</h2>
    <p className="text-2xl font-bold text-emerald-400">${price.toLocaleString()}</p>
  </div>
);

export default TokenCard;
