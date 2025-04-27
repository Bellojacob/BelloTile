import Navbar from './components/navbar';
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <Navbar />
    <h1 className="text-center">Bello Tile</h1>
    

    <div>
      
      <Link href="/secondPage">Go to Second Page</Link>
    </div>
    </>
  )
}