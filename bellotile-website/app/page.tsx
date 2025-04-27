import Navbar from './components/navbar';
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <Navbar />    

    <div>
      
      <Link href="/secondPage" className='bg-blue-200 p-2 m-2'>Go to Second Page</Link>
    </div>
    </>
  )
}