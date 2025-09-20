import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
          Bello Tile
        </Link>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/aboutPage" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/contactPage" className="hover:text-blue-500">
          Contact
        </Link>
      </div>
    </nav>
  );
}