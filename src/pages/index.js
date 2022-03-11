
import Header from '../components/Header';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Link href='/home' passHref prefetch>
        <video className='w-full h-screen bg-dunes bg-cover bg-center object-cover cursor-pointer' preload="true" autoPlay loop muted>
          <source src="/assets/Clickweb.mp4" type="video/mp4" />
        </video>
      </Link>
    </div>
  );
}

export default IndexPage;
