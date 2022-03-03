import Image from 'next/image';
import Header from '../components/Header';
import { signIn, signOut, useSession } from 'next-auth/react';

const IndexPage = () => {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto">
      <Header />

      <h1 className="flex justify-center text-xl font-semibold">Comcamp 33</h1>

      <section className="flex flex-col justify-center items-center space-y-4 my-4">
        {session && (
          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src={session.user.image} alt=""
                layout='fill'
              />
            </div>
            <p>Welcome, {session.user.name}</p>
            <p>Welcome, {session.user.email}</p>
          </div>
        )}

        <button
          className="px-6 py-3 text-white font-medium uppercase tracking-wider bg-slate-700 hover:bg-slate-900 transition-colors ease-in-out duration-300"
          onClick={() => session ? signOut() : signIn() }
        >
          {session ? 'sign out': 'sign in'}
        </button>
      </section>
    </div>
  );
}

export default IndexPage;
