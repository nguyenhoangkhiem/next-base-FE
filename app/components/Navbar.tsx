import Link from 'next/link';

const Navbar = () => (
  <nav className="p-4 bg-gray-900 text-gray-100 flex gap-6 border-b border-gray-800">
    <Link href="/">Dashboard</Link>
    <Link href="/token-tracker">Token Tracker</Link>
    <Link href="/gas-fee">Gas Fee Checker</Link>
  </nav>
);

export default Navbar;
