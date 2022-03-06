import Image from 'next/image';
import Header from '../components/Header';
import { signIn, signOut, useSession } from 'next-auth/react';
import Contact from '../components/contact';
import Learning from '../components/learning';
import Link from 'next/link';

const IndexPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <Link href='/home'>
      <video className='w-full h-screen bg-dunes bg-cover bg-center object-cover cursor-pointer'  preload="true" autoPlay loop muted>
        <source src="/assets/Clickweb.mp4" type="video/mp4" /> 
      </video>
      </Link>
    </div>
  );
}

export default IndexPage;
