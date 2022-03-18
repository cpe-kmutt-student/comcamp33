import Header from "../components/Header";
import Link from "next/link";
import { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    console.log('%c ⚠️ การเข้าถึงระบบคอมพิวเตอร์โดยมิชอบ มีโทษทางกฎหมายตาม พ.ร.บ. คอมพิวเตอร์ ', 'text-align: center; color: white; font-size: 1.5rem; background-color: red; border-radius: 0.5rem; padding: 0.25rem;');
  }, []);

  return (
    <div>
      <Header />
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        <Link href="/home" passHref>
          <div className="relative z-30 py-2 lg:py-6 text-center top-[18vh] lg:top-[19.5vh] w-[96vw] md:w-[30vw] bg-transparent  text-[#E9E9E9] font-pixel opacity-60 md:text-xl hover:text-2xl cursor-pointer text-shadow transition-all duration-200 ease-linear">
            Enter Website
          </div>
        </Link>
        <Link href="/home" passHref>
          <video
            preload="true"
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-10 min-w-full cursor-pointer bg-dunes bg-no-repeat bg-cover bg-center object-cover min-h-full "
          >
            <source src="/assets/Clickweb.mp4" type="video/mp4" />
          </video>
        </Link>
      </header>
    </div>
  );
};

export default IndexPage;
