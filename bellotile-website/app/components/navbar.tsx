import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-500">
          Contact
        </Link>
      </div>
    </nav>
  );
}