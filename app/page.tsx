import Head from 'next/head';
import Counter from './components/Counter';

export default function Home() {
 return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white shadow-md rounded p-6">
        <Counter />
      </main>
    </div>
 );
}