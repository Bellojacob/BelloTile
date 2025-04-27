import Link from 'next/link';
import Navbar from '../components/navbar';
export default function secondPage(){
    return(
    <>
    <Navbar />
    <h1 className="text-center">This is the second page</h1>
    <div>
      <Link href="/">Go to Home Page</Link>
    </div>
    </>
    )
}