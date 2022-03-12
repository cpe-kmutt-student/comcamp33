import Header from '@components/Header';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

const authLogoPath = {
  'Facebook': '/assets/facebook-logo.png',
};

const AuthPage = ({ providers }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <Header />

      <div className="flex flex-col items-center bg-white p-8">
        <h1 className="font-bold text-2xl">Log in to Comcamp 33</h1>

        <hr className="my-4 border-1 w-full border-gray-300" />

        {Object.values(providers).map((provider) => {
          return (
            <div key={provider.name} className="w-full">
              <button
                className="flex flex-row justify-center items-center w-full space-x-2 font-medium text-sm py-2 border border-gray-300 hover:bg-slate-600 hover:text-white hover:border-slate-600 transition-colors duration-100 ease-in"
                onClick={() => signIn(provider.id)}
              >
                <div className="relative w-5 h-5">
                  <Image src={authLogoPath[provider.name]} layout="fill" alt="logo" loading="lazy" />
                </div>
                <span>Sign in with {provider.name}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  }
};

export default AuthPage;
